import React, { useState } from "react";
// import Pets from "../Pets/pets";

export default function Petdelete() {
  const [message , setMessege] = useState("");
  const [error, setError] = useState("");

  async function deletePet(id) {
    console.log("hello");
    const response = await fetch(`https://pet-finder-9j4w.onrender.com/pets/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessege(data.message);
    } else {
      setError(data.error);
    }
  }

  return <div>
        <div>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
           </div>
          <div className="edits">
            <i onClick = {deletePet} className="material-icons">delete</i>
            <i className="material-icons">edit</i>
          </div>
  </div>;
}
