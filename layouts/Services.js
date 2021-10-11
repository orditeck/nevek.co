import React, { useState } from 'react';
import classNames from 'classnames';

import {
    Accompagnement,
    AccompagnementSummary,
    Consultation,
    ConsultationSummary,
    Developpement,
    DeveloppementSummary
} from '../components/services';

const AllServices = {
    accompagnement: Accompagnement,
    consultation: Consultation,
    developpement: Developpement
};

export const Services = () => {
    const [state, setState] = useState({
        currentService: null,
        title: 'Services en bref',
        closingCallback: null
    });

    const onServiceClick = service => {
        const { currentService: previousServiceState } = state;
        const opening = previousServiceState === null;
        const closing = previousServiceState === service;

        if (!opening && !closing) {
            document.querySelectorAll('section.service article').forEach(
                el => el.style.animationName = "switching"
            );
            setTimeout(() => {
                setState({
                    ...state,
                    currentService: service,
                    title: 'Services'
                });
                document.querySelectorAll('section.service article').forEach(
                    el => el.style.animationName = "article-after"
                );
            }, 400)
        } else if (closing) {
            document.querySelector('section.service').classList.add('closing');

            setState({
                ...state,
                closingCallback: setTimeout(() => {
                    setState({
                        currentService: null,
                        title: 'Services en bref'
                    });
                }, 750)
            })
        } else {
            setState({
                ...state,
                currentService: service,
                title: 'Services'
            });
        }
    };


    const ServiceToRender = state.currentService ? AllServices[state.currentService] : React.Fragment;

    return <section
        className={classNames('services', {
            "is-single": !!state.currentService
        })}>
        <div className="container">
            <header>
                <div>
                    <h1>{state.title}</h1>
                </div>
                <div className="bg-title">
                    <h1>Services</h1>
                </div>
            </header>
            <section>
                <AccompagnementSummary
                    currentService={state.currentService}
                    onClickHandler={onServiceClick}
                />
                <ConsultationSummary
                    currentService={state.currentService}
                    onClickHandler={onServiceClick}
                />
                <DeveloppementSummary
                    currentService={state.currentService}
                    onClickHandler={onServiceClick}
                />
            </section>
            <section
                className={classNames({
                    service: true,
                    active: !!state.currentService
                })}>

                <ServiceToRender />
            </section>
        </div>
    </section>
}