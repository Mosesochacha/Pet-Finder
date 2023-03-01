import Navbar from '../Navbar';
import './App.css';
import Pets from '../components/Pets/pets';
import DisplayPets from '../components/Pets/dispalypets';

function App() {
  return (
    <div className="Conftainer">
      <Navbar/>
      <Pets/>
      <DisplayPets/>
   </div>
  );
}

export default App;
