import React from 'react';
import classNames from 'classnames';

export const SectionWithBg = ({ position, color, id, backgroundImage, title, children }) => {
    const ref = React.createRef();

    const onClick = (e) => {
        e.preventDefault();
        ref.current.nextElementSibling.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return <section
        className={classNames({
            'with-bg': true,
            [position]: !!position,
            [color]: !!color
        })}
        ref={ref}
        id={id ? id : undefined}
    >
        <div className="container">
            <div className="bg">
                <div className="img">
                    <img data-src={backgroundImage} alt={title} />
                </div>
            </div>
            <section className="overlay">
                <h1>{title}</h1>

                {children}

                <footer>
                    <p>
                        Curieux d'en apprendre plus?
                        <a href="" onClick={onClick} className="btn btn-primary">
                            <span>Continuez votre lecture ↓</span>
                        </a>
                    </p>
                </footer>
            </section>
        </div>
    </section>
}