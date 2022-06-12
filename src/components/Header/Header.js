import React from "react";
import "./Header.css";
import PetsIcon from "@material-ui/icons/Pets";
// import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header_logo">
        <PetsIcon />
        <strong>petbnb</strong>
      </Link>
      {/* <div className="header_searchbar">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div> */}
      <div className="header_right">
        <Link to="/">Become a pet host</Link>
        <Link to="/">Sign up</Link>
        <Link to="/">Log in</Link>
      </div>
    </header>
  );
};

export default Header;
