import React, { useContext } from "react";
import { Context } from "../../context/AppContext";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
// import PROPERTIES from "../../data/properties";
import { Grid, Button } from "@material-ui/core";
import "./Home.css";

function Home() {
  const context = useContext(Context);
  return (
    <div>
      <Banner />
      {/* <Grid container spacing={1} className="home_section">
        <Grid item xs={12} md={4}>
          <Card
            src="https://cdn.concreteplayground.com/content/uploads/2020/04/dog-toy-unsplash.jpg"
            title="Pet friendly accommodation"
            description="Hotels, motels and bnbs for humans and their furry friends."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            src="data:image/jpeg;base64,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"
            title="Pet boarding"
            description="Can't take your furry friend away with you? Don't worry, they'll have a great time at our luxury boarding homes."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            src="data:image/jpeg;base64,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"
            title="Unique stays"
            description="Places that will make you and your pal go WOW."
          />
        </Grid>
      </Grid> */}
      {/* <div className="home_boarding">
        <h1>Can't take your furry friend away with you?</h1>
        <p>
          Don't worry, they'll have a great time at our luxury boarding homes.
        </p>
        <button>Learn more</button>
      </div> */}
      <h2 className="home_heading">Just booked in Australia</h2>
      <Grid container spacing={2} className="home_section">
        {context.homes.map((property) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              key={property.key}
              src={property.data.src}
              title={property.data.name}
              rating={property.data.star}
              description={property.data.description}
              // price={property.data.pricePerNight}
            />
          </Grid>
        ))}
      </Grid>
      <section className="home_section">
        <h2>When are you travelling?</h2>
        <p>Add dates for updated pricing and availability</p>
        <Button variant="contained" color="default" disableElevation>
          Add dates
        </Button>
      </section>
    </div>
  );
}

export default Home;