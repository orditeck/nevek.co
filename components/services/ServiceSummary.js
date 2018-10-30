import React, {Component} from 'react';

export default class extends Component {
    onClick = () => {
        this.props.onClickHandler(this.props.service);
    };

    render = () =>
        <article
            className={this.props.currentService === this.props.service ? 'active' : ''}
            onClick={this.onClick}
        >
            {this.props.children}
            <div className="btn">
                En savoir plus
            </div>
        </article>
}
