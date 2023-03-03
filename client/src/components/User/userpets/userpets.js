import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserPet() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://pet-finder-9j4w.onrender.com/pets/user")
      .then((resp) => {
        setPets(resp.data.pets);
        setLoading(false);
        alert("Pets loaded successfully!");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch pets");
        setLoading(false);
        alert("Failed to fetch pets!");
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!pets || pets.length === 0) {
    return <p>You have no pets.</p>;
  }

  return (
    <div>
      <center>
        <h1 id="header">Adoptive, Foster happines</h1>
      </center>

      <div className="pets">
        {pets.map((newpets) => {
          return (
            <div key={newpets.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={newpets.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title"> Name: {newpets.name}</h3>
                  <h4 className="card-title">Species: {newpets.species}</h4>
                  <p className="card-text">DESCRPTION: {newpets.description}</p>
                  <div className="edits">
                    <i className="material-icons">delete</i>
                    <NavLink to="/edit">
                      <i className="material-icons">edit</i>
                    </NavLink>
                  </div>
                  <div className="edits mt-2">
                    <h6 className="edit">Save</h6>
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
