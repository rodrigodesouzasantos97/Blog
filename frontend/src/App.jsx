import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import "./App.css";

function App() {
  return (
    <div id="app">
      <NavBar />
      <div id="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
