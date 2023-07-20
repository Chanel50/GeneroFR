import React from "react";
import "../styles/Arsection.css";
import Slideshow from '../components/Slideshow';

export const Arsection = () => {
  return (
    <div>
      <div className="position-relative bg-primary overflow-hidden">
        <div className="containerar position-relative zi-2 content-space-3 content-space-md-5">
          <h1 className="text-white">Faites preuve de générosité et bénéficiez d'objets et de nourriture gratuitement près de chez vous.!</h1>
          <br />
          <Slideshow />
          <div className="d-grid d-sm-flex justify-content-center gap-2">
        
          </div>
        
        </div>

        {/* Background Shape */}
        <div className="position-absolute top-0 start-0 w-65">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1246 1078">
            <g opacity=".4">
              <linearGradient id="doubleEllipseTopLeftID1" gradientUnits="userSpaceOnUse" x1="2073.5078" y1="1.7251" x2="2273.4375" y2="1135.5818" gradientTransform="matrix(-1 0 0 1 2600 0)">
                <stop offset="0.4976" style={{ stopColor: '#61ae42' }}></stop>
                <stop offset="1" style={{ stopColor: '#7ac85c' }}></stop>
              </linearGradient>
              <polygon fill="url(#doubleEllipseTopLeftID1)" points="519.8,0.6 0,0.6 0,1078 863.4,1078"></polygon>
              <linearGradient id="doubleEllipseTopLeftID2" gradientUnits="userSpaceOnUse" x1="1717.1648" y1="3.779560e-05" x2="1717.1648" y2="644.0417" gradientTransform="matrix(-1 0 0 1 2600 0)">
                <stop offset="1.577052e-06" style={{ stopColor: '#61ae42' }}></stop>
                <stop offset="1" style={{ stopColor: '#7ac85c' }}></stop>
              </linearGradient>
              <polygon fill="url(#doubleEllipseTopLeftID2)" points="519.7,0 1039.4,0.6 1246,639.1 725.2,644"></polygon>
            </g>
          </svg>
        </div>
        {/* End Background Shape */}
      </div>
    </div>
  );
};

