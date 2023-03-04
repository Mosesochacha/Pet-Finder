import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Navbar({ setSearchText, setSearchType }) {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");
  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://pet-finder-9j4w.onrender.com/user/logout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      setError("");
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink to="/home"> Home</NavLink>
          <NavLink to="/add">ADD YOUR PET</NavLink>
          <NavLink to="/view">VIEW YOUR PETS</NavLink>
          <button onClick={(e)=>{
            e.preventDefault();
            handleLogout()
            history.push("/")
          }}>LOGOUT</button>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>

          <div>{message && <p>{message}</p>}</div>
          <div>{error && <p>{error}</p>}</div>
          <form className="d-flex me-3" role="search">
            <select
              className="options me-2"
              onClick={(e) => {
                setSearchType(e.target.value);
              }}
            >
              <option>breed</option>
              <option>name</option>
            </select>
            <input
              className="form-control m-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <button
              className="button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setSearchText(search.toLowerCase());
                history.push("/search");
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
