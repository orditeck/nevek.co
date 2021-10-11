import React from "react";
import { Engagement, FAQ, Hi, LogoSlider, Menu, Services, StrategeNumerique, Testimonies, WhatIDo } from "../layouts";

export const Index = () =>
    <section className="homepage">
        <Hi />
        <Menu />
        <WhatIDo />
        <LogoSlider />
        <Services />
        <Engagement />
        <StrategeNumerique />
        <section id="faq" className="with-bg white faq-testimonies">
            <div className="container">
                <section>
                    <FAQ />
                </section>
                <section>
                    <Testimonies />
                </section>
            </div>
        </section>
    </section>

export default Index