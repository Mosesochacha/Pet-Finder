import axios from "axios";
import React, { useState ,useEffect } from "react";

const URL = "https://pet-finder-9j4w.onrender.com/pets";

export default function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get(URL).then((resp) => {
      setPets(resp.data);
    });
  }, []);
  console.log(pets);

  return <div></div>;
}
