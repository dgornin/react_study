import React from "react";
import Item from "./Item.js";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://source.unsplash.com/400x300/?3M,mask"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://source.unsplash.com/400x300/?latex,gloves"
    }
  ];
  return (
    <div className="shop">
      <Item {...items[0]} />
      <Item {...items[1]} />
    </div>
  );
};

export default Shop;
