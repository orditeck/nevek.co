import lax from 'lax.js';
import React from 'react';

const withLaxElement = Component => props => {
    class LaxElement extends React.Component {
        ref = React.createRef();

        componentDidMount() {
            lax.addElement(this.ref.current);
        }

        componentWillUnmount() {
            lax.removeElement(this.ref.current);
        }

        render() {
            return <Component {...props} ref={this.ref} />;
        }
    }

    return <LaxElement />;
};

export default withLaxElement;
