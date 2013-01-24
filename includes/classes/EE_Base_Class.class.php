<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of EE_Base_Class
 *
 * @author mnelson4
 */
abstract class EE_Base_Class extends EE_Base{
	/**
	 * Instance of model that corresponds to this class.
	 * This should be lazy-loaded to avoid recursive loop
	 * @var EEM_Base 
	 */
	private $_model;
	
	/**
	 * basic constructor for Event Espresso classes, performs any necessary initialization,
	 * and verifies it's children play nice
	 */
	public function __construct($fieldValues=null){
		$this->_model=$this->_get_model();
		if($fieldValues!=null){
			foreach($fieldValues as  $fieldName=>$fieldValue){
				//"<br>set $fieldName to $fieldValue";
				$this->set($fieldName,$fieldValue,true);
			}
		}
	}
	
	/**
	 * Gets the 
	 * @return EEM_TempBase
	 */
	protected function  _get_model(){
		if(!$this->_model){
			//find model for this class
			$modelName=$this->_get_model_name();
			require_once($modelName.".model.php");
			//$modelObject=new $modelName;
			$this->_model=call_user_func($modelName."::instance");
		}
		return $this->_model;
	}
	
	/**
	 * Gets the model's name for this class. Eg, if this class' name is 
	 * EE_Answer, it will return EEM_Answer.
	 * @return string
	 */
	private function _get_model_name(){
		$className=get_class($this);
		$modelName=str_replace("EE_","EEM_",$className);
		return $modelName;
	}
	
	
	/**
	 * converts a field name to the private attribute's name on teh class.
	 * Eg, converts "ANS_ID" to "_ANS_ID", which can be used like so $attr="_ANS_ID"; $this->$attr;
	 * @param string $fieldName
	 * @return string
	 */
	private function _get_private_attribute_name($fieldName){
		return "_".$fieldName;
	}
	
	/**
	 * gets the field (class attribute) specified by teh given name
	 * @param string $fieldName if the field you want is named $_ATT_ID, use 'ATT_ID' (omit preceding underscore)
	 * @return mixed
	 */
	public function get($fieldName){
		$privateFieldName=$this->_get_private_attribute_name($fieldName);
		return $this->$privateFieldName;
	}
	
	
	/**
	 * Sets the class attribute by the specified name to the value.
	 * Uses the _fieldSettings attribute to 
	 * @param string $attributeName
	 * @param mixed $value
	 * @param boolean $useDefault if $value is null and $useDefault is true, retrieve a default value from the EEM_TempBase's EE_Model_Field.
	 * @return null
	 */
	public function set($fieldName,$value,$useDefault=false){
		$fields=$this->get_fields_settings();
		if(!array_key_exists($fieldName, $fields)){
			throw new EE_Error(sprintf(__("An internal Event Espresso error has occured. Please contact Event Espresso.||The field %s doesnt exist on Event Espresso class %s",'event_espresso'),$fieldName,get_class($this)));
		}
		$fieldSettings=$fields[$fieldName];
		//if this field doesn't allow nulls, check it isn't null
		if($value===null && $useDefault){
			$privateAttributeName=$this->_get_private_attribute_name($fieldName);
			$modelFields=$this->_get_model()->fields_settings();
			$defaultValue=$modelFields[$fieldName]->default_value();
			$this->$privateAttributeName=$defaultValue;
			return true;
		}elseif($value===null & !$useDefault){
			if(!$fieldSettings->nullable){
				$msg = sprintf( __( 'Event Espresso error setting value on field %s.||Field %s on class %s cannot be null, but you are trying to set it to null!', 'event_espresso' ), $fieldName,$fieldName,get_class($this));
				EE_Error::add_error( $msg, __FILE__, __FUNCTION__, __LINE__ );
				return false;
			}else{
				$privateAttributeName=$this->_get_private_attribute_name($fieldName);
				$this->$privateAttributeName=$value;
				return true;
			}
		}else{
			//verify its of the right type
			if($this->_verify_field_type($value,$fieldSettings)){
				$internalFieldName=$this->_get_private_attribute_name($fieldName);
				$this->$internalFieldName=$this->_sanitize_field_input($value, $fieldSettings);
				return true;
			}else{
				$msg = sprintf( __( 'Event Espresso error setting value on field %s.||In trying to set field %s of class %s to value %s, it was found to not be of type %s', 'event_espresso' ), $fieldName,$fieldName,get_class($this),print_r($value,true),$fieldSettings->type());
				EE_Error::add_error( $msg, __FILE__, __FUNCTION__, __LINE__ );
				return false;
			}
		}
	}
	
