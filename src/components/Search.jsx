import React from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

const Search = () => {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputicon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
};

export default Search;
