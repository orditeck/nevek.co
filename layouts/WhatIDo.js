import withLaxElement from "../components/withLaxElement";
import {useStateValue} from "../state";
import classNames from "classnames";

export default withLaxElement(
    React.forwardRef(
        (props, ref) => {
            const [{mainNavItem}, dispatch] = useStateValue();

            return <section
                {...props}
                ref={ref}
                className="fullscreen whatido"
                id="whatIDo"
            >
                <div className="sections">
                    <section
                        className="lax"
                        data-lax-translate-y="vh (vh*0.2), (-vh) (-vh*0.2)"
                        data-lax-anchor="#whatIDo"
                    >
                        <header className="container">
                            <h2>
                                <span>Accompagnement</span>
                                <div className="lax bg"
                                     data-lax-translate-y="vh (vh*0.3), (-vh) (-vh*0.3)"
                                     data-lax-anchor="#whatIDo"/>
                            </h2>
                        </header>
                    </section>
                    <section className="lax"
                             data-lax-translate-y="vh (vh*0.2), (-vh) (-vh*0.2)"
                             data-lax-anchor="#whatIDo">
                        <header className="container">
                            <h2>
                                <span>Consultation</span>
                                <div className="lax bg"
                                     data-lax-translate-y="vh (vh*0.3), (-vh) (-vh*0.3)"
                                     data-lax-anchor="#whatIDo"/>
                            </h2>
                        </header>
                    </section>
                    <section className="lax"
                             data-lax-translate-y="vh (vh*0.2), (-vh) (-vh*0.2)"
                             data-lax-anchor="#whatIDo">
                        <header className="container">
                            <h2>
                                <span>Développement Web</span>
                                <div className="lax bg"
                                     data-lax-translate-y="vh (vh*0.3), (-vh) (-vh*0.3)"
                                     data-lax-anchor="#whatIDo"/>
                            </h2>
                        </header>
                    </section>
                    {/*<p>*/}
                    {/*J'aspire à une chose pour mes clients: qu'ils deviennent les meilleurs sur le Web.*/}
                    {/*</p>*/}

                    {/*<p>*/}
                    {/*J'aide les entreprises à porter leur vision sur le Web en mettant l'emphase sur les besoins*/}
                    {/*de*/}
                    {/*leurs clients.*/}
                    {/*</p>*/}

                    {/*<p>*/}
                    {/*Je passe beaucoup de temps à étudier comment le Web et le marketing affectent nos choix. Et*/}
                    {/*beaucoup de temps à programmer.*/}
                    {/*</p>*/}
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
        }
    )
)
