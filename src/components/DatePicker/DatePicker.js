import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import './DatePicker.css';

function DatePicker() {
  const history = useHistory();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  // create selectionRange object and handleSelect fn as per reace-date-range requirements
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="datePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push('/search')}>Find a bnb</Button>
    </div>
  )   
}

export default DatePicker;