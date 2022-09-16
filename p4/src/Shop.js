import React, { useState } from "react";
import Item from "./Item.js";

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
      <form onSubmit={handleAddSubbmit}>
        <div>
          <label htmlFor="good-name">Name:</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="good-name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <label htmlFor="good-desc">Description:</label>
        <br />
        <div>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="good-desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      <div>
        {!items.length && <p className="ui-title">Добавьте первый товар</p>}
      </div>

      <ul className="ui-list">
        {items.map((i) => {
          return (
            <li className="ui-item-list">
              <Item info={i} />
              <button
                onClick={handleDelClick}
                value={i.id}
                className="item-button"
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
