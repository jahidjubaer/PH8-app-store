import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const TrendingApps = ({ appData }) => {
  // disturcture data ;
  const { image, title, ratingAvg, downloads } = appData;
  return (
    // card of each apps
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="bg-[#D9D9D9] w-[350px] h-[350px] mx-auto rounded-xl">
        <img src={image} className="w-full h-full object-cover rounded-xl" />
      </div>
      <h4 className="text-left font-medium text-xl mt-2">{title}</h4>
      <div className="flex justify-between mt-4">
        <button
          className="flex gap-1 items-center rounded-sm  p-2 bg-[#F1F5E8] border-none text-[#00D390] font-medium
        "
        >
          <FiDownload /> {downloads}
        </button>
        <button
          className="flex gap-1 items-center rounded-sm  p-2 bg-[#FFF0E1] border-none text-[#FF8811] font-medium
        "
        >
          <FaStar /> {ratingAvg}
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
