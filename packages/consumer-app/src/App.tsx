import { stringUtil } from "@dashboard/common-utils";
import { Header, Footer } from "@dashboard/common-components";

function App() {
  const name = stringUtil.append("Demo string");
  return (
    <div className="App">
      <Header />
      {name}
      <Footer />
    </div>
  );
}

export default App;
