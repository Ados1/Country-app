import { useState, useEffect } from "react";
import { apiURL } from "./api";

import SearchInput from "./SearchInput";
import FilterCountry from "./FilterCountry";

import searchicon from "../assets/search.svg";
import { Link } from "react-router-dom";
// import { ThemeContext } from "./ContextTheme";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  // const { darkTheme, themeHandler } = useContext(ThemeContext);

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      console.log(data);

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${apiURL}/region/${regionName}`);

      if (!res.ok) throw new Error("Failed.....");

      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all_country_wrapper">
      <div className="country_top">
        <div className="search">
          <img src={searchicon} alt="search icon" />
          <SearchInput onSearch={getCountryByName} />
        </div>
        <div className="filter">
          <FilterCountry onSelect={getCountryByRegion} />
        </div>
      </div>

      <div className=" country_bottom">
        {isLoading && !error && (
          <h4>😃 Patience is a virtue, especially during loading times</h4>
        )}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
          // eslint-disable-next-line react/jsx-key
          <Link to={`/country/${country.name.common}`}>
            {" "}
            <div className="country-card">
              <div className="country_img">
                <img src={country.flags.png} alt="flags" />
              </div>

              <div className="country_data">
                <h3>{country.name.common}</h3>
                <h6>
                  Population:
                  <span>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </h6>
                <h6>
                  Region: <span>{country.region}</span>
                </h6>
                <h6>
                  Capital:<span>{country.capital}</span>
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
