import Document, {Head, Html, Main, NextScript} from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return <Html lang="fr">
        <Head>
            <meta content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Expert en accompagnement, consultation et développement Web. Porteur numérique de votre vision d'entreprise." />
            <meta property="og:title" content="Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nevek.co/" />
            <meta property="og:image" content="/images/og_image.jpg" />
            <meta property="og:description" content="Expert en accompagnement, consultation et développement Web. Porteur numérique de votre vision d'entreprise." />
            <meta property="fb:admins" content="10216200435020466" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
            <meta name="theme-color" content="#FFE066" />
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
            />
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
        </Html>
    }
}

export default MyDocument