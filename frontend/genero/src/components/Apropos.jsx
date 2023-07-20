import React from "react";
import "../styles/Apropos.css";
import About from "./About";
import Testimonials from "./Testimonials";



export const Apropos = () => {
  return (
    <div>
      <div className="container2">
      <div className="containera2">
        <h2 className="aptitle">Donner une autre vie à vos objets et partager votre nourriture</h2>
        <p className="sp">N'hésitez pas à télécharger dès maintenant cette application pour commencer à partager et à faire une différence.</p>
        <div className="containera">
          <div className="appbs_block">
            <a href="/Avenir" target="_blank" rel="noopener noreferrer" className="appbs">
              <div className="appbs_icon">
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 50 50">
                  <path fill="#f5b921" d="M6.7 18.4C2.5 25.7 5 36.8 9.8 43.6c2.3 3.4 4.7 6.4 8 6.4h.1c1.5 0 2.6-.5 3.7-1a9.5 9.5 0 0 1 8.5 0c1.1.5 2.3 1 4 1 3.6-.1 5.9-3.4 7.9-6.3 2-3 3-6 3.4-7a.4.4 0 0 0-.2-.6 10.4 10.4 0 0 1-1.3-18.6.4.4 0 0 0 .2-.6A11.8 11.8 0 0 0 34 12c-2.2 0-4.2.8-5.9 1.4-1.1.5-2.1.8-2.8.8-.7 0-1.7-.3-2.9-.8a14 14 0 0 0-5-1.3h-.2c-4.3 0-8.3 2.5-10.5 6.4zM34.7 0c-2.5.1-5.6 1.7-7.5 3.9a10.7 10.7 0 0 0-2.7 7.9c0 .2.2.3.4.4h.5c2.6 0 5.3-1.4 7.1-3.7 2-2.4 3-5.4 2.7-8.1 0-.2-.2-.4-.4-.4z" />
                </svg>
              </div>
              <div className="appbs_cont">
                <span className="appbs_name">Apple Store</span>
                <span>télécharger dans</span>
              </div>
            </a>
            <a href="/Avenir" target="_blank" rel="noopener noreferrer" className="appbs">
              <div className="appbs_icon">
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 50 50">
                  <path fill="#f5b921" d="M4.4 50l31-17.3-6.6-6.3L4.4 50zM2.5 1v48.4l25-24.2L2.6 1zm44.1 22.2l-9-5.3-7.6 7.3 6.9 6.6 9.7-5.6c.6-.3.9-.9.9-1.5s-.3-1.2-.9-1.5zM36 17L4 0l24.8 24 7.2-7z" />
                </svg>
              </div>
              <div className="appbs_cont">
                <span className="appbs_name">Google Play</span>
                <span>télécharger dans</span>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>

      <h2 className="aptitle">A PROPOS DE NOUS</h2>
      <div className="container5">
  <img className="logo" src="\images\Genero.png" alt="mlogo" />
  <div className="box">
    <p className="parag">
      Genero est une application novatrice qui permet à chacun de donner des objets et de la nourriture entre particuliers en Algérie, rendant ainsi le don accessible à tous, peu importe l'endroit ou le moment.
    </p>
  </div>
</div>

      <div className="container3">

      </div>
      <h2 className="aptitle">NOTRE MISSIONS</h2>
      <h3 className="tit">Le 1er service entièrement pensé pour le don et conçu pour répondre aux attentes des utilisateurs !</h3>
      <div className="containerAb">
        
        <section className="cards">
          <article className="card card--1">
           
            <div className="card__img"></div>
            <a href="#" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Faciliter Les Dons Entre Particuliers</span>
              <h5 className="card__title">Genero vise à rendre le processus de don plus facile et accessible à tous. L'application permet aux utilisateurs de donner des objets et de la nourriture dont ils n'ont plus besoin ou qu'ils souhaitent partager avec d'autres personnes dans le besoin.</h5>
              
            </div>
          </article>
    
          <article className="card card--2">
           
            <div className="card__img"></div>
            <a href="#" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Réduire Le Gaspillage Et Favoriser La Durabilité</span>
              <h5 className="card__title">Genero fournit une plateforme où les donneurs et les bénéficiaires peuvent se connecter directement. Cela permet aux utilisateurs de trouver facilement des personnes à proximité qui ont des objets ou de la nourriture à donner, créant ainsi des liens sociaux et renforçant la communauté.</h5>
              
            </div>
          </article>
    
          <article className="card card--3">
            <div className="card__img"></div>
            <a href="#" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Encourager Le Partage Et La Solidarité</span>
              <h5 className="card__title">Genero cherche à promouvoir une culture de partage et de solidarité en encourageant les utilisateurs à donner généreusement et à aider les autres membres de la communauté. L'application offre un moyen pratique de connecter les donneurs et les bénéficiaires potentiels, favorisant ainsi les échanges entre particuliers.</h5>
            </div>
          </article>
    
          <article className="card card--4">
            <div className="card__img"></div>
            <a href="#" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Connecter Les Donneurs Et Les Bénéficiaires</span>
              <h5 className="card__title">Genero fournit une plateforme où les donneurs et les bénéficiaires peuvent se connecter directement. Cela permet aux utilisateurs de trouver facilement des personnes à proximité qui ont des objets ou de la nourriture à donner, créant ainsi des liens sociaux et renforçant la communauté.</h5>
            </div>
          </article>
        </section>
        </div>
      <div className="containert"> 
      <Testimonials />
      </div>
     
    </div>
  );
};




