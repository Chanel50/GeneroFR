import React from "react";
import "../styles/About.css";


export const About = () => {
  
  return (
  <div>
    <h2 className="aptitle">NOTRE MISSIONS</h2>
      <p className="sp">Genero est 1er service entièrement pensé pour le don et conçu pour répondre aux attentes des utilisateurs !</p>
    <div className="containerAb">
        
    <section className="cards">
      <article className="card card--1">
       
        <div className="card__img"></div>
        <a href="#" className="card_link">
          <div className="card__img--hover"></div>
        </a>
        <div className="card__info">
          <span className="card__category">Faciliter Les Dons Entre Particuliers</span>
        
          <h5 className="card__title">Genero facilite le don d'objets et de nourriture. Ellle rend le processus simple et accessible à tous. Les utilisateurs peuvent partager les articles dont ils n'ont plus besoin avec ceux qui en ont besoin. Une solution pratique pour aider les personnes dans le besoin et promouvoir le partage.</h5>
          
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
  </div>
   
  );
};