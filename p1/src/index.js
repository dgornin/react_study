import React from "react";
import { render } from "react-dom";
import "./index.css";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import Link from "./Link.js";

function App() {
  return (
    <>
      <Container>
        <Button type="a" disabled="true">
          Тык
        </Button>
        <Link href="google.com/">Тык</Link>
        <Input placeholder="сюда текст" name="Ввод" />
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));
