import React from "react";
import { Link } from "react-router-dom";

const Hader = () => {
  return (
    <nav className="py-5 px-10 bg-purple-500 text-white font-bold items-center flex justify-between">
      <div className="mx-5">
        <h1 className="text-gray-200">
          <span className="text-yellow-300 text-3xl">ROUTE </span> Web
        </h1>
      </div>
      <div>
        <Link
          className="mx-5 bg-pink-400 px-3 py-1 rounded hover:bg-blue-400"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="mx-5 bg-pink-400 px-3 py-1 rounded hover:bg-blue-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="mx-5 bg-pink-400 px-3 py-1 rounded hover:bg-blue-400"
          to="/product"
        >
          Product
        </Link>
      </div>
    </nav>
  );
};

export default Hader;
