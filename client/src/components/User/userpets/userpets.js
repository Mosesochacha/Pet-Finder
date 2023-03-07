import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserPet({ userId }) {
  const [pets, setPets] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  console.log(userId);
  useEffect(() => {
    axios
      .get(`https://pet-finder-pgl9.onrender.com/current/user/${userId}`)
      .then((resp) => {
        setPets(resp.data);
        const data = resp.json();
        if (data.message) {
          setMessage(data.message);
          setError("");
        } else {
          setMessage("");
          setError(data.error);
        }
      });
  }, [userId]);
  return (
    <div>
      <center></center>

      <div className="pets">
        {pets.map((newpets) => {
          return (
            <div key={newpets.id}>
              <div className="card mt-10">
                <img src={newpets.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title"> Name: {newpets.name}</h3>
                  <h4 className="card-title">Species: {newpets.species}</h4>
                  <p className="card-text">DESCRPTION: {newpets.description}</p>
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
          );
        })}
      </div>
    </div>
  );
}
