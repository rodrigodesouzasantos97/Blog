import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div id="app">
      <NavBar />
      <div id="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
