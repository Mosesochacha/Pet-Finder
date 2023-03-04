import React from "react";

export default function  SearchData({name , species , image  , description }) {
  return (
    <div>
      <div className="card">
        <img src= {image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title"> Name: {name}</h3>
           <h4 className="card-titl">Species: {species}</h4>
          <p className="card-text">
            DESCRPTION: {description}
          </p>
        </div>
      </div>
    </div>
  );
}
