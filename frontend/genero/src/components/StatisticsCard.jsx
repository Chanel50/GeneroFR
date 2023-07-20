import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StatisticsCard.css';
import { BsMessenger } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";

const StatisticsCard = () => {
  const [userCount, setUserCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/statistiques') // Replace with your API endpoint for fetching statistics
      .then(response => {
        const { userCount, contactCount, articleCount } = response.data;
        setUserCount(userCount);
        setContactCount(contactCount);
        setArticleCount(articleCount);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div class="containerstat">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored">
        
			<span class="counter">{contactCount}</span>
			<p>Message</p>
            <div className='iconstat'>   
            <BsMessenger className="messenger-icon"  />
            </div> 
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box colored1">
       
			<span class="counter">{userCount}</span>
			<p>Utilisateurs</p>
            <div className='iconstat'> 
			<FaUserFriends className="messenger-icon"  />
            </div>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box colored">
            
			<span class="counter">{articleCount}</span>
			<p>Articles</p>
            <div className='iconstat'> 
			<MdOutlinePointOfSale className="messenger-icon"  />
            </div>
		</div>
	</div>
	
  </div>	
</div>
  );
};

export default StatisticsCard;
