import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import DatePicker from "../DatePicker/DatePicker";
// import { Button } from "@mui/material";
import SearchWidget from "../SearchWidget/SearchWidget";
import "./Banner.css";

function Banner() {
  // use react-router's useHistory hook to redirect to SearchPage on clicking Explore nearby button
  const history = useHistory();

  // add state to allow toggle between 'Search Dates' and 'Hide' button
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      {/* <div className="banner_search">
        {showSearch && <DatePicker />}
        
        <Button 
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {!showSearch ? "Search dates" : "Hide"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Make sure your best friend is taken care of</h1>
        <h5>So you can travel with no regrets</h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore nearby</Button>
      </div> */}
      <div className="banner_image"></div>
      <SearchWidget />
    </div>
  );
}

export default Banner;
