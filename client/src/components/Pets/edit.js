import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function EditPet({id}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
   const history = useHistory()
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (age < 0) {
      setError("Age cannot be negative.");
      return;
    }
    if (age < 0) {
      setError("Age cannot be negative.");
      return;
    }
    const response = await fetch(
      `https://pet-finder-pgl9.onrender.com/pets/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          breed,
          species,
          description,
          image,
          gender,
          id,
        }),
      }
    );
    const data = await response.json();
    if (data.message) {
      setMessage(data.message);
      setError("");
      history.push("/home")
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  return (
    <center className="card ">
      <div className="card " >
        <div className="card-body  " id="addpet">
          <form onSubmit={handleSubmit} className="addpetform">
            <label>NAME:</label>
            <input
              placeholder="ENTER ANIMAL NAME"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>AGE: </label>
            <input
              placeholder="ENTER ANIMAL AGE"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <label>BREED:</label>
            <input
              placeholder="ENTER ANIMAL BREED"
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />

            <label>SPECIES: </label>
            <input
              type="text"
              placeholder="ENTER ANIMAL SPECIES"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />

            <label>DESCRIPTION: </label>
            <input
              type="text"
              placeholder="TELL US ABOUT YOUR PET"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>GENDER: </label>
            <input
              placeholder="ENTER ANIMAL GENDER"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <div className="a">
              <input
              placeholder="upload image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {/* <i className="material-icons" onClick={handleImageChange}>upload</i> */}
            </div>
            <button className="mt-2" type="submit">
              {" "}
              SAVE
            </button>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </center>
  );
}
