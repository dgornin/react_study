import React from "react"

export default function AddItem(props) {
    return <form onSubmit={props.onAddSubbmit}>
    <div>
      <label htmlFor="good-name">Name:</label>
      <br />
      <input
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
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
        value={props.desc}
        onChange={(e) => props.setDesc(e.target.value)}
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
}
