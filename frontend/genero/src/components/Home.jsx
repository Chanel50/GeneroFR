import React from "react";
import "../styles/Home.css";

import { Arsection } from "./Arsection";
import { About } from "./About";
import Card from "./Card";
import Counter from "./Counter";
import Player from "./Player";
import Testimonials from "./Testimonials";
import { Header } from "./Header";




export const Home = () => {
  const cookie = document.cookie
  console.log(cookie)
  return (
  <div>
    <Header />
    <Arsection />
    <br /> 
    <About />
    <br /> 
    <Card />
    <br /> 
    <Counter />
    <br />
    <Player />
    <br />
    <Testimonials />
 
  </div>
   
  );
};