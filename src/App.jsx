import { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries";
import Countryinfo from "./components/Countryinfo";

import moon from "./assets/Group 3.svg";
import sun from "./assets/icon-sun.svg";
import { ThemeContext } from "./components/ContextTheme";

function App() {
  const { darkTheme, themeHandler } = useContext(ThemeContext);

  return (
    <>
      <div className={darkTheme ? "darkhead header " : "lighthead header"}>
        <div className="containerNav">
          <h5>Where in the world ?</h5>
          {darkTheme ? (
            <img src={sun} alt="theme" onClick={themeHandler} />
          ) : (
            <img src={moon} alt="theme" onClick={themeHandler} />
          )}
          <h5>{darkTheme ? "Light Mode" : "Dark mode"}</h5>
        </div>
      </div>
      <div className={darkTheme ? "darkcontainer bot " : "lightcontainer bot"}>
        <div
          className={
            darkTheme ? "darkcontainer container " : "lightcontainer container"
          }
        >
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<Countryinfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
