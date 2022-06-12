import React from "react";
import "./Card.css";
import StarIcon from "@material-ui/icons/Star";

// use destructuring assignment to specify props' properties as parameters
const Card = ({ src, title, rating, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="home-image" />
      <div className="card_info">
        <div className="card_info-title">
          <h2>{title}</h2>
          <span>
            <StarIcon />
            <span>{rating}</span>
          </span>
        </div>
        <h4>{description}</h4>
        {price && <h3>{price}/night</h3>}
      </div>
    </div>
  );
};

export default Card;
