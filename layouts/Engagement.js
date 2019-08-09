import React, {Component} from 'react'
import SectionWithBg from '../components/SectionWithBg'

export default class extends Component {
    render = () =>
        <SectionWithBg
            position="right"
            color="mustard"
            backgroundImage="/static/images/engagement.gif"
            title="Un engagement clair"
            id="engagement"
        >
            <p>
                Mon engagement envers vous est simple:<br />
                <strong>transposer votre vision dans l'univers numérique</strong>.
            </p>

            <p>
                Je suis un passionné du Web. J'ai des connaissances étendues dans le numérique, j'ai de
                fortes opinions quant à l'avenir du Web, de son passé et de son présent. C'est l'atout
                qu'il vous faut pour bien vous positionner, aujourd'hui, pour ne pas reproduire les erreurs du passé,
                pour répondre dès maintenant aux besoins de vos clients et de vous assurer d'une pérennité
                numérique (car oui, ça existe).
            </p>

            <p>
                <strong>
                    Je m'engage à être le porteur numérique de votre vision d'entreprise et de votre vision
                    personnelle d'entrepreneur.
                </strong>
            </p>
    </SectionWithBg>
}
