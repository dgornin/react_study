import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState(() => {
    let i = JSON.parse(localStorage.getItem("items"));
    if (!i) {
      return [];
    }
    return i;
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddSubbmit(e) {
    e.preventDefault();
    if (name && desc) {
      const item = { id: uuid(), name: name, desc: desc };
      setItems([...items, item]);
      setName("");
      setDesc("");
    }
  }

  function handleDelClick(e) {
    setItems(items.filter((i) => i.id !== e.target.value));
  }

  return (
    <>
      {!items.length && <title>Товары отсутствуют</title>}
      {items.length && <title>{items.length} товаров</title>}
      <AddItem name={name} setName={setName} desc={desc} setDesc={setDesc} onAddSubbmit={handleAddSubbmit}/>
      <div>
        {!items.length && <p className="ui-title">Добавьте первый товар</p>}
      </div>
      <ItemList items={items} onDelClick={handleDelClick}/>
    </>
  );
}
