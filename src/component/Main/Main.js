import React from "react";
import { Outlet } from "react-router-dom";
import Hader from "../Hader/Hader";

const Main = () => {
  return (
    <div>
      <Hader></Hader>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
