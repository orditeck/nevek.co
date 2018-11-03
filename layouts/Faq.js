import { FaqItem } from '../components/'

export default () => <section className="with-bg white">
    <div className="container">
        <section>
            <h1>Foire aux questions</h1>

            <FaqItem>
                <h1>Combien charges-tu / combien ça va coûter?</h1>
                <p>
                    La plupart du temps, je charge au projet, et non à l'heure. Je vous fourni un estimé pour la
                    réalisation du projet dans son ensemble, vous n'avez donc pas à débourser pour chaque petit détail
                    supplémentaire (dans les limites du raisonnable). Le projet est terminé lorsque vous êtes satisfait
                    du résultat. Le support est inclus gratuitement dans la majorité des cas.
                </p>
                <p>
                    Pour connaître combien ça coûte, comme chaque projet est unique, ça dépend du projet. C'est
                    pourquoi même donner un ordre de grandeur est impossible. Donnez-moi quelques détails et il
                    me fera plaisir de vous donner un approximatif pour vous donner une idée.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>J'ai besoin d'aide immédiatement, peux-tu m'aider?</h1>
                <p>
                    Probablement. Une consultation téléphonique coûte 180$ jusqu'à deux heures.
                    Tirez le maximum de ces deux heures en demandant tout ce que vous voulez, incluant une correction
                    rapide sur votre site Web.
                </p>
                <p>
                    Lors d'un appel, je vous informerai clairement lorsque mon temps deviendra facturable, aucune surprise.
                </p>
                <p>
                    Je ne charge habituellement rien pour quelque chose qui se règle en quelques minutes, n'hésitez donc
                    jamais à m'appeler!
                </p>
                <p>
                    <a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>Appelez-moi: 1 (844) 448-7602</a>
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Et si j'ai besoin de support ensuite?</h1>
                <p>
                    Si vous avez besoin de quoi que ce soit, je suis aussi loin qu'un <
                    a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>appel</a> ou qu'un <
                    a href="mailto:keven@nevek.co" onClick={(e) => e.stopPropagation()}>courriel</a>. Le support
                    post-livraison est généralement gratuit.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Pourquoi faire affaires avec toi?</h1>
                <ul>
                    <li>J'aspire à ce que vous deveniez le meilleur sur le Web</li>
                    <li>J'ai plus de 10 ans d'expérience en Web</li>
                    <li>Je suis un passionné, vous verrez, c'est contagieux</li>
                    <li>J'ai des spécialités tout en restant généraliste</li>
                    <li>J'ai de l'expérience avec des grandes entreprises et des PME</li>
                    <li>Mon travail a eu des impacts significatifs sur le chiffre d'affaires de mes clients</li>
                    <li>
                        J'ai des solides références, <
                        a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>contactez-moi</a> pour
                        obtenir des exemples concrets
                    </li>
                </ul>
            </FaqItem>

            <FaqItem>
                <h1>Pourquoi tes clients aiment-ils travailler toi?</h1>
                <p>
                    Parce que je traite leur projet comme si c'était le mien. Car je sais me mettre à leur place
                    et à la place de leurs clients. Je parle honnêtement et je suis un bon vulgérisateur. Mes clients
                    comprennent ce que je fais car je prend le temps de leur expliquer. Ils se font présenter plusieurs
                    options et font donc des choix éclairés. Je m'investi personnellement dans tous les projets que je
                    fais. Mes clients sont traités aux petits soins.
                </p>
                <p>
                    Faire traiter votre projet avec l'importance qu'il mérite vous intéresse? <
                    a href="tel://18444487602" onClick={(e) => e.stopPropagation()}>Contactez-moi</a>!
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Offres-tu l'hébergement Web?</h1>
                <p>
                    Parfois, en option. Plus précisement, j'offre de la gestion d'hébergement, du « managed hosting »
                    en bon français. Ce qui veut dire que je peux gérer l'ensemble de votre infrastructure Web pour vous
                    offrir une tranquilité d'esprit complète.
                </p>
                <p>
                    Il existe cependant d'autres options et tout dépend de vos besoins. Je ne vous vendrai jamais des
                    services dont vous n'avez pas besoin.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Fais-tu tout toi-même? SEO, SEM, PPC, design, etc?</h1>
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
                    En consultation, la majorité de mes clients ont déjà les ressources (ex: designer) à l'interne
                    ou à l'externe. Je viens combler un besoin précis, par exemple, la formation d'une équipe,
                    l'évaluer de la sécurité d'un site, de l'application ou du serveur, etc.
                </p>
                <p>
                    En accompagnement, nous chercherons ensemble les meilleures ressources pour nous aider selon
                    votre budget. Avec mes dix années d'expériences dans le Web, comme propriétaire d'agence, directeur
                    des technologies ou encore consultant dans diverses grandes organisations, j'ai les connaissances
                    nécessaires pour gérer l'ensemble de votre numérique et faire les bons choix.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>En quoi développes-tu?</h1>
                <p>
                    Je développe principalement en JavaScript (frontend & backend) et PHP. J'ai beaucoup d'expériences
                    par le fait même en HTML5/CSS3. J'ai de bonnes connaissances en Python. J'ai beaucoup d'expériences
                    en MySQL et de bonnes connaissances en NoSQL.
                </p>
                <p>
                    Mais surtout, j'analyse et je conceptualise avant de débuter la programmation. De cette façon, la
                    structure organisationnelle du site Web ou de l'application est établi à l'avance, il ne reste qu'à
                    faire le plus facile: programmer!
                </p>
                <p>
                    Je programme toujours en suivant les normes les plus populaires. Par exemple, en PHP,
                    je me soucie que mon code soit conforme aux standards <a
                        href="https://www.php-fig.org/psr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    ><abbr title="PHP Standards Recommendations">PSR</abbr></a>.
                    J'utilise le formattage automatique pour
                    rendre mon code lisible. Je documente.
                </p>
                <p>
                    J'opte le plus souvent possible pour une génération de site statique, permettant ainsi une rapidité
                    inégalable qui n'a que des répercussions positive sur le positionnement dans les moteurs de recherche,
                    sur les taux de conversion, etc.
                </p>
                <p>
                    Je suis expert WordPress. Après plus de 10 ans à l'utiliser de façon avancée, je connais les
                    meilleures pratiques et je connais très bien son code source. Il fait parti des options que j'offre
                    lorsque je présente tous les choix.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Es-tu 360°? 2.0? 4.0?</h1>
                <p>
                    Je suis capable de pivoter sur moi-même à 360°, même plus avec un peu de motivation.
                    J'ai cependant une vision périphérique en dessous de la moyenne. Je suis actuellement en
                    version {new Date().getFullYear()}.{("0" + (new Date().getMonth() + 1)).slice(-2)}.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Qu'est-ce que ça veut dire nevek?</h1>
                <p>
                    Keven<br />
                    Nevek
                </p>
            </FaqItem>

        </section>
    </div>
</section>
