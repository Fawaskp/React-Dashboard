import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { axiosInstance } from "../../utils/axios";

function Pie() {
  const [piedata, setPieData] = useState([]);
  const [error, setError] = useState(null);
  const [pieWidth] = useState(Math.max(150, window.innerWidth / 8 + 20));

  const addColorShades = (data) => {
    const generateShade = (index) => {
      const lightness = 1 - index / data.length;
      const baseColor = [103, 197, 135];
      return `rgba(${baseColor.join(",")}, ${lightness.toFixed(1)})`;
    };
    return data.map((item, index) => ({
      ...item,
      color: generateShade(index),
      id: index,
    }));
  };

  const fetchPieData = () => {
    axiosInstance
      .get("/api/pie-chart")
      .then((response) => {
        setError(null);
        setPieData(addColorShades(response.data));
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
    fetchPieData();
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-lg my-3 flex-grow shadow-md dark:bg-gray-800 bg-white ms-3 md:ms-10 me-5 flex flex-col items-center ${
        piedata.length == 0 ? "p-20" : "p-4"
      }`}
    >
      {piedata.length < 1 ? (
        <div className="absolute flex justify-center items-center w-full h-[28.5rem] top-1/2 transform -translate-y-1/2 dark:bg-gray-700 dark:bg-opacity-90 dark:border-gray-500 bg-gray-200 bg-opacity-60 p-10  border rounded-lg">
          {error ? (
            <div className="text-red-500">
              <h1 className="text-sm font-extrabold">{error}</h1>
              <p
                onClick={fetchPieData}
                className="text-center dark:text-white text-black text-xs cursor-pointer hover:underline"
              >
                Try again
              </p>
            </div>
          ) : (
            <h1 className="font-extrabold">No Data to Show</h1>
          )}
        </div>
      ) : (
        <>
          <PieChart
            sx={{ padding: "10px" }}
            slotProps={{
              legend: { hidden: true },
            }}
            series={[
              {
                data: piedata,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            height={pieWidth}
            width={pieWidth}
            margin={{ right: 0, left: 0 }}
          />
          <div className="dark:text-white w-full flex flex-col items-center md:items-start">
            {piedata.map((item, index) => {
              return (
                <div className="flex my-1.5 md:ms-10" key={"legend" + index}>
                  <div
                    className="w-3 h-3 rounded-full overflow-hidden"
                    style={{ background: item.color }}
                  />
                  <p className="font-bold mx-2 text-xs">{item.label}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Pie;
