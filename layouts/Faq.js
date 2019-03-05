import {FaqItem} from '../components/'

export default () => <>
    <h1>Foire aux questions</h1>

    <FaqItem title="Combien charges-tu / combien ça va coûter?">
        <p>
            La plupart du temps, je charge au projet, et non à l'heure. Je vous fournis un estimé pour la
            réalisation du projet dans son ensemble, vous n'avez donc pas à débourser pour chaque petit détail
            supplémentaire (dans les limites du raisonnable). Le projet est terminé lorsque vous êtes satisfait
            du résultat. Le support est inclus gratuitement dans la majorité des cas.
        </p>
        <p>
            Pour connaître combien ça coûte, comme chaque projet est unique, ça dépend du projet. C'est
            pourquoi même donner un ordre de grandeur est impossible. Donnez-moi quelques détails et c'est
            avec plaisir que je vous donnerai un approximatif.
        </p>
    </FaqItem>

    <FaqItem title="J'ai besoin d'aide immédiatement, peux-tu m'aider?">
        <p>
            Probablement. Une consultation téléphonique coûte 180$ jusqu'à deux heures.
            Tirez le maximum de ces deux heures en demandant tout ce que vous voulez, incluant une correction
            rapide sur votre site Web.
        </p>
        <p>
            Lors d'un appel, je vous informerai clairement lorsque mon temps deviendra facturable. Aucune
            surprise.
        </p>
        <p>
            Je ne charge habituellement rien pour quelque chose qui se règle en quelques minutes, n'hésitez donc
            jamais à m'appeler!
        </p>
        <p>
            <a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>Appelez-moi: 1 (844) 448-7602</a>
        </p>
    </FaqItem>

    <FaqItem title="Et si j'ai besoin de support ensuite?">
        <p>
            Si vous avez besoin de quoi que ce soit, je suis aussi loin qu'un <
            a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>appel</a> ou qu'un <
            a href="mailto:keven@nevek.co" onClick={(e) => e.stopPropagation()}>courriel</a>. Le support
            post-livraison est généralement gratuit.
        </p>
    </FaqItem>

    <FaqItem title="Pourquoi faire affaire avec toi?">
        <ul>
            <li>J'aspire à ce que vous deveniez le meilleur sur le Web</li>
            <li>J'ai plus de 10 ans d'expérience en Web</li>
            <li>Je suis un passionné, vous verrez, c'est contagieux</li>
            <li>J'ai des spécialités tout en restant généraliste</li>
            <li>J'ai de l'expérience avec de grandes entreprises et des PME</li>
            <li>Mon travail a eu des impacts significatifs sur le chiffre d'affaires de mes clients</li>
            <li>
                J'ai de solides références, <
                a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>contactez-moi</a> pour
                obtenir des exemples concrets
            </li>
        </ul>
    </FaqItem>

    <FaqItem title="Pourquoi tes clients aiment-ils travailler toi?">
        <p>
            Parce que je traite leur projet comme si c'était le mien. Car je sais me mettre à leur place et à
            la place de leurs clients. Je parle honnêtement et je suis un bon vulgarisateur. Mes clients
            comprennent ce que je fais, car je prends le temps de leur expliquer. Ils se font présenter
            plusieurs options et font donc des choix éclairés. Je m'investis personnellement dans tous les
            projets que je fais. Mes clients sont traités aux petits soins.
        </p>
        <p>
            Faire traiter votre projet avec l'importance qu'il mérite vous intéresse? <
            a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>Contactez-moi</a>!
        </p>
    </FaqItem>

    <FaqItem title="Offres-tu l'hébergement Web?">
        <p>
            Parfois, en option. Plus précisément, j'offre de la gestion d'hébergement, du « managed hosting » en
            bon français. Ce qui veut dire que je peux gérer l'ensemble de votre infrastructure Web pour vous
            offrir une tranquillité d'esprit complète.
        </p>
        <p>
            Il existe cependant d'autres options et tout dépend de vos besoins. Je ne vous vendrai jamais des
            services dont vous n'avez pas besoin.
        </p>
    </FaqItem>

    <FaqItem title="Fais-tu tout toi-même? Design, rédaction, SEO, SEM, PPC, etc.?">
        <p>
            Non.
        </p>
        <p>
            J'offre trois services:
        </p>
        <ul>
            <li>Développement Web (programmation)</li>
            <li>Consultation</li>
            <li>Accompagnement</li>
        </ul>
        <p>
            En consultation, la majorité de mes clients ont déjà les ressources (ex.: designer) à l'interne
            ou à l'externe. Je viens combler un besoin précis, par exemple, la formation d'une équipe,
            l'évaluer de la sécurité d'un site, de l'application ou du serveur, etc.
        </p>
        <p>
            En accompagnement, nous chercherons ensemble les meilleures ressources pour nous aider selon
            votre budget. Avec mes dix années d'expérience dans le Web, comme propriétaire d'agence, directeur
            des technologies ou encore consultant dans diverses grandes organisations, j'ai les connaissances
            nécessaires pour gérer l'ensemble de votre numérique et faire les bons choix.
        </p>
    </FaqItem>

    <FaqItem title="Qu'est-ce que ça veut dire nevek?">
        <p>
            Keven<br/>
            Nevek
        </p>
    </FaqItem>
</>
