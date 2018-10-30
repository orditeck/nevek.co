import React, {Component} from 'react';
import classNames from 'classnames';

import {
    Accompagnement,
    AccompagnementSummary,
    Consultation,
    ConsultationSummary,
    Developpement,
    DeveloppementSummary
} from './services/';

const services = {
    accompagnement: Accompagnement,
    consultation: Consultation,
    developpement: Developpement
};

export default class extends Component {
    state = {
        currentService: null,
        title: 'Services en bref',
        closingCallback: null
    };

    onServiceClick = async (service) => {
        const { currentService: previousServiceState } = this.state;
        const opening = previousServiceState === null;
        const closing = previousServiceState === service;

        await this.setState({
            currentService: service,
            title: 'Services'
        });

        if(!opening && !closing){
            document.querySelectorAll('section.service article').forEach(
                el => el.style.animationName = "article-after"
            );
        }

        if(closing){

            document.querySelector('section.service').classList.add('closing');

            this.setState({
                closingCallback: setTimeout(() => {
                    this.setState({
                        currentService: null,
                        title: 'Services en bref'
                    });
                }, 750)
            })
        }
    };

    render() {
        const Service = this.state.currentService ? services[this.state.currentService] : React.Fragment;

        return <section
            className={classNames('services', {
                "is-single": !!this.state.currentService
            })}>
            <div className="container">
                <h1>
                    <span>{this.state.title}</span>
                </h1>
                <section>
                    <AccompagnementSummary
                        currentService={this.state.currentService}
                        onClickHandler={this.onServiceClick}
                    />
                    <ConsultationSummary
                        currentService={this.state.currentService}
                        onClickHandler={this.onServiceClick}
                    />
                    <DeveloppementSummary
                        currentService={this.state.currentService}
                        onClickHandler={this.onServiceClick}
                    />
                </section>
                <section
                    className={classNames({
                        service: true,
                        active: !!this.state.currentService
                    })}>

                    <Service />
                </section>
            </div>
        </section>
    }
}
