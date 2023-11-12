import { useState, useContext } from "react";
import { ThemeContext } from "./ContextTheme";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ onSearch }) => {
  const [input, SetInput] = useState("");
  const { darkTheme } = useContext(ThemeContext);

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => SetInput(e.target.value)}
        className={
          darkTheme
            ? "darksearch !placeholder-white "
            : "lightsearch placeholder-slate-500 "
        }
      />
    </form>
  );
};

export default SearchInput;
