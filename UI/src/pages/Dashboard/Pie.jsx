import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { axiosInstance } from "../../utils/axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Pie() {
  const [piedata, setPieData] = useState([]);

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
        setPieData(addColorShades(response.data));
        console.log(response.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchPieData();
  }, []);

  return (
    <div className="overflow-hidden rounded-xl p-4 mt-3 shadow-md bg-white mx-3 flex flex-col items-center">
      <PieChart
        sx={{ padding: "10px" }}
        slotProps={{
          legend: { hidden: true },
        }}
        series={[
          {
            data: piedata,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
        width={250}
        margin={{ right: 0, left: 0 }}
      />
      <div className="w-full flex flex-col items-center md:items-start">
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
    </div>
  );
}

export default Pie;
