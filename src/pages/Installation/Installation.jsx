import React, { useContext } from "react";

import { IoCaretDown } from "react-icons/io5";
import { InstallContext } from "../roots/Root";
import InstalledApps from "./InstalledApps";

const Installation = () => {
  // data from context api ;
  const { installedApps } = useContext(InstallContext);

  const installedAppData = installedApps;
  console.log(installedAppData);

  return (
    <div className="bg-gray-100 py-20  h-[76vh]">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
        {installedAppData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No apps installed yet.
          </p>
        ) : (
          <InstalledApps />
        )}
      </div>
    </div>
  );
};

export default Installation;
