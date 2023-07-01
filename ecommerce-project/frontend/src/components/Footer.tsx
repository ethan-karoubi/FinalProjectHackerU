import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container d-flex flex-column">
        <div className="row">
          <div className="col-md-4">
            <p className="text-white mt-5">
              "Unlock the Potential, Repair, and Reuse: Don't Discard,
              Transform!"
            </p>
            <p className="text-white mb-0">Los Angeles, CA</p>
          </div>
          <div className="col-md-4">
            <h5>Fast Link</h5>
            <ul>
              <li>Home</li>
              <li>About-us</li>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="text-white mt-5">Copyright 2023</p>
            <p>All Rights Reserved by Ethan Karoubi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
