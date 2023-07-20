import React, { useState } from "react";
import "../styles/Article.css";
import SearchBar from '../components/SearchBar';
import ArticlesF from '../components/ArticlesF';
import Articledes from '../components/Articledes';


export const Article = () => {
  const [searchArticles, setSearchArticles] = useState([])
  return (
    <div>

      <Articledes />
       <br />
      <SearchBar setSearchArticles={setSearchArticles}/>
      <br />
     
      
      <ArticlesF searchArticles={searchArticles} />
      <br />
      <div className="mbt"><a href="/Cancer" className="btn">Espace cancer</a></div>
     
    </div>
  );
};