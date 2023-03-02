import React from "react";
export default function DisplayPets({
  name,
  age,
  species,
  breed,
  image,
  gender,
  description,
  error ,
  message,
  deletePet
}) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title"> Name: {name}</h3>
          <h4 className="card-titl">Species: {species}</h4>
          <p className="card-text">DESCRPTION: {description}</p>
           <div>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
           </div>
          <div className="edits">
            <i onClick = {deletePet} className="material-icons">delete</i>
            <i className="material-icons">edit</i>
          </div>
          <div className="edits mt-2">
            <h6  className="delete">
              Save
            </h6>
            <h6 className="edit">Save</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
