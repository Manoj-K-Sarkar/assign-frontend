import React from "react";
import Item from "../components/Item";


const Items = [
    {
        heading: "How to Draw Cute And Kawaii Cartoon Cat",
        subheading: "learn how to draw a cute and kawaii cartoon cat in an instant",
        productDetailLine: "Ecky Venis-Heathear",
        rating: 4.7,
        numReviews: 6,
        hours: 3.5,
        lectures: 20,
        levels: "All Levels",
        currentPrice: 9.99,
        originalPrice: 19.99
    }
]

function List() {
  return (
    <div className="List">
      <Item itemDetails={Items[0]}></Item>
      <Item itemDetails={Items[0]}></Item>
      <Item itemDetails={Items[0]}></Item>
    </div>
  );
}

export default List;
