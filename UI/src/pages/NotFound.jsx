import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found</p>
      <p className="text-gray-600 mt-8">
        Sorry, the page you are looking for might be lost in the woods.
      </p>
      <h1
        onClick={() => navigate('/')}
        className="text-blue-500 cursor-pointer hover:underline mt-4"
      >
        Go back to the home page
      </h1>
    </div>
  );
}
