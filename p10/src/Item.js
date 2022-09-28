import React, { useState } from "react";
import styled from 'styled-components'

const Button = styled.button`background-color: white;
color: black;
border: 1px solid var(--light-gray);
padding: 5px 20px;
min-width: 50px;
font-size: 16px;
border-radius: 3px;
cursor: pointer;
transition: opacity 200ms ease-out;
box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
margin-right: 10px;
margin-left: 10px;`

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="item-quantity">
        <Button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </Button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <Button className="item-more" onClick={handleAddClick}>
          +
        </Button>
      </div>
    </div>
  );
}
