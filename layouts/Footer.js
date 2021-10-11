export const Footer = () => <footer id="site-footer">
    <div className="container">
        <small>
            <img src="/images/footer.png"
                alt="Keven Lefebvre, Stratège numérique, Consultant Web & Développeur Web Senior à Chicoutimi, Saguenay." />
            Keven Lefebvre © {new Date().getFullYear()}, tous droits réservés. <br />
            Stratège numérique, Consultant Web & Développeur Web Senior à Chicoutimi, Saguenay.
        </small>
    </div>

    <div className="container">
        <h1>Entrons en contact</h1>

        <section>
            <article>
                <p>
                    <strong>Téléphone</strong>
                    <a href="tel://18444487602" className="btn">1 (844) 448-7602</a>
                </p>
            </article>

            <article>
                <p>
                    <strong>Courriel</strong>
                    <a href="mailto:keven@nevek.co" className="btn">keven@nevek.co</a>
                </p>
            </article>
        </section>
    </div>

    <div className="container">
        <small>
            <img data-src="/images/footer.png"
                alt="Keven Lefebvre, Stratège numérique, Consultant Web & Développeur Web Senior à Chicoutimi, Saguenay." />
            Keven Lefebvre © {new Date().getFullYear()}, tous droits réservés. <br />
            Stratège numérique, Consultant Web & Développeur Web Senior à Chicoutimi, Saguenay. <br />
            <a href="https://github.com/orditeck/nevek.co" target="_blank" rel="noopener noreferrer">Sources de ce site</a>
            <a href="https://github.com/orditeck" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/keven.lefebvre" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/keven.lefebvre" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/in/orditeck/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br />&nbsp;
        </small>
    </div>
</footer>