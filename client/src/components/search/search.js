import React, { useState , useEffect } from "react";
import axios from "axios";
import SearchData from "./searcheddata";

export default function SearchFunction({searchtext , searchtype}){
 
   const [p , setp] = useState([]);
     
   useEffect(()=>{
    const URL= searchtype ==="breed" ? `https://pet-finder-9j4w.onrender.com/pets/search/breed/${searchtext}` : `https://pet-finder-9j4w.onrender.com/pets/search/name/${searchtext}` ;
      
    axios.get((URL))
    .then((res)=>{
      setp(res.data)
    })
   },[searchtype , searchtext])
   


    return(
      <div className="Search">
        {p.map((p)=>{
          return(
            <div key={p.id}>
               <SearchData
                name = {p.name}
                age = {p.age}
                species = {p.species}
                breed = {p.breed}
                image = {p.image}
                gender = {p.gender}
                description = {p.description}
               />
            </div>
          )
        })}
      </div>
    )
}