	/**
	 * Sanitizes (or cleans) the value. Ie, 
	 * @param type $value
	 * @param type $fieldSettings
	 * @return type
	 * @throws EE_Error
	 */
	protected function _sanitize_field_input($value,$fieldSettings){
		$return=null;
		switch($fieldSettings->type()){
			case 'primary_key':
				$return=absint($value);
				break;
			case 'foreign_key':
				$return=absint($value);
				break;
			case 'int':
				$return=intval($value);
				break;
			case 'bool':
				if($value){
					$return=true;
				}else{
					$return=false;
				}
				break;
			case 'plaintext':
			case 'primary_text_key':
			case 'foreign_text_key':
				$return=htmlentities(wp_strip_all_tags("$value"), ENT_QUOTES, 'UTF-8' );
				break;
			case 'simplehtml':
				global $allowedtags;
				$return=  htmlentities(wp_kses("$value",$allowedtags),ENT_QUOTES,'UTF-8');
				break;
			case 'fullhtml':
				$return= htmlentities("$value",ENT_QUOTES,'UTF-8');
				break;
			case 'float':
				$return=floatval($value);
				break;
			case 'enum':
				$return=$value;
		}
		$return=apply_filters('filter_hook_espresso_sanitizeFieldInput',$return,$value,$fieldSettings);//allow to be overridden
		if(is_null($return)){
			throw new EE_Error(sprintf(__("Internal Event Espresso error. Field %s on class %s is of type %s","event_espresso"),$fieldSettings->nicename(),get_class($this),$fieldSettings->type()));
		}
		return $return;
	}
	
	/**
	 * verifies that the specified field is of the correct type
	 * @param mixed $value the value to check if it's of the correct type
	 * @param EE_Model_Field $fieldSettings settings for a specific field. 
	 * @return boolean
	 * @throws EE_Error if fieldSettings is misconfigured
	 */
	protected function _verify_field_type($value,  EE_Model_Field $fieldSettings){
		$return=false;
		switch($fieldSettings->type()){
			case 'primary_key':
			case 'foreign_key':
			case 'int':
				if(ctype_digit($value) || is_numeric($value)){
					$return= true;
				}
				break;
			case 'bool':
				//$value=intval($value);
				if(is_bool($value) || is_int($value) || ctype_digit($value)){
					$return=true;
				}
				break;
			case 'primary_text_key':
			case 'foreign_text_key':
			case 'plaintext':
			case 'simplehtml':
			case 'fullhtml':
				if(is_string($value)){
					$return= true;
				}
				break;
			case 'float':
				if(is_float($value)){
					$return= true;
				}
				break;
			case 'enum':
				$allowedValues=$fieldSettings->allowed_enum_values();
				if(in_array($value,$allowedValues) || in_array(intval($value),$allowedValues)){
					$return=true;
				}
				break;
		}
		$return= apply_filters('filter_hook_espresso_verifyFieldIsOfCorrectType',$return,$value,$fieldSettings);//allow to be overridden
		if(is_null($return)){
			throw new EE_Error(sprintf(__("Internal Event Espresso error. Field %s on class %s is of type %s","event_espresso"),$fieldSettings->nicename,get_class($this),$fieldSettings->type()));
		}
		return $return;
	}
	
	/**
	 * retrieves all the fieldSettings on this class
	 * @return array
	 * @throws EE_Error
	 */
	public function get_fields_settings(){
		if($this->_get_model()->fields_settings()==null){
			throw new EE_Error(sprintf("An unexpected error has occured with Event Espresso.||An Event Espresso class has not been fully implemented. %s does not override the \$_fieldSettings attribute.",get_class($this)),"event_espresso");
		}
		return $this->_get_model()->fields_settings();
	}
	
	/**
	*		save object to db
	* 
	* 		@access		private
	* 		@param		array		$where_cols_n_values		
	*		@return int, 1 on a successful update, the ID of
	*					the new entry on insert; 0 on failure		
	
	*/	
	public function save() {
		$set_column_values = array();
		foreach(array_keys($this->get_fields_settings()) as $fieldName){
			$attributeName=$this->_get_private_attribute_name($fieldName);
			$set_column_values[$fieldName]=$this->$attributeName;
		}
		if ( $set_column_values[$this->_get_primary_key_name()]!=null ){
			$results = $this->_get_model()->update ( $set_column_values, array($this->_get_primary_key_name()=>$this->get_primary_key()) );
		} else {
			unset($set_column_values[$this->_get_primary_key_name()]);
			$results = $this->_get_model()->insert ( $set_column_values );
			if($results){//if successful, set the primary key
				$results=$results['new-ID'];
				$this->set($this->_get_primary_key_name(),$results);//for some reason the new ID is returned as part of an array,
				//where teh only key is 'new-ID', and it's value is the new ID.
			}
		}
		
		return $results;
	}
	
	/**
	 * returns the name of the primary key attribute
	 * @return string
	 */
	private function _get_primary_key_name(){
		return $this->_get_model()->primary_key_name();
	}
	
