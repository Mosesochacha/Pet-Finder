import axios from "axios";
import DisplayPets from "./dispalypets";
import React, { useState, useEffect } from "react";

const URL = "https://pet-finder-9j4w.onrender.com/pets";

export default function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get(URL).then((resp) => {
      setPets(resp.data);
    });
  }, []);

  return (
    <div>
      <center><h1 id="header">Adoptive, Foster happines</h1></center>

    <div className="pets">
      {pets.map((newpets)=>{
        return(
          <div key={newpets.id}>
            <div>
              <DisplayPets
              name = {newpets.name}
              age = {newpets.age}
              species = {newpets.species}
              breed = {newpets.breed}
              image = {newpets.image}
              gender = {newpets.gender}
              description = {newpets.description}
              />
            </div>
          </div>
        )
      })}
    </div>
    </div>
   
  );
}
