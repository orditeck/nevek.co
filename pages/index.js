import React from "react";
import {Hi, Menu, WhatIDo, LogoSlider, Services, Engagement, StrategeNumerique, Faq, Testimonies} from "../layouts";

export default () =>
    <section className="homepage">
        <Hi/>
        <Menu/>
        <WhatIDo/>
        <LogoSlider/>
        <Services/>
        <Engagement/>
        <StrategeNumerique/>
        <section id="faq" className="with-bg white faq-testimonies">
            <div className="container">
                <section>
                    <Faq/>
                </section>
                <section>
                    <Testimonies/>
                </section>
            </div>
        </section>
    </section>
