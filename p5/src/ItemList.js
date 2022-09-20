import React from "react"
import Item from "./Item"

export default function ItemList(props) {
    return <ul className="ui-list">
    {props.items.map((i) => {
      return (
        <li className="ui-item-list" key={i.id}>
          <Item info={i} />
          <button
            onClick={props.onDelClick}
            value={i.id}
            className="item-button"
          >
            Удалить
          </button>
        </li>
      );
    })}
  </ul>
}
