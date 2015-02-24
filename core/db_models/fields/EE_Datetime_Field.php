<?php

/**
 * Text_Fields is a base class for any fields which are have integer value. (Exception: foreign and private key fields. Wish PHP had multiple-inheritance for this...)
 */
class EE_Datetime_Field extends EE_Model_Field_Base {

	/**
	 * These properties hold the default formats for date and time.  Defaults are set via the constructor and can be overridden on class instantiation.  However they can also be overridden later by the set_format() method (and corresponding set_date_format, set_time_format methods);
	 * @var
	 */
	protected $_date_format = NULL;
	protected $_time_format = NULL;
	protected $_pretty_date_format = NULL;
	protected $_pretty_time_format = NULL;
	// timezone objects
	protected $_DateTimeZone = NULL;
	protected $_UTC_DateTimeZone = NULL;
	protected $_blog_DateTimeZone = NULL;


	/**
	 * This property holds how we want the output returned when getting a datetime string.  It is set for the set_date_time_output() method.  By default this is empty.  When empty, we are assuming that we want both date and time returned via getters.
	 * @var mixed (null|string)
	 */
	protected $_date_time_output = NULL;


	/**
	 * timezone string
	 * This gets set by the constructor and can be changed by the "set_timezone()" method so that we know what timezone incoming strings|timestamps are in.  This can also be used before a get to set what timezone you want strings coming out of the object to be in.  Default timezone is the current WP timezone option setting
	 * @var string
	 */
	protected $_timezone_string = NULL;



	/**
	 * This holds whatever UTC offset for the blog (we automatically convert timezone strings into their related offsets for comparison purposes).
	 * @var int
	 */
	protected $_blog_offset = NULL;



	/**
	 * @param string 	$table_column
	 * @param string 	$nice_name
	 * @param bool 	$nullable
	 * @param string 	$default_value
	 * @param string 	$timezone_string
	 * @param string 	$date_format
	 * @param string 	$time_format
	 * @param string 	$pretty_date_format
	 * @param string 	$pretty_time_format
	 */
	public function __construct( $table_column, $nice_name, $nullable, $default_value, $timezone_string = '', $date_format = '', $time_format = '', $pretty_date_format = '', $pretty_time_format = '' ){

		$this->_date_format = ! empty( $date_format ) ? $date_format : get_option('date_format');
		$this->_time_format = ! empty( $time_format ) ? $time_format : get_option('time_format');
		$this->_pretty_date_format = ! empty( $pretty_date_format ) ? $pretty_date_format : get_option('date_format');
		$this->_pretty_time_format = ! empty( $pretty_time_format ) ? $pretty_time_format : get_option('time_format');

		parent::__construct( $table_column, $nice_name, $nullable, $default_value );
		$this->set_timezone( $timezone_string );

	}



	/**
	 * @return string
	 */
	public function get_wpdb_data_type() {
		return '%s';
	}



	/**
	 * @return DateTimeZone
	 */
	public function get_UTC_DateTimeZone() {
		return $this->_UTC_DateTimeZone instanceof DateTimeZone ? $this->_UTC_DateTimeZone : $this->_create_timezone_object_from_timezone_string( 'UTC' );
	}



	/**
	 * @return DateTimeZone
	 */
	public function get_blog_DateTimeZone() {
		return $this->_blog_DateTimeZone instanceof DateTimeZone ? $this->_blog_DateTimeZone : $this->_create_timezone_object_from_timezone_string( '' );
	}



	/**
	 * this prepares any incoming date data and make sure its converted to a utc unix timestamp
	 * @param  string|int $value_inputted_for_field_on_model_object could be a string formatted date time or int unix timestamp
	 * @return int                                           unix timestamp (utc)
	 */
	public function prepare_for_set( $value_inputted_for_field_on_model_object ) {
		return $this->_get_date_object( $value_inputted_for_field_on_model_object );
	}





	/**
	 * This returns the format string to be used by getters depending on what the $_date_time_output property is set at.
	 *
	 * getters need to know whether we're just returning the date or the time or both.  By default we return both.
	 *
	 * @access protected
	 * @param bool $pretty If we're returning the pretty formats or standard format string.
	 * @return string    The final assembled format string.
	 */
	protected function _get_date_time_output( $pretty = FALSE ) {

		switch ( $this->_date_time_output ) {
			case 'time' :
				return $pretty ? $this->_pretty_time_format : $this->_time_format;
				break;

			case 'date' :
				return $pretty ? $this->_pretty_date_format : $this->_date_format;
				break;

			default :
				return $pretty ? $this->_pretty_date_format . ' ' . $this->_pretty_time_format : $this->_date_format . ' ' . $this->_time_format;
		}
	}




