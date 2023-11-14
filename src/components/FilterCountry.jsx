import { useContext } from "react";
import { ThemeContext } from "./ContextTheme";
// eslint-disable-next-line react/prop-types
const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;

    onSelect(regionName);
  };
  const { darkTheme } = useContext(ThemeContext);

  return (
    <select
      onChange={selectHandler}
      className={darkTheme ? "darkcard telect" : "lightcard telect"}
    >
      <option className={darkTheme ? "lightcon option" : "darkcon option"}>
        Filter by Region
      </option>
      <option className="option" value="Africa">
        Africa
      </option>
      <option className="option" value="America">
        America
      </option>
      <option className="option" value="Asia">
        Asia
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default FilterCountry;
