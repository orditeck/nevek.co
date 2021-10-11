import React from 'react';
import slugify from '../lib/slugify';

export const FaqItem = ({ title, children }) => {
    const id = slugify(title || '');

    return <article className="faq">
        <input type="checkbox" id={id} />
        <label className="title" htmlFor={id}>
            {title}
        </label>
        {children}
    </article>;
}