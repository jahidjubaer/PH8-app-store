import React from "react";
import errorImg from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
// useNavigate hook ; 
  const navigate = useNavigate();
  return (
    // just simple error page design 
    <div className="lg:w-10/12 w-11/12 mx-auto text-center py-18 space-y-4 ">
      <img src={errorImg} className=" mx-auto" />
      <h1 className="text-5xl font-semibold text-[#001931] ">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-xl text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <button
    //   when click in go bac btn then it will back into last page ; 
        onClick={() => navigate(-1)}
        className="btn py-5 mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl flex items-center gap-2"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
