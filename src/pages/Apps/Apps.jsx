import React from "react";
import { useLoaderData } from "react-router";
import TrendingApps from "../home/TrendingApps";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const allAppsData = useLoaderData();
  // console.log(allAppsData);

  return (
    <div className="bg-gray-100 py-20">
      <div className="w-11/12 lg:w-10/12 mx-auto ">
        {/* header */}
        <div className="text-center">
          <h1 className="text-[#001931] text-5xl font-medium mb-4">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-xl ">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        {/* total cnt and search  */}
        <div className="flex justify-between mt-10 mb-4">
          <h1 className="text-xl font-medium ">
            ({allAppsData.length}) Apps Found
          </h1>
          <label className="input">
            <span className="text-lg ">
              <CiSearch />
            </span>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        {/* all apps */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
          {allAppsData.map((appData) => (
            <TrendingApps key={appData.id} appData={appData}></TrendingApps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