	/**
	 * This just sets the $_date_time_output property so we can flag how date and times are formatted before being returned (using the format properties)
	 *
	 * @access public
	 * @param string $what acceptable values are 'time' or 'date'.  Any other value will be set but will always result in both 'date' and 'time' being returned.
	 * @return void
	 */
	public function set_date_time_output( $what = NULL ) {
		$this->_date_time_output = $what;
	}




	/**
	 * See $_timezone property for description of what the timezone property is for.  This SETS the timezone internally for being able to reference what timezone we are running conversions on when converting TO the internal timezone (UTC Unix Timestamp) for the object OR when converting FROM the internal timezone (UTC Unix Timestamp).
	 *
	 * We also set some other properties in this method.
	 *
	 * @access public
	 * @param string $timezone_string A valid timezone string as described by @link http://www.php.net/manual/en/timezones.php
	 * @return void
	 */
	public function set_timezone( $timezone_string ) {
		if( empty( $timezone_string ) && $this->_timezone_string != NULL ){
			// leave the timezone AS-IS if we already have one and
			// the function arg didn't provide one
			return;
		}
		$this->_timezone_string = EEH_DTT_Helper::get_valid_timezone_string( $timezone_string );
		$this->_timezone_string = ! empty( $timezone_string ) ? $timezone_string : 'UTC';
		$this->_DateTimeZone = $this->_create_timezone_object_from_timezone_string( $this->_timezone_string );
	}



	/**
	 * _create_timezone_object_from_timezone_name
	 *
	 * @access protected
	 * @param string $timezone_string
	 * @return \DateTimeZone
	 */
	protected function _create_timezone_object_from_timezone_string( $timezone_string = '' ) {
		return new DateTimeZone( EEH_DTT_Helper::get_valid_timezone_string( $timezone_string ) );
	}




	/**
	 * This just returns whatever is set for the current timezone.
	 *
	 * @access public
	 * @return string timezone string
	 */
	public function get_timezone() {
		return $this->_timezone_string;
	}


	/**
	 * set the $_date_format property
	 *
	 * @access public
	 * @param string $format a new date format (corresponding to formats accepted by PHP date() function)
	 * @param bool   $pretty Whether to set pretty format or not.
	 * @return void
	 */
	public function set_date_format( $format, $pretty = false ) {
		if ( $pretty ) {
			$this->_pretty_date_format = $format;
		} else {
			$this->_date_format = $format;
		}
	}



	/**
	 * return the $_date_format property value.
	 *
	 * @param bool   $pretty Whether to get pretty format or not.
	 * @return string
	 */
	public function get_date_format( $pretty = false ) {
		return $pretty ? $this->_pretty_date_format : $this->_date_format;
	}




	/**
	 * set the $_time_format property
	 *
	 * @access public
	 * @param string $format a new time format (corresponding to formats accepted by PHP date() function)
	 * @param bool   $pretty Whether to set pretty format or not.
	 * @return void
	 */
	public function set_time_format( $format, $pretty = false ) {
		if ( $pretty ) {
			$this->_pretty_time_format = $format;
		} else {
			$this->_time_format = $format;
		}
	}



	/**
	 * return the $_time_format property value.
	 *
	 * @param bool   $pretty Whether to get pretty format or not.
	 * @return string
	 */
	public function get_time_format( $pretty = false ) {
		return $pretty ? $this->_pretty_time_format : $this->_time_format;
	}





	/**
	 * set the $_pretty_date_format property
	 *
	 * @access public
	 * @param string $format a new pretty date format (corresponding to formats accepted by PHP date() function)
	 * @return void
	 */
	public function set_pretty_date_format( $format ) {
		$this->_pretty_date_format = $format;
	}







	/**
	 * set the $_pretty_time_format property
	 *
	 * @access public
	 * @param string $format a new pretty time format (corresponding to formats accepted by PHP date() function)
	 * @return void
	 */
	public function set_pretty_time_format( $format ) {
		$this->_pretty_time_format = $format;
	}



