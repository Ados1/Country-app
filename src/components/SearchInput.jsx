import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ onSearch }) => {
  const [input, SetInput] = useState("");

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
      />
    </form>
  );
};

export default SearchInput;
