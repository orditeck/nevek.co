import React from 'react';
import { ServiceSummary } from './ServiceSummary';

export const Developpement = () => <article className="developpement">
    <img src="/images/developpement.gif" alt="Développement" />

    <p>
        Développeur Web passionné et ayant plus de 10 années d'expérience, je mets mes compétences à votre service.
    </p>

    <p>
        Je possède une excellente capacité d'analyse, je trouve mon plaisir à en apprendre le plus possible et avec mes
        intérêts très variés, j'arrive toujours avec une vue d'ensemble dans les projets auxquels je participe.
    </p>

    <p>
        Pour votre nouveau projet, projet en cours de développement ou en maintenance, pour votre application Web, votre
        site Web ou votre boutique en ligne, je saurai vous proposer des solutions adaptées à votre budget, à vos besoins
        et à ceux de vos clients.
    </p>

    <p>
        J'ai de solides références en développement Web, 
        <a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>communiquez avec moi</a> pour
        obtenir des exemples concrets.
    </p>

    <p>
        De façon plus technique, je suis un développeur Full Stack, je fais donc du frontend et du backend. Je développe
        principalement en JavaScript (frontend & backend) et PHP. Je suis expert dans ces langages. J'ai beaucoup
        d'expériences par le fait même en HTML5/CSS3. J'ai de bonnes connaissances en Python. J'ai beaucoup d'expériences
        en MySQL et de bonnes connaissances en NoSQL. Et en multitude d'autres choses que je vous détaillerai avec plaisir.
    </p>

    <p>
        Je suis également expert WordPress. Après plus de 10 ans à l'utiliser de façon avancée, je le connais comme le
        fond de ma poche. J'ai de l'expérience avec plusieurs CMS dans divers langages.
    </p>
</article>

export const Summary = (props) =>
    <ServiceSummary service="developpement" {...props}>
        <h1>Développement</h1>
        <p>
            Je suis un développeur Web senior qui offre un service haut de gamme aux entreprises soucieuses de leurs
            conversions et de l'expérience Web de leurs utilisateurs. Je m'assure que votre projet réponde le mieux
            qu'il soit aux besoins de vos clients.
        </p>
    </ServiceSummary>

