import axios from "axios";
import DisplayPets from "./dispalypets";
import React, { useState, useEffect, useRef } from "react";

const URL = "https://pet-finder-pgl9.onrender.com/pets";

export default function Pets({ exportId ,  userId }) {
  const [pets, setPets] = useState([]);
  const handleAddIdRef = useRef(null);
  useEffect(() => {
    axios
      .get(URL)
      .then((resp) => {
        setPets(resp.data);
        handleAddIdRef.current = resp.data.id;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="pets ">
        {pets.map((newpets) => {
          return (
            <div key={newpets.id}>
              <div>
                <DisplayPets
                  name={newpets.name}
                  age={newpets.age}
                  species={newpets.species}
                  breed={newpets.breed}
                  image={newpets.image}
                  gender={newpets.gender}
                  description={newpets.description}
                  id={newpets.id}
            
                  exportId={exportId}
                  userId= {userId}

                  // handleAddId = {handleAddId}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
