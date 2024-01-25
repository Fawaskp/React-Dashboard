import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { axiosInstance } from "../../utils/axios";

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
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchPieData();
  }, []);

  return (
    <div className="!w-full md:w-96" >
      <PieChart
        series={[
          {
            data: [...piedata],
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}

export default Pie;
