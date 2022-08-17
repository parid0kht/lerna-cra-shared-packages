import React from "react";
import "./App.css";
import { Button, Header, Footer } from "@dashboard/common-components";
import { stringUtil } from "@dashboard/common-utils";

function App() {
  console.log(stringUtil.shorten("Paridokht"));
  console.log(stringUtil.append("Paridokht"));
  return (
    <>
      <Header />
      <Button label="this is my button" />
      <Footer />
    </>
  );
}

export default App;
