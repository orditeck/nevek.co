import { Welcome, LogoSlider, Services } from '../components/'
import { Engagement, StrategeNumerique, Faq } from '../layouts/'

export default () =>
    <section className="homepage">
        <Welcome />
        <LogoSlider />
        <Services />
        <Engagement />
        <StrategeNumerique />
        <Faq />
    </section>
