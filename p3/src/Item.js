import React, { useState } from "react";

export default function Item({ desc, image, name }) {
  const [quantity, setQuantity] = useState(0);

  function handleAddClick() {
    setQuantity(quantity + 1);
  }

  function handleSubClick() {
    quantity > 0 && setQuantity(quantity - 1);
  }

  return (
    <div className="item">
      <img src={image} alt="product" />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item-quantity">
        <button
          disabled={quantity === 0}
          onClick={handleSubClick}
          className="item-button"
        >
          -
        </button>
        {quantity > 0 && <h3 className="item-total">{quantity}</h3>}
        <button onClick={handleAddClick} className="item-button">
          +
        </button>
      </div>
    </div>
  );
}
