import React, {Component} from 'react';
import classNames from 'classnames';

export default class extends Component {
    state = {
        open: false
    };

    onClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render = () =>
        <article className={classNames('faq', {
            open: this.state.open
        })} onClick={this.onClick}>
            {this.props.children}
        </article>
}
