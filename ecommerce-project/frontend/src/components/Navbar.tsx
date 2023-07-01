import * as React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Aasguard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about-us">
                About-us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/cart">
                Carts
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
