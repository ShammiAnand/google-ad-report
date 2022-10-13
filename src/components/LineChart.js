import React from "react";
import "../styles/LineChart.css";
import ads from "../assets/ads.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
// import faker from "faker";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(149 228 172)",
      backgroundColor: "rgb(149 228 172)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(117 141 240)",
      backgroundColor: "rgb(117 141 240)",
    },
  ],
};

function LineChart() {
  return (
    <div className="LineChart">
      <div className="LineChart__heading__container">
        <img src={ads} alt="ads" />{" "}
        <div className="Tables__heading">Some Line Chart</div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
