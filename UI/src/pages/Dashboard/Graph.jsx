import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Chart,
} from "chart.js";
import { axiosInstance } from "../../utils/axios";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

function Graph() {
  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);

  const allMonthLabel = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const fetchGraphData = () => {
    axiosInstance
      .get("/api/graph")
      .then((response) => {
        setXAxisData(response.data.map((data) => data.y));
        setYAxisData(response.data.map((data) => data.x));
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchGraphData();
  }, []);

  const data = {
    labels: yAxisData.length >= 12 ? allMonthLabel : yAxisData,
    datasets: [
      {
        label: "Dashboard Graph",
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "lightblue",
        borderWidth: 3,
        data: xAxisData,
      },
    ],
  };

  return (
    <div className="py-3 w-[40rem]">
      <Line
        className="bg-white p-6 rounded-lg shadow-md h-full"
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              grace: 5,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
