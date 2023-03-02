import Navbar from '../Navbar';
import SearchFunction from '../components/search/search';
import './App.css';
import Pets from '../components/Pets/pets';
import { useState } from 'react';
// import SearchData from '../components/search/searcheddata';

function App() {
  const [searchText , setSearchText] = useState([])
  const [searchType , setSearchType] = useState("breed")
  return ( 
    <div className="Conftainer">
      <Navbar 
      setSearchText ={setSearchText}
      setSearchType = {setSearchType}
      />
      <Pets/>
      <SearchFunction
      searchtext = {searchText}
      searchType = {searchType}
      />
      {/* <SearchData/> */}
   </div>
  );
}

export default App;
