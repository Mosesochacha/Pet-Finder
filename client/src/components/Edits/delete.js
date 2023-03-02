import React, { useState } from "react";
import Pets from "../Pets/pets";

export default function Petdelete() {
  const [messege, setMessege] = useState("");
  const [error, setError] = useState("");

  async function deletePet(id) {
    console.log("hello");
    const response = await fetch(`https://pet-finder-9j4w.onrender.com/pets/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessege(data.message);
    } else {
      setError(data.error);
    }
  }

  return <div>
      <Pets
       message = {messege}
       error = {error}
       deletePet = {deletePet}
      />
  </div>;
}
