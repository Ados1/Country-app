/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { apiURL } from "./api";
import arrow from "../assets/Shape.png";

const Countryinfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);

        if (!res.ok) throw new Error("Could not find!");

        const data = await res.json();
        console.log(data);
        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="country_info_wrapper">
      <button>
        <Link to="/">
          <img src={arrow} alt="arrow" />
          Back
        </Link>
      </button>

      {isLoading && !error && (
        <h4>😃 Patience is a virtue, especially during loading times</h4>
      )}

      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div className="country_info_container">
          <div className="country_info-img">
            <img src={country.flags.png} alt="flags" />
          </div>
          <div className="country_info">
            <div className="country_info-head" key={index}>
              <h3>{country.name.common}</h3>

              <div className="country_info-left">
                <h5>
                  Native Name:<span>{country.name.common}</span>
                </h5>
                <h5>
                  Population:
                  <span>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </h5>
                <h5>
                  Region:<span>{country.region}</span>
                </h5>
                <h5>
                  Sub Region:<span>{country.subregion}</span>
                </h5>
                <h5>
                  Capital:<span>{country.capital}</span>
                </h5>
              </div>

              <div className="country_info-right">
                <h5>
                  Top Level Domain:<span>{country.tld}</span>
                </h5>
                <h5>
                  Currencies:<span>{country.currency}</span>
                </h5>
                <h5>
                  Languages:<span>{country.Language}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="border">
        {country?.map((country) => {
          return (
            <>
              <h5>Border Countries:</h5>
              <ul key={country}>
                <li>{country.borders[0]}</li>
                <li>{country.borders[1]}</li>
                <li>{country.borders[2]}</li>
                <li>{country.borders[3]}</li>
                <li>{country.borders[4]}</li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Countryinfo;
