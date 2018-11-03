import React, { Component } from 'react';
import Swiper from 'swiper';

export default class extends Component {
    componentDidMount() {
        new Swiper('section.logo-slider .swiper-container', {
            slidesPerView: window.innerWidth / 200,
            loopedSlides: 9999,
            loop: true,
            allowTouchMove: false,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                stopOnLastSlide: false
            },
            preloadImages: false,
            lazy: true
        });
    }

    render() {
        return <section className="logo-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/garderiedepot.jpg" alt="Garderie Dépôt" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/villesag.jpg" alt="Ville Saguenay" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/uqac.jpg" alt="Université du Québec à Chicoutimi" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/frt.jpg" alt="Fenêtres Réjean Tremblay" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/gardaworld.jpg" alt="Garda World" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/lacbeauport.jpg" alt="Municipalité du Lac Beauport" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/sthubert.jpg" alt="St-Hubert" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/laparisienne.jpg" alt="La Parisienne" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-lazy" data-src="/static/images/logos/arcticpower.jpg" alt="Arctic Power" />
                        <div className="swiper-lazy-preloader" />
                    </div>
                </div>
            </div>
        </section>
    }
}
