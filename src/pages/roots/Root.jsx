import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";

const Roots = () => {
  return (
    <div>
      {/* call which ar strict and outlet */}
      <Header></Header>
      {/* children of all roots show here  */}
      <div className=" bg-gray-100 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
