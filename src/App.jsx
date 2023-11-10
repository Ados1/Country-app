import { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries";
import Countryinfo from "./components/Countryinfo";

import moon from "./assets/Group 3.svg";
import { ThemeContext } from "./components/ContextTheme";

function App() {
  const { darkTheme, themeHandler } = useContext(ThemeContext);
  return (
    <>
      <div className={darkTheme ? " bg-black header" : "bg-white header"}>
        <div className="containerNav">
          <h5>Where in the world ?</h5>
          <img src={moon} alt="theme" onClick={themeHandler} />
          <h5>Dark mode</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<Countryinfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
