export default () => <footer id="site-footer">
   <div className="container">
       <h1>Entrons en contact</h1>

       <section>
           <article>
               <p>
                   <strong>☎️ Téléphone</strong>
                   <a href="tel://18444487602" className="btn">1 (844) 448-7602</a>
               </p>
           </article>

           <article>
               <p>
                   <strong>✉️ Courriel</strong>
                   <a href="mailto:keven@nevek.co" className="btn">keven@nevek.co</a>
               </p>
           </article>
       </section>

       <small>
           Keven Lefebvre © {new Date().getFullYear()}, tous droits réservés. <br />
           Stratège numérique, Consultant Web & Développeur Web Senior à Chicoutimi, Saguenay.
       </small>
   </div>
</footer>