	/**
	 * Only sets the time portion of the datetime.
	 * @param string $time_to_set_string     like 8am,
	 * @param DateTime    $current current DateTime object for the datetime field
	 * @return int updated timestamp
	 */
	public function prepare_for_set_with_new_time( $time_to_set_string, DateTime $current ){
		//parse incoming string
		$parsed = date_parse_from_format( $this->_time_format, $time_to_set_string );
		//make sure $current is in the correct timezone.
		$current->setTimeZone( $this->_DateTimeZone );
		return $current->setTime( $parsed['hour'], $parsed['minute'], $parsed['second'] );
	}



	/**
	 * Only sets the date portion of the datetime.
	 * @param string $date_to_set_string     like Friday, January 8th,
	 * @param DateTime    $current current DateTime object for the datetime field
	 * @return int updated timestamp
	 */
	public function prepare_for_set_with_new_date( $date_to_set_string, DateTime $current ){
		//parse incoming string
		$parsed = date_parse_from_format( $this->_date_format, $date_to_set_string );
		//make sure $current is in the correct timezone
		$current->setTimeZone( $this->_DateTimeZone );
		return $current->setDate( $parsed['year'], $parsed['month'], $parsed['day'] );
	}



	/**
	 * This returns the given datetime value.
	 *
	 * @param  mixed $DateTime
	 * @return string formatted date time for given timezone
	 */
	public function prepare_for_get( $DateTime ) {
		return $this->_prepare_for_display( $DateTime  );
	}



	/**
	 * This differs from prepare_for_get in that it considers whether the internal $_timezone differs
	 * from the set wp timezone.  If so, then it returns the datetime string formatted via
	 * _pretty_date_format, and _pretty_time_format.  However, it also appends a timezone
	 * abbreviation to the date_string.
	 *
	 * @param mixed $DateTime
	 * @param null     $schema
	 * @return string
	 */
	public function prepare_for_pretty_echoing( $DateTime, $schema = null ) {
		return $this->_prepare_for_display( $DateTime, true );
	}



	/**
	 * This prepares the EE_DateTime value to be saved to the db as mysql timestamp (UTC +0
	 * timezone).
	 *
	 * @param DateTime $DateTime
	 * @param bool     $pretty
	 * @return string
	 * @throws \EE_Error
	 */
	protected function _prepare_for_display( DateTime $DateTime, $pretty = false ) {
		if ( ! $DateTime instanceof DateTime ) {
			throw new EE_Error( __('EE_Datetime_Field::prepare_for_pretty_echoing requires a DateTime value to be the value for the $datetime_value argument.', 'event_espresso' ) );
		}
		$format_string = $this->_get_date_time_output( $pretty );
		//make sure datetime_value is in the correct timezone (in case that's been updated).
		$DateTime->setTimeZone( $this->_DateTimeZone );
		if ( $pretty ) {
			$timezone_string = $this->_display_timezone() ? '<span class="ee_dtt_timezone_string">(' . $DateTime->format( 'T' ) . ')</span>' : '';
			return $DateTime->format( $format_string ) . $timezone_string;
		} else {
			return $DateTime->format( $format_string );
		}
	}



	/**
	 * This prepares the EE_DateTime value to be saved to the db as mysql timestamp (UTC +0
	 * timezone).
	 *
	 * @param  mixed $datetime_value u
	 * @return string mysql timestamp in UTC
	 * @throws \EE_Error
	 */
	public function prepare_for_use_in_db( $datetime_value ) {
		//we allow an empty value or DateTime object, but nothing else.
		if ( ! empty( $datetime_value ) && ! $datetime_value instanceof DateTime ) {
			throw new EE_Error( __('The incoming value being prepared for setting in the database must either be empty or a php DateTime object', 'event_espresso' ) );
		}

		if ( $datetime_value instanceof DateTime ) {
			return $datetime_value->setTimeZone( $this->get_UTC_DateTimeZone() )->format( 'Y-m-d H:i:s' );
		}

		// if $datetime_value is empty, and ! $this->_nullable, use current_time() but set the GMT flag to true
		return ! $this->_nullable && empty( $datetime_value ) ? current_time( 'mysql', true ) : null;
	}





