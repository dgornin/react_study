import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="btn" onClick={() => setLogin(false)} class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Нужно залогиниться!</h2>
        <button className="btn" onClick={() => setLogin(true)} class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
