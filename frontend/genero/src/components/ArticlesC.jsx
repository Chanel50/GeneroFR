import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ArticlesC.css';

const ArticlesC = () => {
  const [crudData, setCrudData] = useState({ titre: '', Description: '', categorie:'', Disponibilites:'', etat_objet:'', adresse:'', telephone:'',  image: null });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titre', crudData.titre);
    formData.append('Description', crudData.Description);
    formData.append('categorie', crudData.categorie);
    formData.append('Disponibilites', crudData.Disponibilites);
    formData.append('etat_objet', crudData.etat_objet);
    formData.append('adresse', crudData.adresse);
    formData.append('telephone', crudData.telephone);
    formData.append('image', crudData.image);

    // Make the POST request using axios
    axios.post('http://localhost:8000/api/cruds', formData)
      .then(response => {
        // Handle the successful response if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error response
        if (error.response) {
          const { status, data } = error.response;
          if (status === 422 && data && data.message) {
            setErrorMessage(data.message);
          } else {
            setErrorMessage('An error occurred. Please try again later.');
          }
        } else {
          setErrorMessage('Network error. Please check your internet connection.');
        }
      });
  };

  const handleChange = (e) => {
    setCrudData({ ...crudData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCrudData({ ...crudData, image: e.target.files[0] });
  };

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Titre</label>
          <input
            type="text"
            name="titre"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter the title"
            required
            value={crudData.titre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <input
            type="text"
            name="Description"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entrer une Description"
            required
            value={crudData.Description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Catégorie</label>
          <input
            type="text"
            name="categorie"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entrer la categorie"
            required
            value={crudData.categorie}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Disponibilites</label>
          <input
            type="text"
            name="Disponibilites"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entrer la Disponibilites"
            required
            value={crudData.Disponibilites}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Etat de l'objet</label>
          <input
            type="text"
            name="etat_objet"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entrer l'état de l'objet"
            required
            value={crudData.etat_objet}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Adresse</label>
          <input
            type="text"
            name="adresse"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entrer l'adresse"
            required
            value={crudData.adresse}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Téléphone</label>
          <input
            type="text"
            name="telephone"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entrer votre téléphone"
            required
            value={crudData.telephone}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="form-group mt-3">
          <label className="mr-2">Télécharger votre image:</label>
          <input type="file" name="image" onChange={handleFileChange} />
          {crudData.image && (
            <img
              src={URL.createObjectURL(crudData.image)}
              alt="Uploaded"
              className="mt-2"
              style={{ width: '200px' }}
            />
          )}
        </div>
        <hr />
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default ArticlesC;
