import React from 'react';
import '../styles/Card.css';

const Card = () => {
  return (
    <>
      <h1 className='dec'>Découvrez avec nous Opinion</h1>
      <ul className="cards">
        <li className="cards__item">
          <div className="card">
            <img src="/images/Design sans titre (6).png" alt="Slide 3"  />
            <div className="card__content">
              <div className="card__title">Les 10 meilleurs smartphones de l'année</div>
              <p className="card__text">Découvrez les derniers smartphones les plus performants du marché, leurs fonctionnalités, et les avis des utilisateurs.</p>
              <a href="/Notfaund" className="btn btn--block card__btn">En savoir plus</a>
             
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
          <img src="/images/Design sans titre (7).png" alt="Slide 3"  />
            <div className="card__content">
              <div className="card__title">Guide d'achat : Comment choisir le meilleur casque audio</div>
              <p className="card__text"> Obtenez des conseils pratiques pour choisir le casque audio adapté à vos besoins, en fonction de la qualité sonore, du confort et du rapport qualité-prix.</p>
              <a href="/Notfaund" className="btn btn--block card__btn">En savoir plus</a>
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
          <img src="/images/Design sans titre (8).png" alt="Slide 3"  />
            <div className="card__content">
              <div className="card__title">Les avantages et les inconvénients des voitures électriques</div>
              <p className="card__text"> Pesez les avantages environnementaux et les défis pratiques des voitures électriques pour prendre une décision éclairée sur votre prochain véhicule.</p>
              <a href="/Notfaund" className="btn btn--block card__btn">En savoir plus</a>
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
          <img src="/images/Design sans titre (9).png" alt="Slide 3"  />
            <div className="card__content">
              <div className="card__title">Comparatif des meilleures marques de café</div>
              <p className="card__text">Explorez les différentes marques de café et leurs variétés, et découvrez les avis des amateurs de café pour trouver votre prochain coup de cœur.</p>
              <a href="/Notfaund" className="btn btn--block card__btn">En savoir plus</a>
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
          <img src="/images/Design sans titre (10).png" alt="Slide 3"  />
            <div className="card__content">
              <div className="card__title">Les 5 meilleurs jeux vidéo de l'année</div>
              <p className="card__text">Plongez dans le monde des jeux vidéo et découvrez les titres les plus populaires de l'année, avec des critiques détaillées et des recommandations.</p>
              <a href="/Notfaund" className="btn btn--block card__btn">En savoir plus</a>
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
          <img src="/images/Design sans titre (11).png" alt="Slide 3"  />
            <div className="card__content">
              <div className="card__title">Guide ultime pour choisir une nouvelle caméra</div>
              <p className="card__text">Trouvez la caméra parfaite en fonction de vos besoins, que vous soyez un amateur de photographie ou un cinéaste en herbe, en examinant les caractéristiques clés et les avis des utilisateurs.</p>
              <a href="/Notfaund" className="btn btn--block card__btn">En savoir plus</a>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Card;