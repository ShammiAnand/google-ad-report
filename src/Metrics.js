import React from "react";
import "./Metrics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ads from "./assets/ads.png";

function Metrics() {
  return (
    <div className="Metrics">
      <div className="Metrics__heading"> KPIs </div>

      <div className="Metrics__KPIs">
        <div className="Metrics__KPIs__KPI">
          <div>
            <img src={ads} alt="ads" />
            <span className="Metrics__KPIs__KPI__title"> TITLE </span>
          </div>
          <div className="data">122,422</div>
          <div>
            <FontAwesomeIcon icon="fa-arrow-down" style={{ color: "red" }} />{" "}
            <span className="margin">-5.8%</span>
          </div>
        </div>
        <div className="Metrics__KPIs__KPI">
          <div>
            <img src={ads} alt="ads" />
            <span className="Metrics__KPIs__KPI__title"> TITLE </span>
          </div>
          <div className="data">122,422</div>
          <div>
            <FontAwesomeIcon icon="fa-arrow-down" style={{ color: "red" }} />{" "}
            <span className="margin">-5.8%</span>
          </div>
        </div>
        <div className="Metrics__KPIs__KPI">
          <div>
            <img src={ads} alt="ads" />
            <span className="Metrics__KPIs__KPI__title"> TITLE </span>
          </div>
          <div className="data">122,422</div>
          <div>
            <FontAwesomeIcon icon="fa-arrow-down" style={{ color: "red" }} />{" "}
            <span className="margin">-5.8%</span>
          </div>
        </div>
      </div>

      <div className="Metrics__KPIs">
        <div className="Metrics__KPIs__KPI">
          <div>
            <img src={ads} alt="ads" />
            <span className="Metrics__KPIs__KPI__title"> TITLE </span>
          </div>
          <div className="data">122,422</div>
          <div>
            <FontAwesomeIcon icon="fa-arrow-down" style={{ color: "red" }} />{" "}
            <span className="margin">-5.8%</span>
          </div>
        </div>
        <div className="Metrics__KPIs__KPI">
          <div>
            <img src={ads} alt="ads" />
            <span className="Metrics__KPIs__KPI__title"> TITLE </span>
          </div>
          <div className="data">122,422</div>
          <div>
            <FontAwesomeIcon icon="fa-arrow-down" style={{ color: "red" }} />{" "}
            <span className="margin">-5.8%</span>
          </div>
        </div>
        <div className="Metrics__KPIs__KPI">
          <div>
            <img src={ads} alt="ads" />
            <span className="Metrics__KPIs__KPI__title"> TITLE </span>
          </div>
          <div className="data">122,422</div>
          <div>
            <FontAwesomeIcon icon="fa-arrow-down" style={{ color: "red" }} />{" "}
            <span className="margin">-5.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
