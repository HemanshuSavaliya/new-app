import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contect"
                >
                  Contect Us
                </Link>
              </li>
            </ul>
            <h1 className="text-white">SAVALIYA INFOTECH 🤝</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
