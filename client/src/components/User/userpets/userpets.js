import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserPet({ userId }) {
  const [pets, setPets] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  console.log(userId);
  useEffect(() => {
    axios
      .get(`https://pet-finder-pgl9.onrender.com/current/user/${userId}`)
      .then((resp) => {
        setPets(resp.data);
        if (resp.data.message) {
          setMessage(resp.data.message);
          setError("");
        } else {
          setMessage("");
          setError("YOU HAVE NOT ADDED PET");
        }
      })
      .catch((error) => setError("Error fetching data"));
    }, [userId]);

  return (
    <div>
      <center>
        <div className="pets">
          {Array.isArray(pets)
           &&
            pets.map((pet) => (
              <div key={pet.id}>
                <div className="card mt-10">
                  <img src={pet.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title"> Name: {pet.name}</h3>
                    <h4 className="card-title">Species: {pet.species}</h4>
                    <p className="card-text">DESCRPTION: {pet.description}</p>
                    {message && <p>{message}</p>}
                    {error && <p>{error}</p>}
                    <div className="edits">
                      <NavLink to="/edit">
                        <i className="material-icons">edit</i>
                      </NavLink>
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
