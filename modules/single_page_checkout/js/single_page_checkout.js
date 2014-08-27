jQuery(document).ready( function($) {

	/**
	 * SPCO CLASS
	 *
	 */
	var SPCO = {

		// main SPCO div
		main_container : $('#ee-single-page-checkout-dv'),
		// all form inputs within the SPCO main_container
		form_inputs : null,
		// array of input fields that require values
		require_values : [],
		// array of multi-value inputs (checkboxes and radio buttons) that do NOT require values
		multi_inputs_that_do_not_require_values : [],
		// success message array
		success_msgs : [],
		// error message array
		error_msgs : [],
		// pixel position from top of form to scroll to after errors
		offset_from_top : 0,
		// modifier for offset_from_top
		offset_from_top_modifier : -50,
		// display debugging info in console?
		display_debug : eei18n.wp_debug,



		/********** INITIAL SETUP **********/



		/**
		 *	reset_validation_vars
		 */
		initialize : function() {
			if ( typeof eei18n !== 'undefined' ) {
				SPCO.form_inputs = SPCO.main_container.find( ':input' );
				SPCO.disable_caching();
				SPCO.set_validation_defaults();
				SPCO.uncheck_copy_option_inputs();
				SPCO.set_listener_for_process_next_step();
				SPCO.set_listener_for_display_payment_method();
				SPCO.set_listener_for_input_validation_value_change();
				SPCO.initialize_datepicker_inputs();
			}
		},



		/**
		 *	submit registration form - submit form and proceed to next step
		 */
		disable_caching : function() {
			// don't cache ajax
			$.ajaxSetup ({ cache: false });
			// clear firefox and safari cache
			$(window).unload( function() {});
		},



		/**
		 *	set_validation_defaults
		 */
		set_validation_defaults : function() {
			$.validator.setDefaults({
				debug: false,
				validClass: '',
				errorClass: 'ee-required-text',
				errorPlacement: function( error, element ) {
					$(element).before( error );
				},
				highlight: function( element ) {
					$(element).addClass('ee-needs-value').removeClass('ee-has-value');
				},
				unhighlight: function(element ) {
					$(element).removeClass('ee-needs-value').addClass('ee-has-value');
				}
			});

		},



		/**
		 *	set/remove "requires-value and needs-value" classes after change, if field is no longer empty
		 */
		uncheck_copy_option_inputs : function() {
			// unset all copy attendee info checkboxes
			$('#spco-copy-all-attendee-chk').prop( 'checked', false );
			$('.spco-copy-attendee-chk').each( function() {
				$(this).prop('checked', false);
			});
		},



		/**
		 *	submit registration form - submit form and proceed to next step
		 */
		set_listener_for_process_next_step : function() {
			SPCO.main_container.on( 'click', '.spco-next-step-btn', function(e) {
				e.preventDefault();
				e.stopPropagation();
				var current_form = $(this).parents('form:first');
				if ( current_form.valid() ){
					SPCO.process_next_step( this );
				} else {
					var msg = SPCO.generate_message_object( '', SPCO.tag_message_for_debugging( 'set_listener_for_process_next_step', eei18n.answer_required_questions ));
					SPCO.scroll_to_top_and_display_messages( current_form, msg );
				}
			});
		},



		/**
		 *	payment method button - clicking a payment method option will display it's details while hiding others
		 */
		set_listener_for_display_payment_method : function() {
			SPCO.main_container.on( 'click', '.spco-payment-method', function() {
				SPCO.display_payment_method( this );
			});
		},



		/**
		 *	set/remove "requires-value and needs-value" classes after change, if field is no longer empty
		 */
		set_listener_for_input_validation_value_change : function() {
			SPCO.form_inputs.focusout( function() {
				$(this ).valid();
			});
		},



		/**
		 *	reset_validation_vars
		 */
		reset_validation_vars : function() {
			// reset
			SPCO.require_values = [];
			SPCO.multi_inputs_that_do_not_require_values = [];
			SPCO.success_msgs = [];
			SPCO.error_msgs = [];
			SPCO.offset_from_top = 0;
		},



		/**
		 *	initialize_datepicker_inputs
		 */
		initialize_datepicker_inputs : function() {
			// if datepicker function exists
			if ( $.fn.datepicker ) {
				// activate datepicker fields
				$( '.datepicker' ).datepicker({
					changeMonth: true,
					changeYear: true,
					yearRange: eei18n.datepicker_yearRange
					// yearRange: "-150:+20"
				});
			}
			// to internationalize the datepicker, copy the following to somewhere safe,
			// then edit and use the language code returned from the WP PHP function: get_bloginfo( 'language' ) for the array key.
			// Multiple languages can be added this way
			/*
			$.datepicker.regional['fr_FR'] = {
				closeText: 'Fermer',
				prevText: 'Précédent',
				nextText: 'Suivant',
				currentText: 'Aujourd\'hui',
				monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
				'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
				monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
				'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
				dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
				dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
				dayNamesMin: ['D','L','M','M','J','V','S'],
				weekHeader: 'Sem.',
				dateFormat: 'dd/mm/yy',
				firstDay: 1,
				isRTL: false,
				showMonthAfterYear: false,
				yearSuffix: ''
			};
			$.datepicker.setDefaults($.datepicker.regional[ eei18n.language ]);
			//	will automagically produce something like:	$.datepicker.setDefaults($.datepicker.regional['fr_FR']);
			*/
		},



		/********** REG STEP NAVIGATION **********/



		/**
		 * opens the the SPCO step specified by step_to_show
		 * shows msg as a notification
		 * @param step_to_show  (string) either step 1, 2, or 3
		 * @param response  (object)
		 * @return void
		 **/
		display_step : function( step_to_show, response ){
			SPCO.hide_steps();
			var step_to_show_div = $('#spco-' + step_to_show + '-dv' );
//			SPCO.console_log_obj( 'display_step -> response', response );
//			SPCO.console_log( 'display_step -> step_to_show', step_to_show );
//			SPCO.console_log( 'display_step -> "#spco-edit-'+step_to_show+'-lnk" class', $( step_to_show_link ).attr('class') );
			if ( typeof response.reg_step_html !== 'undefined' ) {
				$( step_to_show_div ).html( response.reg_step_html );
			}
			$('.spco-step-display-dv').removeClass('active-step').addClass('inactive-step');
			$('#spco-step-'+step_to_show+'-display-dv').removeClass('inactive-step').addClass('active-step');
//			var step_to_show_link = $('#spco-edit-'+step_to_show+'-lnk');
			$('#spco-edit-'+step_to_show+'-lnk').addClass('hidden');
			// bye bye spinner
			SPCO.end_ajax();
			$( step_to_show_div ).css({ 'display' : 'none' }).removeClass('hidden').slideDown( function() {
				SPCO.scroll_to_top_and_display_messages( SPCO.main_container, response );
			});
		},



		/**
		 * Hides the step specified by step_to_hide
		 */
		hide_steps : function(){
			$('.spco-edit-step-lnk').each( function() {
				$(this).removeClass('hidden');
			});
			$('.spco-step-dv').each( function() {
				if ( ! $(this).is( ":hidden" )) {
					$(this).slideUp( 'fast' ).addClass('hidden');
				}
			});
		},



		/**
		 *	enable_submit_buttons
		 */
		enable_submit_buttons : function() {
			$('.spco-next-step-btn').each( function() {
				$(this).removeClass( 'disabled' );
			});
		},



		/**
		 *	disable_submit_buttons
		 */
		disable_submit_buttons : function() {
			$('.spco-next-step-btn').each( function() {
				$(this).addClass( 'disabled' );
			});
		},



		/**
		 *	submit a step of registration form
		 */
		process_next_step : function( next_step_btn ) {
			var step = $(next_step_btn).attr('rel');
			if ( typeof step !== 'undefined' && step !== '' && ! $(next_step_btn).hasClass('disabled') ) {
				var next_step = SPCO.get_next_step( step );
//				SPCO.console_log( 'process_next_step > step', step, true );
//				SPCO.console_log( 'process_next_step > next_step', next_step );
				// which form is being processed ?
				var form_to_check = '#ee-spco-'+step+'-reg-step-form';
//				if ( step === 'payment_options' ) {
//					form_to_check = SPCO.process_selected_gateway();
//					if ( form_to_check === false ) {
//						msg = SPCO.generate_message_object( '', SPCO.tag_message_for_debugging( 'process_next_step > ' + next_step, eei18n.no_payment_method ));
//						SPCO.scroll_to_top_and_display_messages( $('#ee-single-page-checkout-dv'), msg );
//						return false;
//					}
//				}
//				SPCO.console_log( 'process_next_step > form_to_check', form_to_check );
				// validate form
//				var good_to_go = SPCO.verify_all_questions_answered( form_to_check );
				var good_to_go = true;
//				SPCO.console_log( 'process_next_step > good_to_go', good_to_go );
				// ready ?
				if ( good_to_go === true ) {
					// not disabled? you are NOW!!!
					$(next_step_btn).addClass( 'disabled' );
					// copy billing info?
//					if ( step === 'attendee_information' ) {
//						SPCO.copy_primary_attendee_info_to_billing_info();
//					}
//					if ( next_step === 'finalize_registration' && _.indexOf( eei18n.reg_steps, 'payment_options' ) !== -1 ) {
//						if ( $('#reg-page-off-site-gateway').val() === 1 ) {
//							SPCO.console_log( 'process_next_step -> off-site-gateway', $('#reg-page-off-site-gateway').val() );
//						}
//						// disable submit btn and processing registration message
//						SPCO.display_processing_registration_notification();
//					}
					SPCO.submit_reg_form ( step, next_step, form_to_check );
					return true;
				} else {
					// validation errors
					$( form_to_check ).slideDown();
//					SPCO.scroll_to_top_and_display_messages( $('#ee-single-page-checkout-dv') );
					return false;
				}
			}
			return false;
		},



		/**
		 *	get_next_step
		 */
		get_next_step : function( step ) {
			var step_index = _.indexOf( eei18n.reg_steps, step );
			step_index = step_index + 1;
			return eei18n.reg_steps[ step_index ];
		},



		/**
		 *	submit a step of registration form
		 */
		submit_reg_form : function( step, next_step, form_to_check ) {

			$('#spco-'+step+'-noheader').val('true');
			var form_data = $( form_to_check ).serialize();
			form_data += '&ee_front_ajax=1';
			form_data += '&noheader=true';
			form_data += '&step=' + step;
			form_data += '&EESID=' + eei18n.EESID;
			// alert( 'ajax_url = ' + eei18n.ajax_url + '\n' + 'step = ' + step + '\n' + 'next_step = ' + next_step + '\n' + 'form_data = ' + form_data );
			// send form via AJAX POST
			$.ajax({

				type: "POST",
				url:  eei18n.ajax_url,
				data: form_data,
				dataType: "json",

				beforeSend: function() {
					SPCO.do_before_sending_ajax();
					SPCO.disable_submit_buttons();
				},

				success: function( response ){
					SPCO.console_log( 'submit_reg_form > step', step );
					SPCO.console_log( 'submit_reg_form > next_step', next_step );
					SPCO.console_log_obj( 'submit_reg_form > response', response );
					SPCO.process_response( next_step, response );
				},

				error: function( response ) {
					SPCO.submit_reg_form_server_error( response );
				}

			});

		},



		/**
		* get_next_reg_step
		*/
		get_next_reg_step : function( next_step, prev_response ){

			var form_data = 'action=display_spco_reg_step';
			form_data += '&step=' + next_step;
			form_data += '&noheader=1';
			form_data += '&ee_front_ajax=1';
			form_data += '&EESID=' + eei18n.EESID;
			// alert( 'form_data = ' + form_data );

			$.ajax({

				type: "POST",
				url:  eei18n.ajax_url,
				data: form_data,
				dataType: "json",

				beforeSend: function() {
					SPCO.do_before_sending_ajax();
				},

				success: function( response ){
					SPCO.console_log_obj( 'get_next_reg_step > response', response );
					SPCO.process_response( next_step, response );
				},

				error: function( response ) {
					return SPCO.submit_reg_form_server_error( response );
				}

			});
		},



		/**
		 *    console_log - print to the browser console
		 */
		display_payment_method: function ( item ) {

			var payment_method = $(item).val();
			if ( payment_method === '' ) {
				var msg = SPCO.generate_message_object( '', SPCO.tag_message_for_debugging( 'display_payment_method', eei18n.invalid_payment_method ));
				SPCO.scroll_to_top_and_display_messages( SPCO.main_container, msg );
			}
			var form_data = 'step=payment_options';
			form_data += '&action=spco_billing_form';
			form_data += '&selected_method_of_payment=' + payment_method;
			form_data += '&generate_reg_form=0';
			form_data += '&noheader=1';
			form_data += '&ee_front_ajax=1';
			form_data += '&EESID=' + eei18n.EESID;

			// alert( 'form_data = ' + form_data );

			$.ajax({

				type: "POST",
				url:  eei18n.ajax_url,
				data: form_data,
				dataType: "json",

				beforeSend: function() {
					SPCO.do_before_sending_ajax();
				},

				success: function( response ){
					SPCO.console_log_obj( 'display_payment_method > response', response );
					response.return_data.payment_method = payment_method;
					SPCO.process_response( 'payment_method', response );
				},

				error: function( response ) {
					return SPCO.submit_reg_form_server_error( response );
				}

			});
		},



		/**
		 *	process_response
		 */
		process_response : function( next_step, response ) {
			// alert( 'next_step = ' + next_step );
			if ( typeof response !== 'undefined' ) {
				// hide recaptcha?
				if ( typeof response.recaptcha_passed !== 'undefined' ) {
					SPCO.process_recaptcha( response );
				// or reload recaptcha ?
				} else if ( typeof response.recaptcha_reload !== 'undefined' ) {
					SPCO.reload_recaptcha( reponse );
				// get html for next reg step
				} else if ( typeof response.reg_step_html !== 'undefined' && response.reg_step_html !== '' ) {
					SPCO.display_step( next_step, response );
				// process valid response data
				} else if ( typeof response.return_data !== 'undefined' ) {
					// loop through return_data array
					for ( var key in response.return_data ) {
						if ( typeof key !== 'undefined' && typeof response.return_data[key] !== 'undefined' ) {
							// alert( 'response.return_data. + key + ' = '  + response.return_data[key] );
//							SPCO.console_log( 'process_response > key', key );
							// SPCO.console_log_obj( 'process_response > ' + key + ' = ', response.return_data[key] );
							// switch_payment_methods
							if ( key === 'payment_method_info' ) {
								SPCO.switch_payment_methods( response );
							// get_next_reg_step
							} else if ( key === 'reg_step_html' ) {
								SPCO.get_next_reg_step( next_step, response );
							// display_payment_method_redirect_form
							} else if ( key === 'redirect_form' ) {
								SPCO.display_payment_method_redirect_form( response.return_data[key] );
							// redirect browser
							} else if ( key === 'redirect_url' ) {
								window.location.replace( response.return_data[key] );
							// plz_select_method_of_payment_prompt
							} else if ( key === 'plz_select_method_of_payment' ) {
								SPCO.plz_select_method_of_payment_prompt( response );
							}

						}
					}
				} else {
					// uh-oh spaghettios!
					if ( typeof response.errors !== 'undefined' && response.errors !== '' ) {
						SPCO.scroll_to_top_and_display_messages( SPCO.main_container, response );
					// Achtung Baby!!!
					} else if ( typeof response.attention !== 'undefined' && response.attention !== '' ) {
						SPCO.scroll_to_top_and_display_messages( SPCO.main_container, response );
					// yay
					} else if ( typeof response.success !== 'undefined' && response.success !== '' ) {
						SPCO.get_next_reg_step( next_step, response );
					// oh noes...
					} else {
						SPCO.submit_reg_form_server_error( response );
					}
				}
			// no response...
			} else {
				SPCO.submit_reg_form_server_error( response );
			}

		},



		/**
		 *	process_recaptcha
		 */
		process_recaptcha : function( response ) {
			if ( response.recaptcha_passed ) {
				$( '#spco-captcha' ).children( 'span' ).html('');
			}
		},



		/**
		 *	reload_recaptcha
		 */
		reload_recaptcha : function( response ) {
			$('#recaptcha_reload').trigger('click');
			SPCO.scroll_to_top_and_display_messages( SPCO.main_container, response );
		},



		/**
		 *	switch_payment_methods
		 */
		switch_payment_methods : function( response ) {
			var payment_method_info_dv = $('.spco-payment-method-info-dv' );
			// SPCO.console_log_obj( 'switch_payment_methods > payment_method_info_dv = ', payment_method_info_dv );
			$( payment_method_info_dv ).each( function() {
				$( this ).hide();
				$( this ).find('.sandbox-panel' ).remove();
				$( this ).find('.ee-billing-form' ).remove();
			});
			SPCO.console_log( 'switch_payment_methods > response.return_data.payment_method = ', response.return_data.payment_method );
			if ( typeof response.return_data.payment_method !== 'undefined' ) {
				var payment_method_info = $('#spco-payment-method-info-' + response.return_data.payment_method );
				SPCO.console_log_obj( 'switch_payment_methods > payment_method_info = ', payment_method_info );
				if ( typeof response.return_data.payment_method_info !== 'undefined' ) {
					$( payment_method_info ).append( response.return_data.payment_method_info );
				}
				$( payment_method_info ).slideDown();
			}
			SPCO.end_ajax();
		},



		/**
		 *	display_payment_method_redirect_form
		 */
		display_payment_method_redirect_form : function( redirect_form ) {
			$( SPCO.main_container ).html( '<br /><div id="spco-payment-method-redirect-form" class="ee-attention"><h5>' + eei18n.forwarding_to_offsite + '</h5></div>' );
			var payment_method_redirect_form = $( '#spco-payment-method-redirect-form' );
			$( payment_method_redirect_form ).append( redirect_form );
			$('form[name="gateway_form"]').submit();
			// SPCO.end_ajax();
		},


		/**
		 *	plz_select_method_of_payment_prompt
		 */
		plz_select_method_of_payment_prompt : function( response ) {
			var methods_of_payment = $( '#methods-of-payment' );
			$( methods_of_payment ).addClass( 'plz-select-method-of-payment' );
			SPCO.scroll_to_top_and_display_messages( $( methods_of_payment ), response );
		},



		/********** NOTIFICATIONS **********/



		/**
		 *	set_offset_from_top
		 */
		set_offset_from_top : function( item, extra ) {
			extra = typeof extra !== 'undefined' && extra !== '' ? extra : SPCO.offset_from_top_modifier;
			SPCO.offset_from_top = $( item ).offset().top + extra;
			SPCO.offset_from_top = Math.max( 0, SPCO.offset_from_top );
		},



		/**
		 *	scroll_to_top_and_display_messages
		 */
		scroll_to_top_and_display_messages : function( item, msg ) {
			if ( $( item ).offset().top + SPCO.offset_from_top_modifier !== SPCO.offset_from_top ) {
				SPCO.set_offset_from_top( item );
				var messages_displayed = false;
				$('body, html').animate({ scrollTop: SPCO.offset_from_top }, 'normal', function() {
					if ( ! messages_displayed ) {
						SPCO.display_messages( msg );
						messages_displayed = true;
					}
				});
			}
		},



		/**
		 * display messages
		 */
		display_messages : function( msg ){
			SPCO.console_log_obj( 'display_messages > msg' + ' = ', msg );
			if ( typeof msg.success !== 'undefined' && msg.success ) {
				SPCO.show_event_queue_ajax_msg( 'success', msg.success, 4000 );
			} else if ( typeof msg.attention !== 'undefined' && msg.attention ) {
				SPCO.show_event_queue_ajax_msg( 'attention', msg.attention, 10000 );
			} else if ( typeof msg.errors !== 'undefined' && msg.errors ) {
				SPCO.show_event_queue_ajax_msg( 'error', msg.errors, 10000 );
			}
		},



		/**
		 *	show event queue ajax msg
		 */
		show_event_queue_ajax_msg : function( type, msg, fadeOut ) {
			// does an actual message exist ?
			if ( typeof msg !== 'undefined' && msg !== '' ) {
				// ensure message type is set
				var msg_type = typeof type !== 'undefined' && type !== '' ? type : 'error';
				// make sure fade out time is not too short
				fadeOut = typeof fadeOut === 'undefined' || fadeOut < 4000 ? 4000 : fadeOut;
				// center notices on screen
				$('#espresso-ajax-notices').eeCenter();
				// target parent container
				var espresso_ajax_msg = $('#espresso-ajax-notices-' + msg_type);
				//  actual message container
				espresso_ajax_msg.children('.espresso-notices-msg').html( msg );
				// bye bye spinner
				SPCO.end_ajax();
				// display message
				espresso_ajax_msg.removeClass('hidden').show().delay( fadeOut ).fadeOut();
			} else {
				// bye bye spinner
				SPCO.end_ajax();
			}
		},



		/**
		 *	stop espresso-ajax-loading from spinning
		 */
		end_ajax : function() {
			// bye bye spinner
			$('#espresso-ajax-loading').fadeOut('fast');
		},



		/**
		 *	do_before_sending_ajax
		 */
		do_before_sending_ajax : function() {
			// stop any message alerts that are in progress
			$('.espresso-ajax-notices').stop();
			$('#espresso-ajax-long-loading').remove();
			$('#espresso-ajax-loading').show();
		},



		/**
		 *	submit_reg_form_server_error
		 */
		submit_reg_form_server_error : function( response ) {
			SPCO.console_log( 'submit_reg_form_server_error > ajax error response', dump( response ));
			SPCO.enable_submit_buttons();
			var msg = SPCO.generate_message_object( '', SPCO.tag_message_for_debugging( 'submit_reg_form_server_error', eei18n.reg_step_error ));
			SPCO.scroll_to_top_and_display_messages( SPCO.main_container, msg );
			return false;
		},



		/***********************   UTILITIES   ***********************/



		/**
		 *	generate_message_object
		 */
		generate_message_object : function( success_msg, error_msg, attention_msg ) {
			msg = {};
			msg.success = typeof success_msg !== 'undefined' && success_msg !== '' ? success_msg : false;
			msg.errors = typeof error_msg !== 'undefined' && error_msg !== '' ? error_msg : false;
			msg.attention = typeof attention_msg !== 'undefined' && attention_msg !== '' ? attention_msg : false;
			return msg;
		},



		/**
		 *    console_log - print to the browser console
		 */
		console_log: function ( item, value, spacer ) {
			if ( spacer === true ) {
				console.log( ' ' );
			}
			if ( SPCO.display_debug && typeof item !== 'undefined' && typeof value !== 'undefined' ) {
				console.log( JSON.stringify( item + ': ' + value, null, 4 ));
			} else if ( SPCO.display_debug && typeof item !== 'undefined' ) {
				console.log( item );
			}
		},

		/**
		 *    console_log_obj - print object to the browser console
		 */
		console_log_obj: function (obj_name, obj) {
			if ( SPCO.display_debug && typeof obj_name !== 'undefined' ) {
				console.log( JSON.stringify(obj_name, null, 4 ));
			}
			if ( SPCO.display_debug && typeof obj !== 'undefined' ) {
				for ( var key in obj ) {
					if ( typeof key !== 'undefined' && obj.hasOwnProperty( key )) {
						console.log( JSON.stringify('    ' + key + ': ' + obj[ key ], null, 4 ));
					}
				}
			}
		},

		/**
		 *	tag_message_for_debugging
		 */
		tag_message_for_debugging : function( tag, msg ) {
			return SPCO.display_debug === 1 ? msg + ' <span class="smaller-text">(&nbsp;' + tag + '&nbsp;)</span><br/>' : msg;
		}



	};
	// end of SPCO object

	/**
	 *	run SPCO
	 */
	SPCO.initialize();

});