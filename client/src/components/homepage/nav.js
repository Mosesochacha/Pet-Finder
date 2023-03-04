import React from "react";
import { useHistory } from "react-router-dom";

export default function HomepageNavbar() {
  const history = useHistory()
  return (
    <div>
      <nav className="navbar bg-body-tertiary" >
        <div className="container-fluid " id="homepagenav">
          <a href="l" className="navbar-brand">
            WELCOME TO PET FINDER
          </a>
           <h3>Licence</h3>
          <button onClick={(e)=>{
            e.preventDefault()
            history.push("/login")
          }}>LOGIN</button>
          <button onClick={(e)=>{
            e.preventDefault()
            history.push("/register")
          }}>REGISTER</button>
        </div>
      </nav>
    </div>
  );
}
