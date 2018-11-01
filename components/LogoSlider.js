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
        });
    }

    render() {
        return <section className="logo-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="/static/images/logos/garderiedepot.jpg" alt="Garderie Dépôt" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/villesag.jpg" alt="Ville Saguenay" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/uqac.jpg" alt="Université du Québec à Chicoutimi" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/frt.jpg" alt="Fenêtres Réjean Tremblay" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/gardaworld.jpg" alt="Garda World" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/lacbeauport.jpg" alt="Municipalité du Lac Beauport" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/sthubert.jpg" alt="St-Hubert" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/laparisienne.jpg" alt="La Parisienne" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/arcticpower.jpg" alt="Arctic Power" /></div>
                </div>
            </div>
        </section>
    }
}
