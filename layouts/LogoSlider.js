import React from 'react';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy';
import { Swiper, SwiperSlide } from 'swiper/react';

export const LogoSlider = () => <section className="logo-slider">
    <Swiper
        modules={[Autoplay, Lazy]}
        slidesPerView={typeof window !== "undefined" ? window.innerWidth / 200 : undefined}
        loopedSlides={9999}
        loop={true}
        allowTouchMove={false}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false
        }}
        preloadImages={false}
        lazy={{
            loadPrevNext: true
        }}
    >
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/garderiedepot.jpg" alt="Garderie Dépôt" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/villesag.jpg" alt="Ville Saguenay" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/uqac.jpg" alt="Université du Québec à Chicoutimi" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/frt.jpg" alt="Fenêtres Réjean Tremblay" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/gardaworld.jpg" alt="Garda World" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/lacbeauport.jpg" alt="Municipalité du Lac Beauport" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/sthubert.jpg" alt="St-Hubert" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/laparisienne.jpg" alt="La Parisienne" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="swiper-lazy" data-src="/images/logos/arcticpower.jpg" alt="Arctic Power" />
            <div className="swiper-lazy-preloader" />
        </SwiperSlide>
    </Swiper>
</section>