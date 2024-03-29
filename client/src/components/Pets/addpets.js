import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../loading/loader";
export default function AddPet({userId}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading , setIsLoadding]= useState(false)
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
      setIsLoadding(true)
    if (age < 0) {
      setError("Age cannot be negative.");
      setMessage("");
      return;
    }

    const response = await fetch(
      `https://pet-finder-pgl9.onrender.com/add/pet/${userId}`,
      {
        method: "POST",
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
        }),
      }
    );
    const data = await response.json();
    if (data.message) {
      setMessage(data.message);
      setIsLoadding(true)
      history.push("/home")
      setError("");
    } else {
      setMessage("");
      setError(data.error);
      setIsLoadding(false)
    }
  };

  return (
    <center className="mt-5 addpet">
      <div className="card " style={{ width: "21rem" }}>
        <div className="card-body" id="addpet">
          <form onSubmit={handleSubmit} className="addpetform">
            <label>NAME:</label>
            <input
              placeholder="ENTER ANIMAL NAME"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
                {isLoading && <Loading/>}
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

            <div className="card-image" style={{width: "2em"}}>
              <label>UPLOAD IMAGE: </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              ADD PET
            </button>

            {message && (
              <div className="alert alert-success mt-3">{message}</div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </center>
  );
}
