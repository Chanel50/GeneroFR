import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts from the server
  useEffect(() => {
    axios.get('http://localhost:8000/contact')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  // Delete a contact by its ID
  const deleteContact = (id) => {
    axios.delete(`http://localhost:8000/contact/${id}`)
      .then(response => {
        // Remove the deleted contact from the state
        setContacts(contacts.filter(contact => contact._id !== id));
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <div>
      <h1 className="text-amber-400 bg-amber-400 font-bold mb-4">Contact Table</h1>
      
    
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-amber-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nom
                </th>
                <th scope="col" className="px-6 py-3">
                    Prénom
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Téléphone
                </th>
                <th scope="col" className="px-6 py-3">
                    Message
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

          

{contacts.map(contact => (

<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<td className="px-6 py-4">
                    {contact.nom}
                </td>
                <td className="px-6 py-4">
                    {contact.prenom}
                </td>
                <td className="px-6 py-4">
                    {contact.email}
                </td>
                <td className="px-6 py-4">
                    {contact.telephone}
                </td>
                <td className="px-6 py-4">
                    {contact.message}
                </td>

                <td className="px-6 py-4">
                <button
                  onClick={() => deleteContact(contact._id)}
                  className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-200"
                >
                  Supprimer
                </button>
                </td>
            </tr>


))}
          
            
          
        </tbody>
    </table>
</div>

    </div>
  );
};

export default ContactTable;

