import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import Login from './components/Authautication/login';
// import Logout from './components/Authautication/logout';
import App from "./App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);