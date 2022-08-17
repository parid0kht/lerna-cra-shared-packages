import React from "react";
import "./App.css";
import { CommonTypes } from "@dashboard/common-types";
import { Button, Header, Footer } from "@dashboard/common-components";
import { stringUtil, dateUtil } from "@dashboard/common-utils";

function App() {
  console.log(stringUtil.shorten("Paridokht"));
  console.log(stringUtil.append("Paridokht"));
  const animal: CommonTypes.IAnimal = { name: "animal name" };
  const date: CommonTypes.TAdjoeDate = dateUtil.getDate();

  console.log(date.iso);
  return (
    <>
      <Header />
      <Button label="this is my button" />
      <Footer />
    </>
  );
}

export default App;
