import React from "react";
import "./App.css";
import Header from "./Header";
import Date from "./Date";
import KPIs from "./KPIs";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown);

function App() {
  return (
    <div className="App">
      <Header />
      <Date />
      <KPIs />
    </div>
  );
}

export default App;
