import React from "react";
import "./SearchWidget.css";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchWidget = () => {
  return (
    <div className="search-widget">
      <h1>Find places to stay on petbnb</h1>
      <p>Discover hotels and homes purrfect for any trip.</p>

      <Button
        variant="contained"
        disableElevation
        fullWidth
        startIcon={<SearchIcon />}
        href="#"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchWidget;
