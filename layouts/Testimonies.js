import React, {Component} from 'react';
import Swiper from 'swiper';
import classnames from "classnames";

export default class extends Component {
    state = {
        aboutVisible: false,
        aboutTooltipVisible: false,
        mouseX: 0,
        mouseY: 0
    };

    swiper = null;

    componentDidMount() {
        this.swiper = new Swiper('.testimony .swiper-container', {
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            },
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 15000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoHeight: true,
            on: {
                lazyImageReady: () => {
                    this.swiper.updateAutoHeight();
                }
            }
        });

        /**
         * Trigger resize after init otherwise for some reason swiper sets an incorrect width
         */
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    aboutToggle = () => {
        if (this.state.aboutVisible) {
            this.swiper.autoplay.start();
            this.setState({aboutVisible: false});
        } else {
            this.swiper.autoplay.stop();
            this.setState({aboutVisible: true});
        }
    };

    aboutMouseEnter = () => this.setState({aboutTooltipVisible: true});
    aboutMouseLeave = () => this.setState({aboutTooltipVisible: false});

    aboutMouseMove = (e) => {
        const bounds = event.target.getBoundingClientRect();
        this.setState({
            mouseX: event.clientX - bounds.left,
            mouseY: event.clientY - bounds.top
        })
    };

    renderAboutTooltip = () => {
        if (!this.state.aboutTooltipVisible) {
            return;
        }

        return <div className="about-tooltip" style={{
            left: this.state.mouseX + 'px',
            top: this.state.mouseY + 'px',
        }}>
            À propos de cette photo
        </div>;
    };

    renderAboutSection = () => <>
        {this.renderAboutTooltip()}
        <div
            className="about-toggle"
            onClick={this.aboutToggle}
            onMouseEnter={this.aboutMouseEnter}
            onMouseLeave={this.aboutMouseLeave}
            onMouseMove={this.aboutMouseMove}
        >?
        </div>
        <div className={classnames({
            about: true,
            invisible: !this.state.aboutVisible,
            visible: this.state.aboutVisible
        })}>
            <div onClick={this.aboutToggle}>✖</div>

            <p>
                La photo de chaque témoignage est celle de son auteur.
            </p>

            <p>
                Les photos corporatives, ça représente moins la proximité et l'accessibilité que j'offre à mes
                clients.
            </p>

            <p>
                C'est pourquoi j'ai fait une suggestion plus éclatée aux clients qui me laissent un témoignage:
                faire faire leur caricature par un excellent dessinateur et utiliser cette dernière comme photo
                de témoignage.
            </p>

            <p>
                <img src="/static/images/testimonies/example.gif" alt="Exemple"/>
            </p>
        </div>
    </>;

    render() {
        return <>
            <div className="testimony">
                {this.renderAboutSection()}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img className="swiper-lazy" data-src="/static/images/testimonies/mathieu.jpg"
                                 alt="Mathieu Brassard"/>
                            <div className="swiper-lazy-preloader"/>
                            <p>
                                Nous collaborons avec Keven depuis bientôt 5 ans. Travailler avec lui est clair et
                                simple. Il est en mesure d’analyser rapidement la situation, imaginer des solutions
                                efficaces et rencontrant les besoins du client. Jamais en panne d’idée, il est en mesure
                                de respecter les délais et d’apporter des solutions qui vont au-delà de la simple
                                demande. Il est un atout important.
                            </p>

                            <h2>
                                Mathieu Brassard
                            </h2>

                            <h3>
                                Karbur <a href="http://karbur.ca" target="_blank" rel="noopener noreferrer"/> <br/>
                                Partenaires depuis 2014
                            </h3>
                        </div>
                        <div className="swiper-slide">
                            <img className="swiper-lazy" data-src="/static/images/testimonies/david.jpg"
                                 alt="David"/>
                            <div className="swiper-lazy-preloader"/>
                            <p>
                                L’expertise de Keven nous a beaucoup aidé ces dernières années en tant qu’entreprise.
                                Son dynamisme est contagieux et son approche est toujours professionnelle. Keven est
                                toujours à l'écoute de nos besoins. Merci Keven!
                            </p>

                            <h2>
                                David
                            </h2>

                            <h3>
                                Garderie Dépôt <a href="https://garderiedepot.com" target="_blank"
                                                  rel="noopener noreferrer"/><br/>
                                Partenaires depuis 2015
                            </h3>
                        </div>
                        <div className="swiper-slide">
                            <img className="swiper-lazy" data-src="/static/images/testimonies/valerie.jpg"
                                 alt="Valérie Laporte"/>
                            <div className="swiper-lazy-preloader"/>
                            <p>
                                Pour Keven, ce n’est pas seulement un travail, c’est une passion. Il se fait un devoir
                                de proposer la meilleure solution et n’est jamais à court d’idées pour optimiser nos
                                résultats. Le souci du détail et la minutie dont il fait preuve, tout en réussissant à
                                être rapide font de lui un fournisseur fiable.
                            </p>

                            <h2>
                                Valérie Laporte
                            </h2>

                            <h3>
                                Cyan Concept <a href="https://garderiedepot.com" target="_blank"
                                                rel="noopener noreferrer"/><br/>
                                Partenaires depuis 2013
                            </h3>
                        </div>
                    </div>
                    <div className="swiper-button-prev"/>
                    <div className="swiper-button-next"/>
                </div>
            </div>
        </>
    }
}
