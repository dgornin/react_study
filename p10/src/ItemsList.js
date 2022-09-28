import React from "react";
import Item from "./Item";
import styled from 'styled-components'

const Buttond = styled.button`
background-color: var(--primary);
color: white;
border: 0;
padding: 15px 20px;
min-width: 150px;
font-size: 16px;
border-radius: 3px;
cursor: pointer;
transition: opacity 200ms ease-out;
box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);`

const Ul = styled.ul`
list-style: none;
margin: 0 0 0 0;
padding: 0 0 0 0;`

export default function ItemsList(props) {
  return (
    <Ul className="shop">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <Buttond
            className="btn-delete"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </Buttond>
        </li>
      ))}
    </Ul>
  );
}
