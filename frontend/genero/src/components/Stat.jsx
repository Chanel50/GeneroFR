import React, { useEffect } from 'react';
import '../styles/Stat.css';
import $ from 'jquery';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Stat = () => {
  


  return (

     
    <section className="container6">
        <h2 className="aptitle">Découvrez nos dernières statistiques</h2>
        <br />
      <div className="row">
        <div className="col-sm-3">
          <div className="container6__counter text-center mt-2">
          <div className="icon">
          <i className="fas fa-bar-chart"></i>
          </div>
            <div className="counter">
              <div className="count" data-number="88">88</div>
            </div>
            <div className="category text-uppercase">
              <span className="total">Produits Testés</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="container6__counter text-center mt-2">
          <div className="icon">
          <i className="fas fa-user-circle"></i>
          </div>

            <div className="counter">
              <div className="count" data-number="1788">1700</div>
            </div>
            <div className="category text-uppercase">
              <span className="total">Utilisateurs</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
        <div className="container6__counter text-center mt-2">
        <div className="icon">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>

            <div className="counter">
            <div className="count" data-number="15643">15643</div>
            </div>
            <div className="category text-uppercase">
            <span className="total">Opinions</span>
            </div>
        </div>
        </div>

        <div className="col-sm-3">
          <div className="container6__counter text-center mt-2">
            <div className="icon">
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="counter">
              <div className="count" data-number="2898">1544</div>
            </div>
            <div className="category text-uppercase">
              <span className="total">Notation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stat;