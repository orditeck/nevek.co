import withLaxElement from "./withLaxElement";

export default withLaxElement(
    React.forwardRef(
        (props, ref) => <section
            {...props}
            ref={ref}
            className="fullscreen whatido"
            id="whatIDo"
        >
            <div className="container">
                <div className="content">
                    <section className="lax"
                             data-lax-translate-y="vh (vh*0.2), (-vh) (-vh*0.2)"
                             data-lax-anchor="#whatIDo">
                        <header>
                            Accompagnement
                            <div className="lax bg"
                                 data-lax-translate-y="vh (vh*0.3), (-vh) (-vh*0.3)"
                                 data-lax-anchor="#whatIDo"/>
                        </header>
                        <article className="accompagnement">
                            <img src="/static/images/accompagnement.gif" alt="Accompagnement"/>

                            <p>
                                Mon service d'accompagnement consiste à vous fournir des conseils personnalisés dans une
                                perspective de développement des affaires, mais aussi de vos compétences personnelles.
                                Ce n'est pas seulement de vous donner la tranquillité d'esprit de faire affaire avec un
                                professionnel d'expérience pour l'ensemble de votre numérique, mais aussi d'avoir un
                                allié qui vous expliquera en profondeur toutes les options qui s'offrent à vous.
                            </p>

                            <p>
                                Ce service est un partenariat où vous me mettez en charge de ce que je fais de mieux
                                afin de vous concentrer à ce que vous faites le mieux. Nous travaillons ensemble afin de
                                définir les meilleures stratégies pour vous démarquer et augmenter votre chiffre
                                d'affaires. Puisque notre partenariat est intimement lié aux résultats, je carbure au
                                surpassement des objectifs tout comme vous.
                            </p>

                            <p>
                                Votre projet devient notre projet.
                            </p>
                        </article>
                    </section>
                    <section className="lax"
                             data-lax-translate-y="vh (vh*0.2), (-vh) (-vh*0.2)"
                             data-lax-anchor="#whatIDo">
                        <header>
                            Consultation
                            <div className="lax bg"
                                 data-lax-translate-y="vh (vh*0.3), (-vh) (-vh*0.3)"
                                 data-lax-anchor="#whatIDo"/>
                        </header>
                    </section>
                    <section className="lax"
                             data-lax-translate-y="vh (vh*0.2), (-vh) (-vh*0.2)"
                             data-lax-anchor="#whatIDo">
                        <header>
                            Développement Web
                            <div className="lax bg"
                                 data-lax-translate-y="vh (vh*0.3), (-vh) (-vh*0.3)"
                                 data-lax-anchor="#whatIDo"/>
                        </header>
                    </section>
                    <p>
                        J'aspire à une chose pour mes clients: qu'ils deviennent les meilleurs sur le Web.
                    </p>

                    <p>
                        J'aide les entreprises à porter leur vision sur le Web en mettant l'emphase sur les besoins de
                        leurs clients.
                    </p>

                    <p>
                        Je passe beaucoup de temps à étudier comment le Web et le marketing affectent nos choix. Et
                        beaucoup de temps à programmer.
                    </p>
                </div>
            </div>
            <div className="bg">
                {`
_____                    _____                    _____                    _____                    _____
/\\    \\                  /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\
/::\\____\\                /::\\    \\                /::\\____\\                /::\\    \\                /::\\____\\
/::::|   |               /::::\\    \\              /:::/    /               /::::\\    \\              /:::/    /
/:::::|   |              /::::::\\    \\            /:::/    /               /::::::\\    \\            /:::/    /
/::::::|   |             /:::/\\:::\\    \\          /:::/    /               /:::/\\:::\\    \\          /:::/    /
/:::/|::|   |            /:::/__\\:::\\    \\        /:::/____/               /:::/__\\:::\\    \\        /:::/____/
/:::/ |::|   |           /::::\\   \\:::\\    \\       |::|    |               /::::\\   \\:::\\    \\      /::::\\    \\
/:::/  |::|   | _____    /::::::\\   \\:::\\    \\      |::|    |     _____    /::::::\\   \\:::\\    \\    /::::::\\____\\________
/:::/   |::|   |/\\    \\  /:::/\\:::\\   \\:::\\    \\     |::|    |    /\\    \\  /:::/\\:::\\   \\:::\\    \\  /:::/\\:::::::::::\\    \\
/:: /    |::|   /::\\____\\/:::/__\\:::\\   \\:::\\____\\    |::|    |   /::\\____\\/:::/__\\:::\\   \\:::\\____\\/:::/  |:::::::::::\\____\\
\\::/    /|::|  /:::/    /\\:::\\   \\:::\\   \\::/    /    |::|    |  /:::/    /\\:::\\   \\:::\\   \\::/    /\\::/   |::|~~~|~~~~~
\\/____/ |::| /:::/    /  \\:::\\   \\:::\\   \\/____/     |::|    | /:::/    /  \\:::\\   \\:::\\   \\/____/  \\/____|::|   |
|::|/:::/    /    \\:::\\   \\:::\\    \\         |::|____|/:::/    /    \\:::\\   \\:::\\    \\            |::|   |
|::::::/    /      \\:::\\   \\:::\\____\\        |:::::::::::/    /      \\:::\\   \\:::\\____\\           |::|   |
|:::::/    /        \\:::\\   \\::/    /        \\::::::::::/____/        \\:::\\   \\::/    /           |::|   |
|::::/    /          \\:::\\   \\/____/          ~~~~~~~~~~               \\:::\\   \\/____/            |::|   |
/:::/    /            \\:::\\    \\                                        \\:::\\    \\                |::|   |
/:::/    /              \\:::\\____\\                                        \\:::\\____\\               \\::|   |
\\::/    /                \\::/    /                                         \\::/    /                \\:|   |
\\/____/                  \\/____/                                           \\/____/                  \\|___|
`}
            </div>
        </section>
    )
)
