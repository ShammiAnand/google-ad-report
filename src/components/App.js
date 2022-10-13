import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Date from "./Date";
import KPIs from "./KPIs";
import Summary from "./Summary";
import Tables from "./Tables";
import Footer from "./Footer";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
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
      <Tables />
      <LineChart />
      <PieChart />
      <Footer />
    </div>
  );
}

export default App;
