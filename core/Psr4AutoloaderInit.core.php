<?php if ( ! defined('EVENT_ESPRESSO_VERSION')) { exit('No direct script access allowed'); }
/**
 * Class Psr4AutoloaderInit
 *
 * Loads the Psr4Autoloader class and registers namespaces
 *
 * @package 			Event Espresso
 * @subpackage 	core
 * @author 				Brent Christensen
 * @since 				4.8
 *
 */

class Psr4AutoloaderInit {



	/**
	 * @access    public
	 */
	public function __construct() {
		static $initialized = false;
		if ( ! $initialized ) {
			// instantiate PSR4 autoloader
			espresso_load_required( EE_CORE . 'Psr4Autoloader.php' );
			$psr4_loader = new \EventEspresso\Core\Psr4Autoloader();
			// register the autoloader
			$psr4_loader->register();
			// register the base directories for the namespace prefix
			$psr4_loader->addNamespace( 'EventEspresso', EE_PLUGIN_DIR_PATH );
			$initialized = true;
		}
	}



}
// End of file Psr4AutoloaderInit.core.php
// Location: /core/Psr4AutoloaderInit.core.php