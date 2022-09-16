import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop.js";

function App() {
  const [log, setlog] = useState(false);

  function handleLoginClick() {
    !log && setlog(true);
  }

  function handleLogoutClick() {
    log && setlog(false);
  }

  return (
    <>
      <div className="ui-container">
        {!log && <h2 className="ui-title">Нужно залогиниться!</h2>}
        {!log && (
          <button onClick={handleLoginClick} className="ui-button">
            Войти
          </button>
        )}
        {log && (
          <button onClick={handleLogoutClick} className="ui-button">
            Выйти
          </button>
        )}
        {log && <Shop />}
      </div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
