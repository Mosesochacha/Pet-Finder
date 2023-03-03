import "./App.css";
import Pets from "../components/Pets/pets";
import AddPet from "../components/Pets/addpets";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import EditPet from "../components/Pets/edit";
// import Login from "../components/User/login";
 import SearchFunction from "../components/search/search";
import Register from "../components/User/register";
// import UserPet from "../components/User/userpets/userpets";
// import Homepage from "../components/homepage/homepage";
import Navbar from "../Navbar";

function App() {
   const [searchText, setSearchText] = useState([]);
 const [searchType, setSearchType] = useState("breed");

  return (
    <div className="Container">
      <Navbar setSearchText={setSearchText} setSearchType={setSearchType} /> 
      <Switch>
        {/* <Route exact path="/login"> */}
          {/* <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <div> */}
        <Route exact path="/register">
          <Register />
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
           {/* <Route exact path="/view"> */}
            {/* <UserPet /> */}
          {/* </Route>  */}
          <Route><SearchFunction searchtext={searchText} searchtype={searchType} /></Route> 
          
        {/* </div> */}
      </Switch>
    </div>
  );
}

export default App;
