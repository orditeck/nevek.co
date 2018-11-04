import React, {Component} from 'react';
import classNames from 'classnames';

export default class extends Component {
    ref = React.createRef();

    onClick = (e) => {
        e.preventDefault();
        this.ref.current.nextElementSibling.scrollIntoView({
            behavior: 'smooth'
        });
    };

    render = () =>
        <section
            className={classNames({
                'with-bg': true,
                [`${this.props.position}`]: !!this.props.position,
                [`${this.props.color}`]: !!this.props.color
            })}
            ref={this.ref}
        >
            <div className="container">
                <div className="bg">
                    <div className="img">
                        <img data-src={this.props.backgroundImage} alt={this.props.title}/>
                    </div>
                </div>
                <section className="overlay">
                    <h1>{this.props.title}</h1>

                    {this.props.children}

                    <footer>
                        <p>
                            Curieux d'en apprendre plus?
                            <a href="" onClick={this.onClick} className="btn btn-primary">
                                <span>Continuez votre lecture ↓</span>
                            </a>
                        </p>
                    </footer>
                </section>
            </div>
        </section>
}

