import Document, {Head, Main, NextScript} from 'next/document'
import Footer from '../layouts/Footer'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return <html>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta content="text/html; charset=utf-8" />
            <meta name="description" content="Expert en accompagnement, consultation et développement Web. Porteur numérique de votre vision d'entreprise." />
            <meta property="og:title" content="Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nevek.co/" />
            <meta property="og:image" content="/static/images/og_image.jpg" />
            <meta property="og:description" content="Expert en accompagnement, consultation et développement Web. Porteur numérique de votre vision d'entreprise." />
            <meta property="fb:admins" content="10216200435020466" />
        </Head>
        <body>
            <Main/>
            <Footer/>
            <NextScript/>
        </body>
        </html>
    }
}
