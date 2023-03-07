import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import UsersPet from "./components/User/userpets/userpets";
// import Login from './components/Authautication/login';
// import Logout from './components/Authautication/logout';
import App from "./App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
      {/* <UsersPet/> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);