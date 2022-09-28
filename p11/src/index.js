import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import styled from 'styled-components';
import useMapbox from "./useMapbox";

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

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <Button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </Button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
