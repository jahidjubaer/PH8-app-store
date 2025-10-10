import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCaretDown } from "react-icons/io5";

const Installation = () => {
  return (
    <div className="bg-gray-100 py-20 ">
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
        {/* all apps */}
        <div className="">
          <div className="flex justify-between p-6 bg-white shadow-lg items-center rounded-xl">
            {/* left side */}
            <div className="flex gap-4 items-center">
              <div className="w-[80px] h-[80px] bg-amber-400 rounded-lg">
                <img src="" alt="" />
              </div>
              <div>
                <h1 className="text-[#001931] text-xl font-semibold">
                  Forest: Focus for Productivity
                </h1>
                <div className="flex gap-4 mt-4">
                  <p className="flex gap-1 items-center text-[#00D390] font-medium">
                    <FiDownload></FiDownload> 9M
                  </p>
                  <p className="flex gap-1 items-center   text-[#FF8811] font-medium">
                    <FaStar></FaStar> 5
                  </p>
                  <p className="text-[#627382]">258 MB</p>
                </div>
              </div>
            </div>

            {/* right side */}
            <button className="btn bg-[#00D390] text-white font-semibold ">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
