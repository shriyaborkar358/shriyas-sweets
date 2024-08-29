import React from "react";
import "./SweetCard.css";
import Veg from "./veg-icon.png";
import Nonveg from "./non-veg-icon.png";
import { THEME, CARD_BUTTON } from "../../config/data";

function SweetCard({ image, title, description, IsVeg, price }) {
  return (
    <div>
      <div className="sweetcard-container">
        <img src={image} className="sweetcard-image" alt="CakeImg" />

        <img src={IsVeg ? Veg : Nonveg} className="sweetcard-category" />

        <h2 className="sweetcard-title" style={{color:THEME.heading}}>{title}</h2>

        <p className="sweetcard-description">{description}</p>

        {price ? <p className="cake-price">₹ {price}</p> : "Not Available"}

        <button className="sweetcard-btn" style={{background:THEME.heading}}>{CARD_BUTTON}</button>
      </div>
    </div>
  );
}

export default SweetCard;
