import "./App.css";
import Pets from "../components/Pets/pets";
import AddPet from "../components/Pets/addpets";
import { useState } from "react";
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

  let navbar;
  if (path === "/login" || path === "/register" || path === "/") {
    navbar = <HomepageNavbar />;
  } else {
    navbar = <Navbar setSearchText={setSearchText} setSearchType={setSearchType} />;
  }

  return (
    <div className="Container">
      {navbar}

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/home">
          <Pets />
        </Route>

        <Route exact path="/add">
          <AddPet />
        </Route>

        <Route exact path="/edit">
          <EditPet />
        </Route>

        <Route exact path="/view">
          <UserPet />
        </Route>

        <Route path="/search">
          <SearchFunct searchtext={searchText} searchtype={searchType} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
