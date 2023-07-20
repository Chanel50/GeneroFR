import React from "react";
import ReactPlayer from "react-player";
import '../styles/Player.css';

const Player = () => {
  return (
    <div className="vid">
    <ReactPlayer
      
      url="https://www.youtube.com/watch?v=OEv3p40hjMs"
     
           
    />
    </div>
  );
};

export default Player;
