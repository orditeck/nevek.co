import React from 'react';
import { ServiceSummary } from './ServiceSummary';

export const Consultation = () => <article className="consultation">
    <img src="/images/consultation.gif" alt="Consultation" />

    <p>
        Mon service de consultation est similaire à celui d'accompagnement, à la différence qu'il est ciblé sur des
        besoins précis. À travers mon chapeau de consultant, j'aurai donc pour mission de vous donner des conseils d'expert
        dans un domaine particulier.
    </p>

    <p>
        Voici quelques exemples de services offerts en consultation:
    </p>

    <ul>
        <li>Formations des équipes</li>
        <li>Rédaction de votre appel d'offres</li>
        <li>Gestion de votre projet numérique</li>
        <li>Élaboration d'une stratégie d'innovation technologique</li>
        <li>Identification des risques et des opportunités technologiques pour votre projet</li>
        <li>Veille technologique approfondie</li>
        <li>Direction de projets techniques</li>
        <li>Déploiement des projets</li>
        <li>Conseils d'expert sur la sécurité</li>
    </ul>
</article>

export const Summary = (props) =>
    <ServiceSummary service="consultation" {...props}>
        <h1>Consultation</h1>
        <p>
            À mi-chemin entre développeur et accompagnateur, mon rôle de consultant Web est de vous donner les
            meilleurs conseils d'expert pour vos besoins précis. Avec ma connaissance approfondie du Web, vous serez
            entre bonnes-mains.
        </p>
    </ServiceSummary>
