import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Date from "./Date";
import KPIs from "./KPIs";
import Summary from "./Summary";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown);

function App() {
  return (
    <div className="App">
      <Header />
      <Date />
      <KPIs />
      <Summary />
    </div>
  );
}

export default App;