	/**
	 * This prepares the datetime for internal usage as a PHP DateTime object OR null (if nullable is
	 * allowed)
	 * @param string $datetime_string mysql timestamp in UTC
	 * @return  mixed null | DateTime
	 */
	public function prepare_for_set_from_db( $datetime_string ) {
		//if $datetime_value is empty, and ! $this->_nullable, just use time()
		if ( empty( $datetime_string) && $this->_nullable ) {
			return null;
		}
		// datetime strings from the db should ALWAYS be in UTC+0, so use UTC_DateTimeZone when creating
		$DateTime = empty( $datetime_string ) ? new DateTime( 'now', $this->get_UTC_DateTimeZone() ) : DateTime::createFromFormat( 'Y-m-d H:i:s', $datetime_string, $this->get_UTC_DateTimeZone() );
		// THEN apply the field's set DateTimeZone
		$DateTime->setTimezone( $this->_DateTimeZone );
		return $DateTime;
	}




	/**
	 * All this method does is determine if we're going to display the timezone string or not on any output.
	 *
	 * To determine this we check if the set timezone offset is different than the blog's set timezone offset.  If so, then true.
	 *
	 * @return bool true for yes false for no
	 */
	protected function _display_timezone() {

		// first let's do a comparison of timezone strings.  If they match then we can get out without any further calculations
		$blog_string = get_option( 'timezone_string' );
		if ( $blog_string == $this->_timezone_string ) {
			return FALSE;
		}
		// now we need to calc the offset for the timezone string so we can compare with the blog offset.
		$this_offset = $this->get_timezone_offset( $this->_DateTimeZone );
		$blog_offset = $this->get_timezone_offset( $this->get_blog_DateTimeZone() );
		// now compare
		if ( $blog_offset === $this_offset ) {
			return FALSE;
		}
		return TRUE;
	}



	/**
	 * This method returns a php DateTime object for setting on the EE_Base_Class model.
	 * EE passes around DateTime objects because they are MUCH easier to manipulate and deal
	 * with.
	 *
	 * @param int|string $date_string This should be the incoming date string.  It's assumed to be in
	 *                                		      the format that is set on the date_field!
	 *
	 * @return DateTime
	 */
	protected function _get_date_object( $date_string ) {
		//first if this is an empty date_string and nullable is allowed, just return null.
		if ( $this->_nullable && empty( $date_string ) ) {
			return null;
		}
		// if empty date_string and made it here.
		// Return a datetime object for now in the given timezone.
		if ( empty( $date_string ) ) {
			return new DateTime( "now", $this->_DateTimeZone );
		}
		// if $date_string is matches something that looks like a Unix timestamp let's just use it.
		// The pattern we're looking for is if only the characters 0-9 are found and there are only
		// 10 or more numbers (because 9 numbers even with all 9's would be sometime in 2001 );
		if ( preg_match( '/[0-9]{10,}/', $date_string ) ) {
			try {
				// create DateTime object using our known timezone
				$DateTime = new DateTime( 'now', $this->_DateTimeZone );
				// NOW apply the timestamp which SHOULD be in the same timezone as our DateTimeZone object
				$DateTime->setTimestamp( $date_string );
				return $DateTime;
			 } catch ( Exception $e )  {
			 	// should be rare, but if things got fooled then let's just continue
			 }
		}
		//not a unix timestamp.  So we will use the set format on this object and set timezone to
		//create the DateTime object.
		$format = $this->_date_format . ' ' . $this->_time_format;
		try {
			return DateTime::createFromFormat( $format, $date_string, $this->_DateTimeZone );
		} catch ( Exception $e ) {
			// if we made it here then likely then something went really wrong.  Instead of throwing an exception, let's just return a DateTime object for now, in the set timezone.
			return new DateTime( "now", $this->_DateTimeZone );
		}
	}



	/**
	 * get_timezone_offset
	 *
	 * @param \DateTimeZone $DateTimeZone
	 * @param null          $time
	 * @return mixed
	 */
	public function get_timezone_offset( DateTimeZone $DateTimeZone, $time = null ) {
		$time = preg_match( '/[0-9]{10,}/', $time ) ? $time : time();
		$transitions = $DateTimeZone->getTransitions( $time );
		return $transitions[0]['offset'];
	}




	/**
	 * This will take an incoming timezone string and return the abbreviation for that timezone
	 * @param  string $timezone_string
	 * @return string           abbreviation
	 */
	public function get_timezone_abbrev( $timezone_string ) {
		$timezone_string = EEH_DTT_Helper::get_valid_timezone_string( $timezone_string );
		$dateTime = new DateTime( 'now', new DateTimeZone( $timezone_string ) );
		return $dateTime->format( 'T' );
	}


}
