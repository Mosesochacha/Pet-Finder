import axios from "axios";
// import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UsersPet({ userId }) {
  const [pets, setPets] = useState(null);
  useEffect(() => {
    axios.get(`https://pet-finder-pgl9.onrender.com/users/${userId}`).then((resp) => {
      setPets(resp.data.pets);
    });
  }, [userId]);
  return (
    <div className="pets mt-10" style={{width: "40em"}}>
      <center className="container">
        <div className="pets mt-19">
          <center><h1>YOUR PETS</h1></center>
          {Array.isArray(pets) &&
            pets.map((pet) => (
              <div key={pet.id} className ="mt-9 me-28 card container">
                <div className=" mt-10">
                <center><img src={pet.image} className="card-img mt-1" alt="..." style={{ width: "80%" , height: "20em"}} /></center>
                  {/* <img src={pet.image} className="" alt="..." /> */}
                  <div className="card-body">
                    <h3 className="card-title"> Name: {pet.name}</h3>
                    <h4 className="card-title">Species: {pet.species}</h4>
                    <p className="card-text">DESCRPTION: {pet.description}</p>
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
