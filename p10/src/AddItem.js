import React from "react";
import styled from 'styled-components'

const Button = styled.button`
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

const Input = styled.input`
padding: 12px 10px;
margin-left: 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;`


export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <Input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <Input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <Button type="submit" className="btn btn-basic" value="Добавить">Добавить</Button>
      </div>
    </form>
  );
}
