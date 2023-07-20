import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const contact = () => {
    const { nom, prenom, email, telephone, message } = user;
    if (nom && prenom && email && telephone && message) {
      axios
        .post('http://localhost:8000/contact', user)
        .then(res => {
          console.log(res);
          alert("Votre message a été bien envoyé.");
        })
        .catch(err => console.error(err));
    } else {
      alert('Invalid input');
    }
  };

  return (
    <div className="container1">
      <h1 className="brand">
        <span>Opinion</span>
      </h1>
      <br />
      <div className="wrapper">
        <div className="company-info">
          <h2 className="aptitle">Contactez Nous</h2>
          <ul>
            <li>
              <i className="fa fa-road"></i> 44 Rue Ali Heddad, Alger
            </li>
            <li>
              <i className="fa fa-phone"></i> +21379915676
            </li>
            <li>
              <i className="fa fa-envelope"></i> Genero@info.com
            </li>
          </ul>
        </div>
        <div className="contact">
          <form id="contact-form" onSubmit={e => e.preventDefault()}>
            <p>
              <label>Nom</label>
              <input type="text" name="nom" id="name" required value={user.nom} onChange={handleChange} />
            </p>
            <p>
              <label>Prénom</label>
              <input type="text" name="prenom" id="company" value={user.prenom} onChange={handleChange} />
            </p>
            <p>
              <label>E-mail</label>
              <input type="email" name="email" id="email" required value={user.email} onChange={handleChange} />
            </p>
            <p>
              <label>Téléphone</label>
              <input type="text" name="telephone" id="phone" value={user.telephone} onChange={handleChange} />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message" value={user.message} onChange={handleChange}></textarea>
            </p>
            <p className="full">
              <button type="submit" className="btnn" onClick={contact}>Envoyer</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


