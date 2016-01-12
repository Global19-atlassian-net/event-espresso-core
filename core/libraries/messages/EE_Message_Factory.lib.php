<?php

if ( ! defined( 'EVENT_ESPRESSO_VERSION' ) ) {
	exit( 'No direct script access allowed' );
}



/**
 * Class EE_Message_Factory
 *
 * Description
 *
 * @package       Event Espresso
 * @subpackage    core
 * @author        Brent Christensen
 * @since         $VID:$
 *
 */
class EE_Message_Factory {


	/**
	 * @type EE_Message_Factory $_instance
	 */
	protected static $_instance = null;


	/**
	 * @type EE_Messenger_And_Message_Type_Manager $_messenger_and_message_type_manager
	 */
	protected $_messenger_and_message_type_manager;



	/**
	 * EE_Message_Factory constructor.
	 *
	 * @access protected
	 * @param \EE_Messenger_And_Message_Type_Manager    $Messenger_And_Message_Type_Manager
	 */
	protected function __construct(
		EE_Messenger_And_Message_Type_Manager $Messenger_And_Message_Type_Manager
	) {
		$this->_messenger_and_message_type_manager = $Messenger_And_Message_Type_Manager;
	}



	/**
	 * @singleton method used to instantiate class object
	 * @access    public
	 * @param \EE_Messenger_And_Message_Type_Manager $Messenger_And_Message_Type_Manager
	 * @return \EE_Message_Factory instance
	 */
	public static function instance( EE_Messenger_And_Message_Type_Manager $Messenger_And_Message_Type_Manager = null ) {
		// check if class object is instantiated, and instantiated properly
		if ( ! self::$_instance instanceof EE_Message_Factory ) {
			self::$_instance = new EE_Message_Factory( $Messenger_And_Message_Type_Manager );
		}
		return self::$_instance;
	}



	/**
	 * @access public
	 * @param  array $props_n_values
	 * @param  bool  $validate - whether or not to throw exceptions if resources are invalid
	 * @return mixed
	 */
	public static function create( $props_n_values = array(), $validate = true ) {
		$Message_Factory = EE_Registry::instance()->load_lib( 'Message_Factory' );
		return $Message_Factory->_create( $props_n_values, $validate );
	}



	/**
	 * @access public
	 * @param  \EE_Message $message
	 * @param  bool        $validate - whether or not to throw exceptions if resources are invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	public static function set_messenger_and_message_type( EE_Message $message, $validate = true ) {
		$Message_Factory = EE_Registry::instance()->load_lib( 'Message_Factory' );
		return $Message_Factory->_set_messenger_and_message_type( $message, $validate );
	}



	/**
	 * @access public
	 * @param  \EE_Message $message
	 * @param  bool        $validate - whether or not to throw exceptions if resources are invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	public static function set_messenger( EE_Message $message, $validate = true ) {
		$Message_Factory = EE_Registry::instance()->load_lib( 'Message_Factory' );
		return $Message_Factory->_set_messenger( $message, $validate );
	}



	/**
	 * @access public
	 * @param  \EE_Message $message
	 * @param  bool        $validate - whether or not to throw exceptions if resources are invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	public static function set_message_type( EE_Message $message, $validate = true ) {
		$Message_Factory = EE_Registry::instance()->load_lib( 'Message_Factory' );
		return $Message_Factory->_set_message_type( $message, $validate );
	}



	/**
	 * @access protected
	 * @param  array $props_n_values
	 * @param  bool  $validate - whether or not to throw exceptions if resources are invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	protected function _create( $props_n_values = array(), $validate = true ) {
		if ( ! empty( $props_n_values['MSG_ID'] ) ) {
			$message = EE_Message::new_instance_from_db( $props_n_values );
		} else {
			$message = EE_Message::new_instance( $props_n_values );
		}
		return $this->_set_messenger_and_message_type( $message, $validate );
	}



	/**
	 * @access public
	 * @param  \EE_Message $message
	 * @param  bool        $validate - whether or not to throw exceptions if resources are invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	protected function _set_messenger_and_message_type( EE_Message $message, $validate = true ) {
		$message = $this->_set_messenger( $message, $validate );
		$message = $this->_set_message_type( $message, $validate );
		return $message;
	}



	/**
	 * @access protected
	 * @param  \EE_Message $message
	 * @param  bool        $validate - whether or not to throw an exception if messenger is invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	protected function _set_messenger( EE_Message $message, $validate = true ) {
		$messenger = $this->_messenger_and_message_type_manager->get_messenger( $message->messenger() );
		if ( ! $messenger instanceof  EE_Messenger && $validate ) {
			throw new EE_Error(
				sprintf(
					__( 'The "%1$s" messenger set for this message is missing or invalid. Please double-check the spelling and verify that the correct files exist.', 'event_espresso' ),
					$message->messenger()
				)
			);
		}
		$message->set_messenger_object( $messenger );
		return $message;
	}



	/**
	 * @access protected
	 * @param  \EE_Message $message
	 * @param  bool        $validate - whether or not to throw an exception if message_type is invalid
	 * @return \EE_Message
	 * @throws \EE_Error
	 */
	protected function _set_message_type( EE_Message $message, $validate = true ) {
		$message_type = $this->_messenger_and_message_type_manager->get_message_type( $message->message_type() );
		if ( ! $message_type instanceof  EE_Message_Type && $validate ) {
			throw new EE_Error(
				sprintf(
					__( 'The %1$s message type set for this message is missing or invalid. Please double-check the spelling and verify that the correct files exist.', 'event_espresso' ),
					$message->message_type()
				)
			);
		}
		$message->set_message_type_object( $message_type );
		return $message;
	}

}
// End of file EE_Message_Factory.lib.php
// Location: /EE_Message_Factory.lib.php