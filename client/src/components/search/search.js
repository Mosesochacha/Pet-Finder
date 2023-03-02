import React, { useState , useEffect } from "react";
import axios from "axios";


export default function SearchFunction({searchtext , searchType}){
 
   const [newPets , setNewPets] = useState([]);
     
   useEffect(()=>{
    const URL= searchType ==="breed" ? `https://pet-finder-9j4w.onrender.com/pets/search/breed/${searchtext}` : `https://pet-finder-9j4w.onrender.com/pets/search/name/${searchtext}` ;
      
    axios.get((URL))
    .then((res)=>{
      setNewPets(res.data)
    })
   },[searchType , searchtext])
   
   console.log(newPets);


    return(
      <div></div>
    )
}