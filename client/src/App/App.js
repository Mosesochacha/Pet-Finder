import "./App.css";
import Pets from "../components/Pets/pets";
import AddPet from "../components/Pets/addpets";
import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import EditPet from "../components/Pets/edit";
import Login from "../components/User/login";
import SearchFunct from "../components/search/search";
import Register from "../components/User/register";
import UserPet from "../components/User/userpets/userpets";
import Homepage from "../components/homepage/homepage";
import Navbar from "../Navbar";
import HomepageNavbar from "../components/homepage/nav";

function App() {
  const [searchText, setSearchText] = useState([]);
  const [searchType, setSearchType] = useState("breed");
  const location = useLocation();
  const path = location.pathname;

  const [userId, setUserId] = useState("");

  const [userEmail, setEmail] = useState("");

  // Load the Email from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // Store the Email in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("userEmail", userEmail);
  }, [userEmail]);

  function exportValue(value) {
    console.log(value);
    setEmail(value);
  }

  useEffect(() => {
    fetch(`http://localhost:9292/user/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setUserId(data["id"]);
      });
  }, [userEmail]);

  console.log(userEmail);

  let navbar;
  if (path === "/login" || path === "/register" || path === "/") {
    navbar = <HomepageNavbar />;
  } else {
    navbar = (
      <Navbar setSearchText={setSearchText} setSearchType={setSearchType} />
    );
  }

  const [petId, setPetId] = useState("");

  function exportId(value) {
    setPetId(value);
  }

  return (
    <div className="Container">
      {navbar}

      <Switch>
        <Route exact path="/login">
          <Login exportValue={exportValue} />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/home">
          <Pets exportId={exportId} />
        </Route>

        <Route exact path="/add">
          <AddPet userId={userId} />
        </Route>

        <Route exact path="/edit">
          <EditPet petId={petId} userId={userId} />
        </Route>

        <Route exact path="/view">
          <UserPet userId={userId} />
        </Route>

        <Route path="/search">
          <SearchFunct searchtext={searchText} searchtype={searchType} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
