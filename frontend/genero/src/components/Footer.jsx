import React from 'react';
import "../styles/Footer.css";

export default function Footer() {
  const userLoggedIn = localStorage.getItem("user");

  return (
    <div>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.facebook.com/profile.php?id=100094455604212">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com/GENERO1997">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.youtube.com/channel/UCt3qQQB7y76cyX-Tk2ZU4yg">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.instagram.com/p/CuPYIePtyLW/?igshid=NjZiM2M3MzIxNA==">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="/Home">Accueil</a></li>
          {userLoggedIn && ( // Ajout de cette condition pour afficher le lien uniquement si l'utilisateur est connecté
            <li className="menu__item"><a className="menu__link" href="/Article">Article</a></li>
          )}
          <li className="menu__item"><a className="menu__link" href="/Blog">Blog</a></li>
          <li className="menu__item"><a className="menu__link" href="/Apropos">A propos</a></li>
          <li className="menu__item"><a className="menu__link" href="/Contact">Contact</a></li>
        </ul>
        <p>&copy;2023 Chanel HAMEL| Tous droits réservés</p>
      </footer>
    </div>
  );
}


