import React from "react";
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();
  return (
    <div className="Homepages">
             <nav className="navbar bg-body-tertiary">
  <div className="container-fluid " id="homepagenav">
    <a href="l" className="navbar-brand">Navbar</a>
    <button>log</button>
  </div>
</nav>
      
      <div className="header">
        <h3>Licence</h3>
        <div className="d-flex me-10">
        
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/login");
          }}
        >
          LOGIN
        </button>
      </div>
        <p>Find Your Furry Friend Today</p>
      </div>

      <div className="hero-image">
        <div className="hero-text">
          <h2>Adopt a Pet Today!</h2>
          <p>Search for your perfect pet by breed, age, and location</p>
        </div>
      </div>

      <div className="content">
        <h3>About Us</h3>
        <p>
          Pet Finder is dedicated to helping pets find their forever homes. Our
          mission is to connect pet lovers with their ideal furry companions.
        </p>
      </div>

      <div className="footer">
        <p>Pet Finder &copy; 2023 All Rights Reserved</p>
      </div>
    </div>
  );
}
