import React, {Component} from 'react';
import ServiceSummary from './ServiceSummary';

export default () => <article className="accompagnement">
    <img src="/static/images/accompagnement.gif" alt="Accompagnement" />

    <p>
        Mon service d'accompagnement consiste à vous fournir des conseils personnalisés dans une perspective de
        développement des affaires, mais aussi de vos compétences personnelles. Ce n'est pas seulement de vous donner
        la tranquilité d'esprit de faire affaire avec un professionnel d'expérience pour l'ensemble de votre numérique,
        mais aussi d'avoir un allié qui vous expliquera en profondeur toutes les options qui s'offrent à vous.
    </p>

    <p>
        Ce service est un partenariat où vous me mettez en charge de ce que je fais de mieux afin de vous concentrer à
        ce que vous faites le mieux. Nous travaillons ensemble afin de définir les meilleures stratégies pour vous
        démarquer et augmenter votre chiffre d'affaire. Puisque notre partenariat est intimement lié aux résultats,
        je carbure au surpassement des objectifs tout comme vous.
    </p>
</article>

export class Summary extends Component {
    render = () =>
        <ServiceSummary service="accompagnement" {...this.props}>
            <h1>Accompagnement</h1>
            <p>
                Mon service d'accompagnement vous assure d'avoir un partenaire fiable et compétant
                pour tout ce qui touche le numérique de votre entreprise. C'est la tranquilité d'esprit
                de savoir que votre numérique est guidé par un expert qui transporte votre vision.
            </p>
        </ServiceSummary>
}
