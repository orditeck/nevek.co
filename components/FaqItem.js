import React, {Component} from 'react';
import slugify from '../lib/slugify';

export default class extends Component {
    render = () => {
        const id = slugify(this.props.title || '');

        return <article className="faq">
            <input type="checkbox" id={id}/>
            <label className="title" htmlFor={id}>
                {this.props.title}
            </label>
            {this.props.children}
        </article>;
    }
}
