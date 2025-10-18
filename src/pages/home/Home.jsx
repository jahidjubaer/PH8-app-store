import React from "react";
import Banner from "../../components/banner/Banner";
import TrendingApps from "./TrendingApps";
import { useLoaderData } from "react-router";
import AppDetails from "../app-details/AppDetails";
import { Link } from "react-router";

const Home = () => {
  const TrendingAppsData = useLoaderData();
  // console.log(TrendingAppsData);

  return (
    <div className="bg-gray-100 ">
      <Banner></Banner>

      {/* Trending Apps */}
      <div className="w-11/12 lg:w-10/12 mx-auto text-center mt-20 pb-10">
        <h1 className="text-5xl mb-4 font-bold ">Trending Apps Data</h1>
        <p className=" text-[#627382] text-xl mb-10 ">
          Explore All Trending Apps on the Market developed by us
        </p>
        {/* card container  */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
          {TrendingAppsData.map((appData) => (
            <TrendingApps key={appData.id} appData={appData}></TrendingApps>
          ))}
        </div>
        {/* show all btn  */}
        <div className="flex justify-center my-6 ">
          <Link to="/apps">
            <button className="btn py-5 px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl flex items-center gap-2">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
