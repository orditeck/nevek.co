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
        </Head>
        <body>
            <Main/>
            <Footer/>
            <NextScript/>
        </body>
        </html>
    }
}
