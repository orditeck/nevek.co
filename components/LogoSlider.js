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
                    <div className="swiper-slide"><img src="/static/images/logos/garderiedepot.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/villesag.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/uqac.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/frt.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/gardaworld.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/lacbeauport.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/sthubert.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/laparisienne.jpg" /></div>
                    <div className="swiper-slide"><img src="/static/images/logos/arcticpower.jpg" /></div>
                </div>
            </div>
        </section>
    }
}
