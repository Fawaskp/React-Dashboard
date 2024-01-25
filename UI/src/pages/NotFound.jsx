import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl md:text-6xl font-bold text-gray-800 md:mb-4">
        404
      </h1>
      <p className="text-lg text-gray-600 mb-8">Page not found</p>
      <p className="text-sm md:text-base text-gray-600 md:mt-8 text-center px-2">
        Sorry, the page you are looking for might be lost in the woods.
      </p>
      <h1
        onClick={() => navigate("dashboard")}
        className=" text-sm md:text-base text-blue-500 cursor-pointer hover:underline mt-4"
      >
        Go back to dashboard
      </h1>
    </div>
  );
}
