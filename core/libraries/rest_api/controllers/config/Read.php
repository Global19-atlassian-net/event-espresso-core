<?php
namespace EventEspresso\core\libraries\rest_api\controllers\config;
if ( !defined( 'EVENT_ESPRESSO_VERSION' ) ) {
	exit( 'No direct script access allowed' );
}

/**
 *
 * _Read
 *
 * For handling READ requests for config data
 *
 * @package			Event Espresso
 * @subpackage
 * @author				Mike Nelson
 *
 */
class Read {
	public static function handle_request( \WP_REST_Request $request) {
		$cap = \EE_Restriction_Generator_Base::get_default_restrictions_cap();
		if( \EE_Capabilities::instance()->current_user_can( $cap, 'read_over_api' ) ){
			return \EE_Config::instance();
		}else{
			return new \WP_Error( 'cannot_read_config', sprintf( __( 'You do not have the necessary capabilities (%s) to read Event Espresso Configuration data', 'event_espresso' ), $cap ), array( 'status' => 403 ));
		}
	}
}

// End of file Read.php