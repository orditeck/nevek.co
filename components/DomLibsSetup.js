import lax from 'lax.js';
import React from 'react';
import stickybits from 'stickybits';
import lozad from 'lozad';
import AOS from 'aos';

export class DomLibsSetup extends React.Component {
    constructor(props) {
        super(props)
        this.stickybits = null
    }

    componentDidMount() {
        /**
         * Setup lax
         */
        lax.setup();

        /**
         * Set VH on mobile
         */
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01

        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        /**
         * Init Sticky Bits for position: sticky polyfill and dynamic classes
         */
        this.stickybits = stickybits('.stickybits', {
            useStickyClasses: true,
            noStyles: true,
            useGetBoundingClientRect: true
        });

        /**
         * Init lozad for images
         */
        lozad('img').observe()

        /**
         * Init AOS for animations
         */
        AOS.init({
            duration: 500,
            easing: 'ease-out-quart',
            once: true
        });

        document.addEventListener('scroll', this.updateLax, false);
        window.addEventListener('resize', this.updateStickyBits, false);
        window.addEventListener('hashchange', this.updateStickyBits, false);

        this.updateLax();
        this.updateStickyBits();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.updateLax);
        document.removeEventListener('resize', this.updateStickyBits);
        document.removeEventListener('hashchange', this.updateStickyBits);
    }

    updateLax = () => lax.update(window.scrollY)
    updateStickyBits = () => this.stickybits.update()

    render() {
        return this.props.children;
    }
}
