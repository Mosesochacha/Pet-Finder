import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const history = useHistory();

  if (isRegistered) {
    history.push("/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://pet-finder-pgl9.onrender.com/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          location,
          password,
          password_confirmation: passwordConfirmation,
        }),
      }
    );
    const data = await response.json();
    if (data.message) {
      setMessage(data.message);
      setIsRegistered(true);
      setError("");
      history.push("/login");
    } else {
      setMessage("");
      setError(data.error);
      setIsRegistered(false);
      history.push("/register");
    }
  };

  return (
    <center className="mt-5">
      <div className="card mt-12 bg-warning" style={{ width: "18rem" }}>
        <div className="card-body ">
          <form onSubmit={handleSubmit}>
            <label>USERNAME</label>
            <input
              placeholder="ENTER FULL NAME"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Location:</label>
            <input
              placeholder="ENTER YOUR LOCATION"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label>Email: </label>
            <input
              placeholder="ENTER YOUR EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm password: </label>
            <input
              placeholder="RE ENTER PASSWORD"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />

            <button type="submit">Register</button>
            <p>
              Are you a member? <NavLink to="/login">Login</NavLink>
            </p>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </center>
  );
}
