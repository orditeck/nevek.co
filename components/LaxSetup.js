import lax from 'lax.js';
import React from 'react';

class LaxSetup extends React.Component {
    componentDidMount() {
        lax.setup();

        document.addEventListener('scroll', this.updateLax, false);

        this.updateLax();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.updateLax);
    }

    updateLax = () => {
        lax.update(window.scrollY);
    };

    render() {
        return this.props.children;
    }
}

export default LaxSetup;
