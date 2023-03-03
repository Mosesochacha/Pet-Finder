import Navbar from "../Navbar";
import SearchFunction from "../components/search/search";
import "./App.css";
import Pets from "../components/Pets/pets";
import AddPet from "../components/Pets/addpets";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

// import SearchData from '../components/search/searcheddata';

function App({ error, message, deletePet }) {
  const [searchText, setSearchText] = useState([]);
  const [searchType, setSearchType] = useState("breed");
  return (
    <div className="Conftainer">
      <Navbar setSearchText={setSearchText} setSearchType={setSearchType} />
      <Switch>
        <Route exact path="/">
          <Pets />
        </Route>
        <Route exact path="/add">
          <AddPet />
        </Route>
        <Route exact path="/">

        </Route>
      </Switch>
      <SearchFunction searchtext={searchText} searchType={searchType} />
    </div>
  );
}

export default App;
