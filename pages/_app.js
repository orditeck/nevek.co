import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import lozad from 'lozad'
import * as gtag from '../lib/gtag'
import '../styles/main.scss'

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class Nevek extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    componentDidMount = () => {
        lozad('img').observe()
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)</title>
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}
