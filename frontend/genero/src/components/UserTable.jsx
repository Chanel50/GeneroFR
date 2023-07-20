import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users from the server
  useEffect(() => {
    axios.get('http://localhost:8000/api/user')
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}, []);

  // Delete a user by their ID
  const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then(response => {
        // Remove the deleted user from the state
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
      <h1 className="text-amber-400 bg-amber-400 font-bold mb-4">User Table</h1>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-2 bg-amber-400 text-white border">Name</th>
            <th className="p-2 bg-amber-400 text-white border">Email</th>
            <th className="p-2 bg-amber-400 text-white border">Telephone</th>
            <th className="p-2 bg-amber-400 text-white border">Date of Birth</th>
            <th className="p-2 bg-amber-400 text-white border">Genre</th>
            <th className="p-2 bg-amber-400 text-white border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr className="hover:bg-gray-50" key={user._id}>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.telephone}</td>
              <td className="p-2 border">{user.date_de_naissance}</td>
              <td className="p-2 border">{user.genre}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteUser(user._id)}
                  className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

