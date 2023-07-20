import React, { useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      if (slides[slideIndex - 1] && slides[slideIndex - 1].style) {
        slides[slideIndex - 1].style.display = 'block';
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
      }
      setTimeout(showSlides, 9000); // Change image every 4 seconds
    }
  }, []);

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img className="imgs" src="\images\im17.png" alt="Slide 1" style={{ width: '100%' }} />
          <div className="text">Un support expert à chaque étape, pour partager vos objets en toute confiance</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img className="imgs" src="\images\im16.png" alt="Slide 2" style={{ width: '100%' }} />
          <div className="text">Un monde meilleur commence par le partage, avec Genero à vos côtés.</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img className="imgs" src="\images\im19.png" alt="Slide 3" style={{ width: '100%' }} />
          <div className="text"> Votre tranquillité d'esprit est notre priorité.</div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </>
  );
};

export default Slideshow;











