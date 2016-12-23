<?php

/**
 * EE_Full_HTML_Field
 * Any HTML can be stored in this field for any user. Note: regardless of the users'
 * capabilities, they should not be able to submit content that will be directly
 * placed into these fields; instead content for these fields should be generated by code only.
 * This means that only a site admin, who can change the code, should be able to directly affect
 * what gets put into these fields.
 * If this field's content is USUALLY generated directly by code and not by users,
 * but you want to have an exceptional case where users can directly submit content
 * for this field, then you should first run the content through `wp_kses( $content, 'post' )`
 */
class EE_Full_HTML_Field extends EE_Text_Field_Base
{


    /**
     * Does shortcodes and auto-paragraphs the content (unless schema is 'no_wpautop')
     *
     * @param type $value_on_field_to_be_outputted
     * @param type $schema
     * @return string
     */
    function prepare_for_pretty_echoing($value_on_field_to_be_outputted, $schema = null)
    {
        if ($schema == 'form_input') {
            return parent::prepare_for_pretty_echoing($value_on_field_to_be_outputted, $schema);
        } elseif ($schema == 'no_wpautop') {
            return do_shortcode(parent::prepare_for_pretty_echoing($value_on_field_to_be_outputted, $schema));
        } else {
            return wpautop(do_shortcode(parent::prepare_for_pretty_echoing($value_on_field_to_be_outputted, $schema)));
        }
    }



    public function get_schema()
    {
        $schema = parent::get_schema();
        $schema['type'] = 'object';
        $schema['properties'] = array(
            'raw' => array(
                'description' =>  sprintf(
                    __('%s - the value in the database.', 'event_espresso'),
                    $this->get_nicename()
                ),
                'type' => 'string'
            ),
            'rendered' => array(
                'description' =>  sprintf(
                    __('%s - transformed for display.', 'event_espresso'),
                    $this->get_nicename()
                ),
                'type' => 'string',
                'readonly' => true
            )
        );
        return $schema;
    }
}