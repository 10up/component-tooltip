import throttle from 'lodash.throttle';
'use strict';

export default class Tooltip {

	constructor( element, options = {} ) {

		const defaults = {
			onCreate: null,
			onOpen: null,
			onClose: null,
		};

		// Tooltip Containers
		this.$tooltips = document.querySelectorAll( element );

		if ( ! element && 0 === this.$tooltips.length ) {
			console.error( '10up Tooltip: Target not found. A valid target (tooltip container) must be used.'  ); // eslint-disable-line
			return;
		}

		document.documentElement.classList.add( 'js' );

		// Settings
		this.settings = Object.assign( {}, defaults, options );

		// Bind internal methods
		this.boundCloseTT = evt => this.closeTooltip( evt );
		this.boundOpenTT = evt => this.openTooltip( evt );
		this.manageBoundTrigger = evt => this.manageTrigger( evt );

		this.$tooltips.forEach( ( ttContainer ) => {
			this.setupTooltip( ttContainer );
		} );

		this.settings = Object.assign( {}, defaults, options );

		// Do any callbacks, if assigned.
		if ( this.settings.onCreate && 'function' === typeof this.settings.onCreate ) {
			this.settings.onCreate.call();
		}
	}

	/**
	 * Initialize a given tooltip area.
	 *
	 * @param   {element} $ttContainer      The tooltip containing element.
	 * @returns {void}
	 */
	setupTooltip( ttContainer ) {
		let ttToggleClass        = 'a11y-tip--toggle';
		let ttTriggerClass       = 'a11y-tip__trigger';
		let ttTriggerToggleClass = 'a11y-tip__trigger--toggle';
		let ttTrigger            = '.' + ttTriggerClass;
		let ttTheTip             = '.a11y-tip__help';
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

		// this will be needed for any components that don't have an ID set
		let count = 1;
		let self = ttContainer;
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

			// Set event listener for trigger click
			newButton.addEventListener( 'click', this.manageBoundTrigger );

		} // if self contains the toggleClass

		if ( false === self.classList.contains( ttToggleClass ) ) {
			// set Listeners for callbacks to fire
			ttContainer.addEventListener( 'mouseover', throttle( this.boundOpenTT, 2000 ) );
			ttContainer.addEventListener( 'mouseleave', throttle( this.boundCloseTT, 2000 ) );
		}

		// hide the tooltip on ESC because we have empathy and sometimes
		// you just don't want a tool tip all up in your face, right?
		// if a keyboard user doesn't want/need the tooltip anymore
		// allow them to hide it by pressing the ESC key.
		// once they move focus away from the element that had the
		// the tooltip, remove the hide-tip class so that the
		// tip can be accessed again on re-focus.
		trigger.addEventListener( 'keyup', this.boundOpenTT );
	}

	openTooltip( e ) {
		let target = e.target;

		if ( target.classList.contains( 'a11y-tip--hide' ) ) {
			target.classList.remove( 'a11y-tip--hide' );
		}

		if ( 27 == e.keyCode ) {
			e.preventDefault();
			target.classList.add( 'a11y-tip--hide' );
			return false;
		}

		this.settings.onOpen.call();
	}

	closeTooltip() {
		this.settings.onClose.call();
	}

	manageTrigger( e ) {
		let triggerEl = e.target;

		if ( 'true' === triggerEl.getAttribute( 'aria-expanded' ) ) {
			triggerEl.setAttribute( 'aria-expanded', 'false' );
			this.settings.onClose.call();
		} else if ( 'false' === triggerEl.getAttribute( 'aria-expanded' ) ) {
			triggerEl.setAttribute( 'aria-expanded', 'true' );
			this.settings.onOpen.call();
		}
	}
}

