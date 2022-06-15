import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "./SearchWidget.css";
import { Grid, Button, TextField, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SearchWidget = () => {
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  const submitHandler = (data) => {
    console.log(data);
    // TO DO: filter available homes using search criteria
    // direct to search page with either search results OR no results but see nearby
    history.push("/search");
  };

  return (
    <div className="search-widget">
      <h1>Find places to stay on petbnb</h1>
      <p>Discover hotels and homes purrfect for any trip.</p>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Controller
              name="location"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="input_location"
                  label="LOCATION"
                  variant="outlined"
                  fullWidth
                  required
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Location required" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="checkIn"
              control={control}
              defaultValue={null} // data must be Date | null
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="CHECK IN"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => (
                      <TextField
                        id="input_check-in"
                        variant="outlined"
                        required
                        {...params}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
              rules={{ required: "Required" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="checkOut"
              control={control}
              defaultValue={null}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="CHECK OUT"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => (
                      <TextField
                        id="input_check-out"
                        variant="outlined"
                        required
                        {...params}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
              rules={{ required: "Required" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="adults"
              control={control}
              defaultValue={2}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="input_adults"
                  label="ADULTS"
                  variant="outlined"
                  required
                  select
                  type="number"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </TextField>
              )}
              rules={{ required: "Required" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="children"
              control={control}
              defaultValue={0}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="input_children"
                  label="CHILDREN"
                  variant="outlined"
                  required
                  select
                  type="number"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </TextField>
              )}
              rules={{ required: "Required" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              disableElevation
              fullWidth
              size="large"
              startIcon={<SearchIcon />}
              type="submit" // Will not work if include href prop
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SearchWidget;
