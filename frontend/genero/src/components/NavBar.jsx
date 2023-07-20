import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import "../styles/NavBar.css";

function NavBar() {
  const [showProfile, setShowProfile] = useState(false);
  const [click, setClick] = useState(false);
  let user = null;

  try {
    const userData = localStorage.getItem("user");
    user = userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/Login");
  }
  const goToProfile = () => {
    navigate('/Profile');
  };

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
    <a href="/" className="mlogo-link">
      <img className="mlogo" src="/images/Genero.png" alt="mlogo" />
    </a>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Accueil
            </NavLink>
          </li>
          {localStorage.getItem("user") && ( // Ajout de cette condition pour afficher le lien uniquement si l'utilisateur est connecté
            <li className="nav-item">
              <NavLink
                exact
                to="/Article"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Article
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              exact
              to="/Blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>
          <li>
            {localStorage.getItem("user") ? (
              <nav className="relative">
                <span
                  onClick={() => setShowProfile(!showProfile)}
                  className="text-white flex items-center gap-2 hover:cursor-pointer text-xl"
                >
                  {user && user.name} <BiUserCircle />
                </span>
                {showProfile && (
                  <ul className="absolute flex flex-col gap-2 shadow-lg top-10 px-4 py-2 left-0 -translate-x-1/4 rounded-lg bg-white text-black">
                    <li>
                      <button
                        onClick={logOut}
                        className="py-2 px-4 flex items-center gap-2 shadow-md rounded-md bg-amber-400 hover:bg-gray-200 transition-colors text-gray-50 hover:cursor-pointer hover:shadow-none hover:text-gray-600"
                      >
                        Logout <BiLogOut />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={goToProfile}
                        className="py-2 px-4 flex items-center gap-2 shadow-md rounded-md bg-amber-400 hover:bg-gray-200 transition-colors text-gray-50 hover:cursor-pointer hover:shadow-none hover:text-gray-600"
                      >
                        Profile <RiUserSettingsLine className="ic" />
                      </button>
                    </li>
                  </ul>
                )}
              </nav>
            ) : null}
          </li>
        </ul>
        <div className="nav-iconn" onClick={handleClick}>
          <i
            className={click ? "fas fa-times" : "fas fa-bars fnav"}
            style={{ color: "white" }}
          ></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;






