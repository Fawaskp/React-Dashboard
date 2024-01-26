import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios";
import Pagination from "@mui/material/Pagination";

export default function CustomizedTables() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const fetchTableData = () => {
    axiosInstance
      .get("/api/table")
      .then((response) => {
        setError(null);
        setTableData(response.data);
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
    fetchTableData();
  }, []);

  return (
    <div className="min-w-[20rem] w-full md:flex-grow overflow-x-auto pb-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 shadow-md overflow-hidden rounded-lg">
        <thead className="text-xs md:text-base font-poppins text-gray-900 dark:bg-gray-900 dark:text-white bg-gray-50">
          <tr>
            <th
              scope="col"
              className="ps-5 pe-3 py-2 md:py-5 border-r dark:border-black border-gray-300"
            >
              Id
            </th>
            <th
              scope="col"
              className="ps-5 py-2 md:py-5 border-r dark:border-black border-gray-300"
            >
              Name
            </th>
            <th
              scope="col"
              className="ps-5 py-2 md:py-5 border-r dark:border-black border-gray-300"
            >
              Quantity
            </th>
            <th scope="col" className="ps-5 py-2 dark:border-black md:py-5">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="last-of-type:border-none" >
          {tableData.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center py-16 font-medium dark:bg-gray-800 bg-white"
              >
                <div className="flex justify-center items-center w-full p-5">
                  {error ? (
                    <div className="text-red-500">
                      <h1 className="text-sm font-extrabold">{error}</h1>
                      <p
                        onClick={fetchTableData}
                        className="text-center dark:text-white text-black text-xs cursor-pointer hover:underline"
                      >
                        Try again
                      </p>
                    </div>
                  ) : (
                    <h1 className="font-extrabold">No Data to Show</h1>
                  )}
                </div>
              </td>
            </tr>
          ) : (
            tableData.map((row) => (
              <tr
                key={row.name}
                className={`${
                  row.id % 2 === 0
                    ? "dark:bg-gray-900 dark:text-white bg-white"
                    : "dark:bg-gray-800 dark:text-white bg-gray-100"
                } border-y dark:border-black border-gray-300`}
              >
                <td className="ps-5 py-3 font-medium border-r dark:border-black border-gray-300">
                  {row.id}
                </td>
                <td className="ps-5 py-3 font-medium border-r dark:border-black border-gray-300">
                  {row.name}
                </td>
                <td className="ps-5 py-3 font-medium border-r dark:border-black border-gray-300">
                  {row.quantity}
                </td>
                <td className="ps-5 py-3 font-medium">{row.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination
          sx={{
            "& button": {
              backgroundColor: "white",
            },
            "& .Mui-selected": {
              backgroundColor: "#fff",
              border: "2px solid black",
            },
            "& .Mui-selected:hover": {
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
