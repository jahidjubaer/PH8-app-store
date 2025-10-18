import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TrendingApps from "../home/TrendingApps";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const allAppsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter apps based on search input
  const filteredApps = allAppsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            ({filteredApps.length}) Apps Found
          </h1>

          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="input pl-10 w-full sm:w-64"
          />
        </div>
        {/* all apps */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
          {filteredApps.length > 0 ? (
            filteredApps.map((appData) => (
              <TrendingApps key={appData.id} appData={appData} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-10">
              No apps found for "{searchTerm}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
