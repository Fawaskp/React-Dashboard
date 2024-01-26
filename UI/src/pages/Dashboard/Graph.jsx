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
import useDarkTheme from "../../utils/useDarkTheme";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

function Graph() {
  const [xAxisData, setXAxisData] = useState([]);
  const [error, setError] = useState(null);
  const [colorTheme, setTheme] = useDarkTheme();

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

  const fillupTwelve = (data) => {
    const limit = 12 - data.length;
    if (data.length < 12) {
      for (let i = 1; i <= limit; i++) {
        data.push(0);
      }
    }
    return data;
  };

  const fetchGraphData = () => {
    axiosInstance
      .get("/api/graph")
      .then((response) => {
        setError(null);
        let xAxisValues = response.data.map((data) => data.y);
        const filledupData = fillupTwelve(xAxisValues);
        setXAxisData(filledupData);
      })
      .catch((err) => {
        console.log("Err-> ", err);
        if (err.message) {
          setError(err.message);
        } else {
          setError("Something went wrong!");
        }
      });
  };

  useEffect(() => {
    fetchGraphData();
  }, []);

  const data = {
    labels: allMonthLabel,
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
    <div className="relative md:ms-2 sm:ms-0 py-3 w-full sm:max-w-[20rem] md:max-w-[45rem] md:h-[30rem] flex-grow justify-center">
      {xAxisData.length < 1 && (
        <div className="absolute flex justify-center items-center w-full h-[10.5rem] sm:h-[28.5rem] top-1/2 transform -translate-y-1/2 dark:bg-gray-700 dark:bg-opacity-90 bg-gray-200 bg-opacity-60  dark:border-gray-500 border rounded-lg">
          {error ? (
            <div className="text-red-500">
              <h1 className="text-sm font-extrabold">{error}</h1>
              <p
                onClick={fetchGraphData}
                className="text-center dark:text-white text-black text-xs cursor-pointer hover:underline"
              >
                Try again
              </p>
            </div>
          ) : (
            <h1 className="font-extrabold">No Data to Show</h1>
          )}
        </div>
      )}
      <Line
        className="dark:bg-gray-800 bg-white p-2 sm:p-6 rounded-lg shadow-md h-full"
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              grid: {
                color: "lightgray",
              },
              ticks: {
                color: "lightgray",
                font: {
                  weight: 700,
                },
              },
            },
            y: {
              beginAtZero: true,
              grace: 6,
              max: 20,
              ticks: {
                color: "lightgray",
                font: {
                  size: 12,
                  weight: 700,
                },
              },
              grid: {
                color: "lightgray",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
