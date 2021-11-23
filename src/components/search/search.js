import React from "react";
import "./search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search-section">
      <AiOutlineSearch className="icon-block" />
      <input placeholder="search" />
    </div>
  );
};
export default Search;
