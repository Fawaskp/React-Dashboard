import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomizedTables() {
  const [tableData, setTableData] = useState([]);

  const fetchTableData = () => {
    axiosInstance
      .get("/api/table")
      .then((response) => {
        setTableData(response.data);
        console.log(response.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="w-3/5 relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 shadow-md sm:rounded-lg overflow-hidden">
        <thead className="font-extrabold text-gray-900 bg-gray-50 ">
          <tr>
            <th
              scope="col"
              className="ps-5 pe-12 py-5 border-r border-gray-300"
            >
              Id
            </th>
            <th
              scope="col"
              className="ps-5 pe-12 py-5 border-r border-gray-300"
            >
              Name
            </th>
            <th
              scope="col"
              className="ps-5 pe-12 py-5 border-r border-gray-300"
            >
              Quantity
            </th>
            <th scope="col" className="ps-5 pe-12 py-5">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr className={`${row.id % 2 == 0 ? "bg-white" : "bg-gray-100"}`}>
              <td className="ps-5 pe-32 py-3 border-r border-y border-gray-300">
                {row.id}
              </td>
              <td className="ps-5 pe-32 py-3 border-r border-y border-gray-300">
                {row.name}
              </td>
              <td className="ps-5 pe-32 py-3 border-r border-y border-gray-300">
                {row.quantity}
              </td>
              <td className="ps-5 pe-32 py-3 border-y border-gray-300">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4" >
        <Pagination
          sx={{
            "& button": {
              backgroundColor: "white",
            },
            "& .Mui-selected": {
              backgroundColor: "white",
              border: "2px solid black",
            },
            "& button:hover": {
              backgroundColor: "lightgray",
            },
          }}
          count={10}
          size="small"
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
