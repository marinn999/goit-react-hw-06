import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleSearch }) => {
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={handleSearch}
        value={inputValue}
        name="name"
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
