import React, { Component } from 'react';
import ServiceSummary from "./ServiceSummary";

export default () => <article className="developpement">
    <img src="/static/images/developpement.gif" alt="Développement" />

    <p>
        Si on me demandait de comparer le travail de deux carreleurs, la seule chose que je saurais comparer,
        c'est le résultat final, soit l'alignement des tuiles. Il en a va sensiblement de même les développeurs Web:
        sans connaître toutes les bonnes pratiques, il est difficile savoir si on a fait le bon choix.
    </p>

    <p>
        C'est d'ailleurs pour cette raison qu'en plus de mon service de développement Web, j'offre également les services
        de consultation et d'accompagnement Web: j'aide des entreprises à faire le bon choix lors de la sélection
        de leur agence Web, de leur développeur Web et même de leur employé.
    </p>

    <p>
        Le développement Web n'échappe pas au principe qu'il y a autant de façons de faire quelque chose qu'il y a de
        personnes pour le faire. Mais heureusement, des standards existent et même en leur absence, une veille
        technologique approfondie permet de faire des choix éclairés.
    </p>

    <p>
        Avec mes années d'expérience dans le Web, je connais les bonnes méthodes pour réaliser des projets Web qui
        durent longtemps. Plutôt que de dépenser des sommes d'entretiens et de réécritures, je préfère que mes clients
        ré-investissent dans leurs plateformes pour répondre aux besoins évolutifs de leurs utilisateurs.
    </p>

    <p>
        Faire affaire avec un programmeur d'expérience, c'est s'assurer d'avoir une sous-fondation solide suivie d'une
        fondation modulable qui permettra d'évoluer au rythme de votre entreprise.
    </p>
</article>

export class Summary extends Component {
    render = () =>
        <ServiceSummary service="developpement" {...this.props}>
            <h1>Développement</h1>
            <p>
                Je suis un développeur Web senior qui offre du développement haut de gamme aux entreprises soucieuses
                de leurs conversions et de l'expérience de leurs utilisateurs. Je développe d'abord pour les clients
                de mes clients.
            </p>
        </ServiceSummary>
}

