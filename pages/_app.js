import React from 'react'
import App, {Container} from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import lozad from 'lozad'
import AOS from 'aos'
import * as gtag from '../lib/gtag'
import '../styles/main.scss'
import Footer from "../layouts/Footer";

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class Nevek extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    componentDidMount = async () => {
        lozad('img').observe()
        AOS.init({
            duration: 500,
            easing: 'ease-out-quart',
            once: true
        });

        if(document) {
            let LocomotiveScroll = await import('locomotive-scroll')
            new LocomotiveScroll.default({
                el: document.querySelector("#__next"),
                smooth: true,
                getSpeed: true,
                getDirection: true,
            });
        }
    }

    render() {
        const {Component, pageProps} = this.props

        return <Container>
            <Head>
                <title>Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)</title>
            </Head>
            <Component {...pageProps}/>
            <Footer/>
        </Container>
    }
}
