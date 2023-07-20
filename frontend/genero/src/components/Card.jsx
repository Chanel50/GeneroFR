import React from 'react';
import '../styles/Card.css';

const Card = () => {
  return (
    <>
       <h2 className="aptitle">DECOUVREZ NOTRE BLOG</h2>
      <ul className="cardds">
        <li className="cardds__item">
          <div className="cardd">
            <img className='cdd' src="\images\im14.png" alt="Slide 3"  />
            <div className="cardd__content">
              <div className="cardd__title">Le pouvoir du partage : Comment donner peut changer des vies</div>
              <p className="cardd__text">Le pouvoir du partage et de la générosité est une force puissante qui peut avoir un impact significatif sur la vie des personnes. En donnant, que ce soit de l'argent, du temps, des compétences ou des ressources,</p>
              <a href="/Articlep" className="btn btn--block card__btn">En savoir plus</a>
             
            </div>
          </div>
        </li>
        <li className="cardds__item">
          <div className="cardd">
          <img className='cdd' src="\images\im13.png" alt="Slide 3"  />
            <div className="cardd__content">
              <div className="cardd__title">Maximiser l'impact de votre don : 5 conseils pratiques</div>
              <p className="cardd__text"> Donner est un acte généreux qui peut changer des vies, mais il est également important de s'assurer que notre don a un impact maximal. Pour que votre don soit efficace et qu'il apporte une réelle différence,</p>
              <a href="/Articlem" className="btn btn--block cardd__btn">En savoir plus</a>
            </div>
          </div>
        </li>
        <li className="cardds__item">
          <div className="cardd">
          <img className='cdd' src="\images\im12.png" alt="Slide 3"  />
            <div className="cardd__content">
              <div className="cardd__title">Réduire le gaspillage au quotidien : Des gestes simples, un grand impact</div>
              <p className="cardd__text"> Le gaspillage est un problème majeur dans notre société moderne, mais chacun d'entre nous peut faire une différence en adoptant des gestes simples dans notre quotidien. En réduisant le gaspillage, nous pouvons contribuer à la préservation des ressources naturelles, </p>
              <a href="/Articler" className="btn btn--block cardd__btn">En savoir plus</a>
            </div>
          </div>
        </li>
        
       
      </ul>
    </>
  );
};

export default Card;