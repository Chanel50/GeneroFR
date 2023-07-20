import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    date_de_naissance: '',
    genre: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const register = () => {
    const { name, email, password, telephone, date_de_naissance, genre } = user;
    if (name && email && password && telephone && date_de_naissance && genre) {
      axios
  .post('http://localhost:8000/api/register', user)
  .then((res) => {
    console.log(res.data)
    alert("Bienvenue sur GENERO.");
    alert(res.data.message);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    window.location.href = '/Login';
  })
  .catch((err) => {
    console.error(err);
    alert("Une erreur s'est produite lors de l'envoi du message.");
  });

    } 
  };

  return (
    <>
      <div className="containerl">
        <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl font-light text-amber-400 sm:text-2xl dark:text-white">
            Créer un nouveau compte
          </div>
          <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Vous avez déjà un compte?
            <a href="/Login" className="text-sm text-amber-400 underline hover:text-blue-700">
              Connectez-Vous
            </a>
          </span>
          <div className="p-6 mt-8">
            <form>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter votre nom"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-first-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter votre Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="password"
                    id="create-account-email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Entrer votre mot de passe"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="telephone"
                    value={user.telephone}
                    onChange={handleChange}
                    placeholder="Enter votre numéro de téléphone"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="date_de_naissance"
                    value={user.date_de_naissance}
                    onChange={handleChange}
                    placeholder="Enter votre date de naissance"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="genre"
                    value={user.genre}
                    onChange={handleChange}
                    placeholder="Enter votre genre"
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="button"
                  className="py-2 px-4 bg-amber-400 hover:bg-rose-100 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  onClick={register}
                >
                  Inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
