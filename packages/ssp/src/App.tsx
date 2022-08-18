import React from "react";
import "./App.css";
import { Button, Header, Footer } from "@dashboard/common-components";
import { stringUtil } from "@dashboard/common-utils";
import { IPerson } from "@dashboard/common-types";

function App() {
  console.log(stringUtil.shorten("Paridokht"));
  console.log(stringUtil.append("Paridokht"));
  const person: IPerson = { name: "first" };
  return (
    <>
      <Header />
      <p>{person.name}</p>
      <Button label="this is my button" />
      <Footer />
    </>
  );
}

export default App;
