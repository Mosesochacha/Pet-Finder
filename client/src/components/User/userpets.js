import axios from "axios";
// import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UsersPet({ userId }) {
  const [pets, setPets] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(`https://pet-finder-pgl9.onrender.com/users/${userId}`).then((resp) => {
      setPets(resp.data.pets);
      const data = resp.data.pets.json();
    if (data.message) {
      setMessage(data.message);
    } else {
      setMessage("");
      setError(data.error);
    }

    });
  }, [userId]);
  return (
    <div className="pets mt-10" style={{width: "40em"}}>
      <center className="container">
        <div className="pets mt-19">
          {Array.isArray(pets) &&
            pets.map((pet) => (
              <div key={pet.id} className ="mt-9 me-28 card container">
                <div className=" mt-10">
                  <img src={pet.image} className="" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title"> Name: {pet.name}</h3>
                    <h4 className="card-title">Species: {pet.species}</h4>
                    <p className="card-text">DESCRPTION: {pet.description}</p>
                    {message && <p>{message}</p>}
                    {error && <p>{error}</p>}
                    <div className="edits">
                      {/* <NavLink to="/edit">
                        <i className="material-icons">edit</i>
                      </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </center>
    </div>
  );
}
