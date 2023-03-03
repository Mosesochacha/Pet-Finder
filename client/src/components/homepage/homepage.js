import React from "react";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid ">
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </div>
      </nav>
    </div>
  );
}
