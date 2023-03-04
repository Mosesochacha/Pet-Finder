import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function DisplayPets({
  name,
  age,
  species,
  breed,
  image,
  gender,
  description,
  id,
}) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const URL = `https://pet-finder-pgl9.onrender.com/pets/delete/`;
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch( URL + `${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
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
    <div>
      <div className="card" >
        <center><img src={image} className="card-img mt-1" alt="..." style={{ width: "100%" , height: "20em"}} /></center>
        
        <div className="card-body">
          <h3 className="card-title"> Name: {name}</h3>
          <h4 className="card-title">Species: {species}</h4>
          <p className="card-text">DESCRPTION: {description}</p>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}

          <div className="edits">
            <i onClick={handleDelete} className="material-icons">
              delete
            </i>
            <NavLink to="/edit"> <i className="material-icons">edit</i></NavLink>
           
          </div>
        </div>
      </div>
    </div>
  );
}
