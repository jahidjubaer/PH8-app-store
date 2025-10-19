import React from "react";
import { Link } from "react-router";
import appStore from "../../assets/appstore.png";
import playSotre from "../../assets/playstore.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="">
      {/* text hero  */}
      <div className="text-center pt-20 mb-10 lg:w-10/12 w-11/12 mx-auto ">
        <h1 className="sm:text-7xl text-4xl font-bold mb-6">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-xl  ">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex justify-center gap-3 mt-10">
          <Link to="https://play.google.com/store/apps?hl=en" target="blank">
            <button className="btn font-medium text-xl p-3 flex items-center ">
              <div className=" w-7 ">
                <img src={playSotre} alt="" />
              </div>
              <span>Play Store</span>
            </button>
          </Link>
          <Link to="https://www.apple.com/app-store/" target="blank">
            <button className="btn font-medium text-xl p-3 flex items-center ">
              <div className=" w-7 ">
                <img src={appStore} alt="" />
              </div>
              <span>App Store</span>
            </button>
          </Link>
        </div>
      </div>

      {/* image hero  */}
      <div className="  flex justify-center lg:w-10/12 w-11/12 mx-auto">
        <img src={heroImg} alt="" className="text-center" />
      </div>

      {/* download section  */}
      <div className="text-center bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] p-20 text-white">
        <h1 className="font-bold text-5xl  mb-10">Trusted by Millions, Built for You</h1>
        <div className="lg:flex  lg:gap-40 justify-center">
          <div>
            <p>Total Downloads</p>
            <h1 className="text-7xl font-extrabold my-4">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="text-7xl font-extrabold my-4">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="text-7xl font-extrabold my-4">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>

    {/* Trending Apps */}

    </div>
  );
};

export default Banner;
