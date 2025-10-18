import React, { useContext, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Roots from "../roots/Root";
import { InstallContext } from "../roots/Root";

const AppDetailsCard = ({ appData }) => {
  // distructering the data ;
  const { title, companyName, reviews, size, downloads, ratings, image } =
    appData;

  // install context
  const { installedApps, setInstalledApps } = useContext(InstallContext);

  // find the avg rating ;
  let totalRating = 0;
  let i = 1;
  let numberOfPeopleRated = 0;
  ratings.map((data) => {
    totalRating += data.count * i;
    i++;
    numberOfPeopleRated += data.count;
  });
  const avgRating = (totalRating / numberOfPeopleRated).toFixed(1);

  // install btn ;
  const [Install, setInstall] = useState(false);

  // handle install btn ;
  const handleInstall = () => {
    if (Install) return;
    // set installed app in context ; 
    const newInstalled = [...installedApps, appData];
    setInstalledApps(newInstalled);

    setInstall(true);
  };

  // console.log(installedApps);
  

  return (
    <div className="flex gap-10">
      <div className="w-[350px] h-[350px] bg-gray-100">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div>
        <div>
          {/* header */}
          <h1 className=" text-[#001931] text-3xl font-bold mb-2 ">{title}</h1>
          <p className=" text-[#001931] text-xl font-semibold mb-2">
            Developed by
            <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <div className="divider"></div>
        </div>

        {/* download review and rating  */}
        <div className="flex my-8 gap-8">
          <div className=" space-y-2 ">
            <img src={downloadImg} alt="" />

            <p className="text-[#001931]">Downloads </p>
            <h1 className=" text-4xl  text-[#001931] font-semibold ">
              {downloads}{" "}
            </h1>
          </div>
          <div className=" space-y-2 ">
            <img src={ratingImg} alt="" />

            <p className="text-[#001931]">Average Ratings</p>
            <h1 className=" text-4xl text-[#001931] font-semibold ">
              {avgRating}
            </h1>
          </div>
          <div className=" space-y-2 ">
            <img src={reviewImg} alt="" />

            <p className="text-[#001931]">Total Reviews</p>
            <h1 className=" text-4xl text-[#001931] font-semibold ">
              {reviews}
            </h1>
          </div>
        </div>
        {/* instal now btn  */}
        <button
          onClick={handleInstall}
          className={`  ${
            !Install && "disabled"
          } btn bg-[#00D390] border-none text-white mt-5`}
        >
          {Install ? "Installed" : `Installed Now ( ${size} MB )`}
        </button>
      </div>
    </div>
  );
};

export default AppDetailsCard;
