import { Hi, WhatIDo, LogoSlider, Services, Menu } from '../components/'
import { Engagement, StrategeNumerique, Faq, Testimonies } from '../layouts/'

export default () =>
    <section className="homepage">
        <Hi />
        <WhatIDo />
        <LogoSlider />
        <Services />
        <Engagement />
        <StrategeNumerique />
        <section className="with-bg white faq-testimonies">
            <div className="container">
                <section>
                    <Faq />
                </section>
                <section>
                    <Testimonies />
                </section>
            </div>
        </section>
    </section>
