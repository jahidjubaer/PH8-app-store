import React, { useEffect, useState } from "react";

import { IoCaretDown } from "react-icons/io5";
import { InstallContext } from "../roots/Root";
import InstalledApps from "./InstalledApps";
import { useLoaderData } from "react-router";
import { getAppsStr } from "../../utilities/InstalledCard";

const Installation = () => {
  const allAppsData = useLoaderData(); 
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  // Load installed apps from localStorage
  useEffect(() => {
    const storedApps = getAppsStr() || [];

    // convert id into number ;
    const convertedIntData = storedApps.map((id) => parseInt(id));

    // Filter apps that match stored IDs
    const myAppsList = allAppsData.filter((app) =>
      convertedIntData.includes(app.id)
    );

    // Set the filtered list 
    setInstalledApps(myAppsList);
  }, [allAppsData]);

  return (
    <div className="bg-gray-100 py-20  min-h-[76vh]">
      <div className="w-11/12 lg:w-10/12 mx-auto ">
        {/* header */}
        <div className="text-center">
          <h1 className="text-[#001931] text-5xl font-medium mb-4">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-xl ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* total cnt and search  */}
        <div className="flex justify-between mt-10 mb-4">
          <h1 className="text-xl font-medium ">Apps Found</h1>
          <details className="dropdown">
            <summary className="btn m-1 text-[#627382]">
              Sort By Size <IoCaretDown />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <button onClick={() => setSortOrder("High-Low")}>
                  High-Low
                </button>
              </li>
              <li>
                <button onClick={() => setSortOrder("Low-High")}>
                  Low-High
                </button>
              </li>
            </ul>
          </details>
        </div>
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No apps installed yet.
          </p>
        ) : (
          <InstalledApps installedApps={installedApps} setInstalledApps={setInstalledApps} sortOrder={sortOrder} />
        )}
      </div>
    </div>
  );
};

export default Installation;
