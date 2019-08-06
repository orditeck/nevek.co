import React from 'react'
import App, {Container} from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import lozad from 'lozad'
import AOS from 'aos'
import * as gtag from '../lib/gtag'
import '../styles/main.scss'
import Footer from "../layouts/Footer";
import stickybits from "stickybits";
import LaxSetup from "../components/LaxSetup";

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class Nevek extends App {

    constructor() {
        super();
        this.ref = React.createRef();
    }

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

        stickybits('.stickybits', {
            useStickyClasses: true,
            scrollEl: '#__next'
        });

        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01

        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    render() {
        const {Component, pageProps} = this.props

        return <Container>
            <Head>
                <title>Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)</title>
            </Head>
            <LaxSetup>
                <Component {...pageProps}/>
            </LaxSetup>
            <Footer/>
        </Container>
    }
}
