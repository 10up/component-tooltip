'use strict';

export default function Tooltip ( callback ) {

	// Caching and setting up some variables
	let ttContainer          = document.querySelectorAll( '.a11y-tip' );
	let ttContainerCount     = ttContainer.length;
	let ttToggleClass        = 'a11y-tip--toggle';
	let ttTriggerClass       = 'a11y-tip__trigger';
	let ttTriggerToggleClass = 'a11y-tip__trigger--toggle';
	let ttTrigger            = '.' + ttTriggerClass;
	let ttTheTip             = '.a11y-tip__help';
	let i;
	let newButton;
	let originalTrigger;
	let getTipId;
	let focusableElements    = [
		'a',
		'button',
		'input',
		'textarea',
		'select',
	];

	let setup = function ( obj ) {

		// this will be needed for any components that don't have an ID set
		let count = 1;
		let self = obj;
		let trigger = self.querySelector( ttTrigger );
		let tip = self.querySelector( ttTheTip );

		// if a trigger is not an inherently focusable element, it'll need a
		// tabindex. But if it can be inherently focused, then don't set a tabindex
		if ( ! focusableElements.includes( trigger.nodeName.toLowerCase() ) ) {
			trigger.setAttribute( 'tabindex', '0' );
		}

		// if a tip doesn't have an ID, then we need to generate one
		if ( !tip.getAttribute( 'id' ) ) {
			tip.setAttribute( 'id', 'tool_tip_' + count );
		}

		// if a trigger doesn't have an aria-described by, then we need
		// to point it to the tip's ID
		if ( !trigger.getAttribute( 'aria-describedby' ) ) {
			trigger.setAttribute( 'aria-describedby', tip.getAttribute( 'id' ) );
		}

		// if the element after a tooltip trigger does not have
		// the role of tooltip set, then set it.
		if ( !tip.getAttribute( 'role' ) ) {
			tip.setAttribute( 'role', 'tooltip' );
		}

		// if a tip container has ttToggleClass,
		// we need to make sure the trigger is a button
		if ( self.classList.contains( ttToggleClass ) ) {

			originalTrigger = self.querySelector( ttTrigger ).innerHTML;
			originalTrigger = originalTrigger.replace( /^\s+|\s+$/g, '' );
			getTipId = self.querySelector( ttTheTip ).getAttribute( 'id' );
			newButton = document.createElement( 'button' );

			newButton.setAttribute( 'type', 'button' );
			newButton.classList.add( ttTriggerClass );
			newButton.classList.add( ttTriggerToggleClass );
			newButton.setAttribute( 'aria-describedby', getTipId );
			newButton.setAttribute( 'aria-expanded', 'false' );
			newButton.textContent = originalTrigger;

			self.removeChild( self.querySelector( ttTrigger ) );
			self.insertBefore( newButton, self.firstChild );

			newButton.addEventListener( 'click', function ( ) {

				if ( 'true' === this.getAttribute( 'aria-expanded' ) ) {
					this.setAttribute( 'aria-expanded', 'false' );
				} else if ( 'false' === this.getAttribute( 'aria-expanded' ) ) {
					this.setAttribute( 'aria-expanded', 'true' );
				}

			}, false );

		} // if self contains the toggleClass

		// hide the tooltip on blur of the trigger
		trigger.addEventListener( 'blur', function( ) {

			if( this.classList.contains( 'a11y-tip--hide' ) ) {
				this.classList.remove( 'a11y-tip--hide' );
			}
		}, false );

		// hide the tooltip on ESC because we have empathy and sometimes
		// you just don't want a tool tip all up in your face, right?
		// if a keyboard user doesn't want/need the tooltip anymore
		// allow them to hide it by pressing the ESC key.
		// once they move focus away from the element that had the
		// the tooltip, remove the hide-tip class so that the
		// tip can be accessed again on re-focus.
		trigger.addEventListener( 'keyup', function ( e ) {

			if ( 27 == e.which ) {
				e.preventDefault();
				this.classList.add( 'a11y-tip--hide' );
				return false;
			}

		}, false );

		// end the loop, increase count by 1
		return count = count + 1;

	}; // setup()

	// Call setup()
	for ( i = 0; i < ttContainerCount; i++ ) {
		setup( ttContainer[i] );
	}

	// Execute the callback function
	if ( 'function' === typeof callback ) {
		callback.call();
	}
}
