import React from "react";
import "./Footer.css";
import { Grid } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

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
