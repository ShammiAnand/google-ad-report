import React from "react";
import "../styles/Summary.css";

function Summary() {
  return (
    <div className="Summary">
      <div className="Summary__heading">Summary</div>
      <div className="Summary__content">
        Here you can provide an explanation of the results for the reporting
        period. Usually an overview is given of actions, tasks, goals and
        results. You can also explain what next steps can be and what is
        expected of all the stakeholders.{" "}
      </div>
    </div>
  );
}

export default Summary;
