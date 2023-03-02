import React, { useState } from "react";

export default function Navbar({setSearchText , setSearchType}) {
const [search , setSearch] = useState([])
// const [searchType , setSearchType] = useState("breed")



  return (
    <div className="Navbar">
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="Home">Home</a>
      <a className="navbar-brand" href="add" >add</a>
      <a className="navbar-brand" href="logout">logout</a>
      <form className="d-flex" role="search">
        <select className="options" onClick={(e)=>{
          setSearchType(e.target.value)
        }}>
          <option>breed</option>
          <option>name</option>
        </select>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
          setSearch(e.target.value)
        }}  value={search} />
        <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
              e.preventDefault()
             setSearchText(search.toLowerCase())
        }}>Search</button>
      </form>
    </div>
  </nav>
</div>
  );
}
