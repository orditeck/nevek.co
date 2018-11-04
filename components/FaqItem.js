import React, {Component} from 'react';

export default class extends Component {
    slugify = (text) => text.toString().toLowerCase().trim()
        .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
        .replace(/[\s_-]+/g, '_') // swap any length of whitespace, underscore, hyphen characters with a single _
        .replace(/^-+|-+$/g, ''); // remove leading, trailing -


    render = () => {
        const id = this.slugify(this.props.title || '');

        return <article className="faq">
            <input type="checkbox" id={id}/>
            <label className="title" htmlFor={id}>
                {this.props.title}
            </label>
            {this.props.children}
        </article>;
    }
}
