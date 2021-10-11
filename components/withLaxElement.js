import lax from 'lax.js';
import React, { useEffect } from 'react';

export const withLaxElement = Component => props => {
    const ref = React.createRef();

    useEffect(() => {
        lax.addElement(ref.current);

        return () => lax.removeElement(ref.current);
    }, [])

    return <Component {...props} ref={ref} />;
};
