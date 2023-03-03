import Navbar from "../Navbar";
import SearchFunction from "../components/search/search";
import "./App.css";
import Pets from "../components/Pets/pets";
import AddPet from "../components/Pets/addpets";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import EditPet from "../components/Pets/edit";
import Login from "../components/User/login";
import Register from "../components/User/register";
import UserPet from "../components/User/userpets/userpets";
// import SearchData from '../components/search/searcheddata';
import Homepage from "../components/homepage/homepage";
function App({ error, message, deletePet }) {
  const [searchText, setSearchText] = useState([]);
  const [searchType, setSearchType] = useState("breed");
  return (
    <div className="Container">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route>
          <Switch>
            <Route exact path="/home">
            <Navbar setSearchText={setSearchText} setSearchType={setSearchType} />
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
          </Switch>
          <SearchFunction searchtext={searchText} searchType={searchType} />
        </Route>
      </Switch>
      <SearchFunction searchtext={searchText} searchType={searchType} />
    </div>
  );
}

export default App;
