import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="Home">Home</a>
      <a className="navbar-brand" href="add" >add</a>
      <a className="navbar-brand" href="logout">logout</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>
  );
}
