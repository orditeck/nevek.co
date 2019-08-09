import React from 'react'
import {default as NextApp} from 'next/app'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/main.scss'
import App from "../components/App"

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default class Nevek extends NextApp {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props

        return <App>
            <Component {...pageProps}/>
        </App>
    }
}
