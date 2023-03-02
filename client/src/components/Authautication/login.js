import React from "react";

export default function Login() {
  return (
    <center className="mt-5 ">
      <div className="sign_up">
        <div className="card mt-12 bg-warning" style={{ width: "18rem" }}>
          <div className="card-body ">
              <input placeholder="ENTER FULL NAME"/>
            <label for="emali">Email</label>
            <br />
            <input type="email" placeholder="ENTER YOUR EMAIL"/>
            <label for="password">password</label>
            <br />
             <center>
              <button type="submit" className="mt-3">Login </button><br />
              <p>Not member <a href="register">register</a></p>
              
             </center>
          </div>
        </div>
      </div>
    </center>
  );
}
