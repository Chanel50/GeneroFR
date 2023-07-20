import React, { useState } from 'react';
import axios from 'axios';
import { PiUserCircleGear } from 'react-icons/pi';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const profile = () => {
    const { name, email, password } = userData;
    if (name && email && password) {
      axios
        .put('http://localhost:8000/api/user/update', userData)
        .then(res => {
          console.log(res);
          alert('Your profile has been updated successfully.');
        })
        .catch(err => console.error(err));
    } else {
      alert('Invalid input');
    }
  };

  return (
    <div className="containerl" >
     <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
     <div className="self-center mb-6 text-xl font-light text-amber-400 sm:text-2xl dark:text-white">
     <PiUserCircleGear className="m-auto flex items-center justify-center" />
            Modifier votre profile
          
           
          </div>
    <form className="max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
      {/* Form fields */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-gray-700">
          Nom
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          {/* ... */}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-gray-700">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          {/* ... */}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-gray-700">
          Mot de pass
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          {/* ... */}
        </div>
      </div>

      {/* Submit button */}
      <div className="mb-4">
        <button
          type="submit"
          className="px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-300"
          onClick={profile}
        >
          Modifier
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Profile;