	/**
	 * Returns teh value of the primary key for this class. false if there is none
	 * @return int
	 */
	public function get_primary_key(){
		$pk=$this->_get_private_attribute_name($this->_get_primary_key_name());
		return $this->$pk;//$pk is the primary key's NAME, so get the attribute with that name and return it
	}
	
	/**
	 * Functions through which all other calls to get a single related model object is passed.
	 * Handy for common logic between them, eg: caching.
	 * @param string $relationName
	 * @return EE_Base_Class
	 */
	protected function _get_first_related($relationName){
		if($this->$relationName==null){
			$model=$this->_get_model();
			$relationRequested=$model->get_first_related($this, $relationName);
			$this->$relationName=$relationRequested;
		}
		return $this->$relationName;
	}
	
	/**
	 * Function through which all other calls to get many related model objects is passed.
	 * Handy for common lgoci between them, eg: caching.
	 * @param string $relationName
	 * @param array $where_col_n_vals keys are field/column names, values are their values
	 * @return EE_Base_Class[]
	 */
	protected function _get_many_related($relationName,$where_col_n_vals=null){
		$privatelRelationName=$this->_get_private_attribute_name($relationName);
		if($this->$privatelRelationName==null){
			$model=$this->_get_model();
			$relationRequested=$model->get_many_related($this, $relationName,$where_col_n_vals);
			$this->$privatelRelationName=$relationRequested;
		}
		return $this->$privatelRelationName;
	}
	
	/**
	 * Adds a relationship to the specified EE_Base_Class object, given the relationship's name. Eg, if the curren tmodel is related
	 * to a group of events, the $relationName should be 'Events', and should be a key in the EE Model's $_model_relations array
	 * @param EE_Base_Class $otherObjectModel
	 * @param string $relationName eg 'Events','Question',etc.
	 * @return boolean success
	 */
	protected function _add_relation_to(EE_Base_Class $otherObjectModel,$relationName){
		$model=$this->_get_model();
		return $model->add_relation_to($this, $otherObjectModel, $relationName);
	}
	/**
	 * Removes a relationship to the psecified EE_Base_Class object, given the relationships' name. Eg, if the curren tmodel is related
	 * to a group of events, the $relationName should be 'Events', and should be a key in the EE Model's $_model_relations array
	 * @param EE_Base_Class $otherObjectModel
	 * @param string $relationName
	 * @return boolean success
	 */
	protected function _remove_relation_to(EE_Base_Class $otherObjectModel,$relationName){
		$model=$this->_get_model();
		return $model->remove_relationship_to($this, $otherObjectModel, $relationName);
	}
	/**
	 * Wrapper for get_primary_key(). Gets the value of the primary key.
	 * @return mixed, if the primary key is of type INT it'll be an int. Otherwise it could be a string
	 */
	public function ID(){
		$r=$this->get_primary_key();
		return $r;
	}
	
	/**
	 * Very handy general function to allow for plugins to extend any child of EE_Base_Class.
	 * If a method is called on a child of EE_Base_Class that doesn't exist, this function is called (http://www.garfieldtech.com/blog/php-magic-call)
	 * and passed the method's name and arguments.
	 * Instead of requiring a plugin to extend the EE_Base_Class (which works fine is there's only 1 plugin, but when will that happen?)
	 * they can add a hook onto 'filters_hook_espresso__{className}__{methodName}' (eg, filters_hook_espresso__EE_Answer__my_great_function)
	 * and accept an array of the original arguments passed to the function. Whatever their callbackfunction returns will be returned by this function.
	 * Example: in functions.php (or in a plugin):
	 * add_filter('filter_hook_espresso__EE_Answer__my_callback','my_callback',10,1);
	 * function my_callback($previousReturnValue,$argsArray){
			$returnString= "you called my_callback! and passed args:".implode(",",$argsArray);
	 *		return $previousReturnValue.$returnString;
	 * }
	 * require('EE_Answer.class.php');
	 * $answer=new EE_Answer(2,3,'The answer is 42');
	 * echo $answer->my_callback('monkeys',100);
	 * //will output "you called my_callback! and passed args:monkeys,100"
	 * @param string $methodName name of method which was called on a child of EE_Base_Class, but which 
	 * @param array $args array of original arguments passed to the function
	 * @return mixed whatever the plugin which calls add_filter decides
	 */
	public function __call($methodName,$args){
		$className=get_class($this);
		$tagName="filter_hook_espresso__{$className}__{$methodName}";
		if(!has_filter($tagName)){
			throw new EE_Error(sprintf(__("Method %s on class %s does not exist! You can create one with the following code in functions.php or in a plugin: add_filter('%s','my_callback',10,1);function my_callback(\$previousReturnValue,\$argsArray){/*function body*/return \$whatever;}","event_espresso"),
										$methodName,$className,$tagName));
		}
		return apply_filters($tagName,null,$args);
	}
	
}

?>
