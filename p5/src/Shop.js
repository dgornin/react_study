import React, { useState } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleAddSubbmit(e) {
    e.preventDefault();
    if (name && desc) {
      const item = { id: items.length, name: name, desc: desc };
      setItems([...items, item]);
      setName("");
      setDesc("");
    }
  }

  function handleDelClick(e) {
    setItems(items.filter((i) => i.id !== parseInt(e.target.value, 10)));
  }

  return (
    <>
      <AddItem name={name} setName={setName} desc={desc} setDesc={setDesc} onAddSubbmit={handleAddSubbmit}/>
      <div>
        {!items.length && <p className="ui-title">Добавьте первый товар</p>}
      </div>
      <ItemList items={items} onDelClick={handleDelClick}/>
    </>
  );
}
