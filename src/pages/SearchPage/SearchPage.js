import React from 'react';
import './SearchPage.css';
import SearchResult from '../../components/SearchResult/SearchResult';
import { Button } from '@material-ui/core';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>1 stay • 28 January to 30 January • 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult 
        img="https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/homes/2019/04/02/1554159494200_lake-conjola-jetty-picnic.jpg?width=963&height=&mode=crop&anchor=topcenter&quality=75"
        location="Lake Conjola"
        title="Oasis by the water"
        description="An environmentally friendly cabin by beautiful Lake Conjola, surrounded by kangaroos and nature."
        star={4.75}
        price="$350 / night"
        total="$700 total"
      />
    </div>
  )
}

export default SearchPage;
