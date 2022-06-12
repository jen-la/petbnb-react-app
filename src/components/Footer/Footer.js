import React from "react";
import "./Footer.css";
import { Grid } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <Grid container className="footer">
      {/* TO DO: Upgrade to MUIv5 to take advantage of order prop */}
      <Grid container item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <PetsIcon />
        <p>2022 petbnb by Jennifer Lam</p>
      </Grid>

      <Grid container item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <GitHubIcon />
        <InstagramIcon />
        <FacebookIcon />
      </Grid>
    </Grid>
  );
}

export default Footer;
