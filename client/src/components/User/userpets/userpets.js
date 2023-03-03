import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserPet() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("https://pet-finder-9j4w.onrender.com/pets/user")
      .then((resp) => {
        setPets(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <center>
        <h1 id="header">Adoptive, Foster happines</h1>
      </center>

      <div className="pets">
        {Array.isArray(pets) &&
          pets.map((newpets) => {
            return (
              <div key={newpets.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={newpets.image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h3 className="card-title"> Name: {newpets.name}</h3>
                    <h4 className="card-title">Species: {newpets.species}</h4>
                    <p className="card-text">
                      DESCRPTION: {newpets.description}
                    </p>
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
