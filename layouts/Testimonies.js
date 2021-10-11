import classnames from "classnames";
import React, { useState } from 'react';
import { Autoplay, Controller, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Testimonies = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [state, setState] = useState({
        aboutVisible: false,
        aboutTooltipVisible: false,
        mouseX: 0,
        mouseY: 0
    })

    const aboutToggle = () => {
        if (state.aboutVisible) {
            controlledSwiper.autoplay.start();
            setState({ ...state, aboutVisible: false });
        } else {
            controlledSwiper.autoplay.stop();
            setState({ ...state, aboutVisible: true });
        }
    };

    const aboutMouseEnter = () => setState({ ...state, aboutTooltipVisible: true });
    const aboutMouseLeave = () => setState({ ...state, aboutTooltipVisible: false });

    const aboutMouseMove = (e) => {
        const bounds = e.target.getBoundingClientRect();
        setState({
            ...state,
            mouseX: e.clientX - bounds.left,
            mouseY: e.clientY - bounds.top
        })
    };

    const renderAboutTooltip = () => {
        if (!state.aboutTooltipVisible) {
            return;
        }

        return <div className="about-tooltip" style={{
            left: state.mouseX + 'px',
            top: state.mouseY + 'px',
        }}>
            À propos de cette photo
        </div>;
    };

    const renderAboutSection = () => <>
        {renderAboutTooltip()}
        <div
            className="about-toggle"
            onClick={aboutToggle}
            onMouseEnter={aboutMouseEnter}
            onMouseLeave={aboutMouseLeave}
            onMouseMove={aboutMouseMove}
        >?
        </div>
        <div className={classnames({
            about: true,
            invisible: !state.aboutVisible,
            visible: state.aboutVisible
        })}>
            <div onClick={aboutToggle}>✖</div>

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
                <img src="/images/testimonies/example.gif" alt="Exemple" />
            </p>
        </div>
    </>;

    return <>
        <div className="testimony">
            {renderAboutSection()}
            <Swiper
                modules={[Controller, Autoplay, Lazy]}
                onSwiper={setControlledSwiper}
                preloadImages={false}
                lazy={{
                    loadPrevNext: true
                }}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 15000,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoHeight={true}
                on={{
                    lazyImageReady: (swiper) => {
                        swiper.updateAutoHeight();
                    }
                }}
            >
                <SwiperSlide>
                    <img className="swiper-lazy" data-src="/images/testimonies/mathieu.jpg"
                        alt="Mathieu Brassard" />
                    <div className="swiper-lazy-preloader" />
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
                        Karbur <a href="http://karbur.ca" target="_blank" rel="noopener noreferrer" /> <br />
                        Partenaires depuis 2014
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-lazy" data-src="/images/testimonies/david.jpg"
                        alt="David" />
                    <div className="swiper-lazy-preloader" />
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
                            rel="noopener noreferrer" /><br />
                        Partenaires depuis 2015
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-lazy" data-src="/images/testimonies/valerie.jpg"
                        alt="Valérie Laporte" />
                    <div className="swiper-lazy-preloader" />
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
                            rel="noopener noreferrer" /><br />
                        Partenaires depuis 2013
                    </h3>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
}