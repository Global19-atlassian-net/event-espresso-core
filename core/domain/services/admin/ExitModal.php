<?php
namespace EventEspresso\core\domain\services\admin;

use EventEspresso\core\services\assets\Registry;
use InvalidArgumentException;

/**
 * ExitModal
 * Sets up server side logic etc for the exit modal survey triggered when deactivating EE core.
 *
 * DEVELOPERS: this is a in progress api, do not use this class or rely on its api to remain consistent.
 *
 * @package EventEspresso\core\domain\services\admin
 * @author  Darren Ethier
 * @since   $VID:$
 */
class ExitModal
{

    /**
     * @var Registry
     */
    private $assets_registry;

    /**
     * ExitModal constructor.
     *
     * @param Registry $assets_registry
     */
    public function __construct(Registry $assets_registry)
    {
        $this->assets_registry = $assets_registry;
        add_action('in_admin_footer', array($this, 'modalContainer'));
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }


    /**
     * Callback on in_admin_footer that is used to output the exit modal container.
     */
    public function modalContainer()
    {
        echo '<div id="ee-exit-survey-modal"></div>';
    }


    /**
     * Callback for `admin_enqueue_scripts` to take care of enqueueing scripts and styles specific to the modal.
     *
     * @throws InvalidArgumentException
     */
    public function enqueues()
    {
        $this->assets_registry->addData(
            'exitModali18n',
            array(
                'introText' => htmlspecialchars(
                    __(
                        'Do you have a moment to share why you are deactivating Event Espresso?',
                        'event_espresso'
                    ),
                    ENT_NOQUOTES
                ),
                'doSurveyButtonText' => htmlspecialchars(
                    __(
                        'Sure I\'ll help',
                        'event_espresso'
                    ),
                    ENT_NOQUOTES
                ),
                'skipButtonText' => htmlspecialchars(
                    __(
                        'Skip',
                        'event_espresso'
                    ),
                    ENT_NOQUOTES
                )
            )
        );
        wp_enqueue_script('ee-exit-modal-survey');
        wp_enqueue_style('ee-exit-modal-survey');
    }
}