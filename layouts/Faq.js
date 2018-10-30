import { FaqItem } from '../components/'

export default () => <section className="with-bg white">
    <div className="container">
        <section>
            <h1>Foire aux questions</h1>

            <FaqItem>
                <h1>Quel est ton rôle?</h1>
                <p>
                    À titre de stratège numérique, je vous accompagnerai en commençant par l'analyse de vos
                    besoins jusqu'au support post-livraison. Je serai votre département numérique.
                </p>
                <p>
                    À titre de consultant Web, je comblerai des besoins précis. Ça ressemble au rôle
                    d'accompagnement, mais c'est davantage ciblé sur des besoins définis que vous aimeriez combler.
                </p>
                <p>
                    À titre de développeur Web, je participerai au développement de votre projet. Peut-être
                    avez-vous une équipe de développeurs, un projet déjà débuté ou un projet ayant besoin de
                    support et vous cherchez une dizaine de doigts supplémentaires 💪.
                </p>
                <p>
                    Dans tous les cas, je me ferai un devoir de bien faire comprendre toutes les options qui
                    s'offrent à vous et les implications de chacunes.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Combien charges-tu / combien ça va coûter?</h1>
                <p>
                    La plupart du temps, je charge au projet, et non à l'heure. Je vous fournierai un estimé
                    pour la réalisation du projet dans son ensemble, vous n'aurez donc pas à débourser pour
                    chaque petit détail supplémentaire (dans les limites du raisonnable). Le projet est terminé
                    lorsque vous êtes satisfait du résultat. Sur la majorité des projets, le support est inclus
                    gratuitement.
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
                    Tirez-en le maximum en demandant ce que vous voulez, incluant une correction rapide sur votre
                    site Web.
                </p>
                <p>
                    Je vous informerai <u>clairement</u> lorsque mon temps deviendra facturable, vous aurez toujours
                    le choix de continuer ou non. Aucune surprise.
                </p>
                <p>
                    Je ne charge habituellement rien pour quelque chose qui se règle en quelques minutes.
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
                    a href="mailto:keven@nevek.co" onClick={(e) => e.stopPropagation()}>courriel</a>.
                    Si quelque chose que j'ai fais brise ou ne fonctionne plus comme prévu, c'est gratuit. Si vous
                    avez des questions par rapport à quelque chose que j'ai fais, c'est gratuit. Si vous avez
                    besoin d'un estimé, c'est gratuit.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Pourquoi tes clients aiment-ils travailler toi?</h1>
                <p>
                    Parce que je traite leur projet comme si c'était le mien. Car je sais me mettre à leur place
                    et à la place de leurs clients. Je parle honnêtement et je suis un bon vulgérisateur. Mes clients
                    comprennent ce que je fais car je prend le temps de leur expliquer. Mes clients se font
                    présenter plusieurs options et font donc des choix éclairés. Je m'investi personnellement
                    dans tous les projets que je fais. Mes clients sont traités aux petits soins.
                </p>
            </FaqItem>

            <FaqItem>
                <h1>Offres-tu l'hébergement Web?</h1>
                <p>
                    Parfois en option. Plus précisement, j'offre de la gestion d'hébergement, du « managed hosting »
                    en bon français. Ce qui veut dire que je gèrerai l'ensemble de votre hébergement (les migrations,
                    les courriels, les DNS, etc) pour vous offrir une tranquilité d'esprit complète.
                </p>
                <p>
                    Il existe cependant d'autres options et tout dépend de vos besoins. Je ne vous vendrai
                    jamais des services dont vous n'avez pas besoin.
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
                <h1>Qu'est-ce que ça représente nevek?</h1>
                <p>
                    Keven<br />
                    Nevek<br />
                    😊
                </p>
            </FaqItem>

        </section>
    </div>
</section>
