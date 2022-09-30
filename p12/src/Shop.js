import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import "./index.css";
import useFethc from "./useFetch.js"

export default function Shop() {
  const [items, setItems] = useState([]);
  const {get, loader} = useFethc();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/")
    .then(data => setItems(data))
    .catch(error => console.error(error)) 
  }, [get])

  return (
    <div className="shop">
      {loader && <p>Loading</p>}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
