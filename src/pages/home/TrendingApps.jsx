import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";

const TrendingApps = ({ appData }) => {
  // disturcture data ;
  const { id, image, title, ratingAvg, downloads } = appData;
  // console.log(id);

  return (
    // card of each apps
    <Link to={`/appDetails/${id}`}>
      <div className="p-4 bg-white shadow-lg rounded-lg  ">
        <div className="bg-[#D9D9D9] sm:w-[350px] w-[250px]  sm:h-[350px] h-[250px] mx-auto rounded-xl">
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
    </Link>
  );
};

export default TrendingApps;
