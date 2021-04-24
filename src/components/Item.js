import React from "react";
import image from "../assets/image.jpeg";

const Item = (props) => {
  const {
    heading,
    subheading,
    productDetailLine,
    rating,
    numReviews,
    hours,
    lectures,
    levels,
    currentPrice,
    originalPrice,
  } = props.itemDetails;
  
  return (
    <div className="Item">
      <div className="ItemLeft">
        <img src={image} alt="teddy" />
        <div className="Description">
          <h3 className="Heading">{heading}</h3>
          <p className="SubHeading">{subheading}</p>
          <p className="ProductDetailLine">{productDetailLine}</p>
          <div className="Rating">{rating}<span> ({numReviews})</span></div>
          <p className="OtherDetails">
              <span>{hours} total hours</span>
              <span> &#9679; {lectures} lectures</span>
              <span> &#9679; {levels}</span>
          </p>
        </div>
      </div>
      <div>
        <p className="CurrentPrice">${currentPrice}</p>
        <p className="OriginalPrice">${originalPrice}</p>
      </div>
    </div>
  );
};

export default Item;
