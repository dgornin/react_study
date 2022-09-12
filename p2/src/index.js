import React from "react";
import { render } from "react-dom";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import "./index.css";

function App() {
  return (
    <>
      <Container>
        <Link href="https://moscoding.ru">Наделай шуму в индустрии!</Link>
        <Input placeholder="wikileaks@protonmail.com" name="email" />
        <Button disabled={true}>Подписаться</Button>
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));
