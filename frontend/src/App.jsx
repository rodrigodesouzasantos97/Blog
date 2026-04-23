import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  return (
    <div id="app">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss        
        pauseOnHover
        theme="dark"
      />
      <NavBar />
      <div id="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
