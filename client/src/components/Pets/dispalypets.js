import React from "react";

export default function DisplayPets({name , age , species , breed , image , gender , description }) {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img src= {image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">`Name: {name}`</h3>
           <h4 className="card-title">`{species}`</h4>
          <p className="card-text">
            `DESCRPTION: ${description}`
          </p>
          
        </div>
      </div>
    </div>
  );
}
