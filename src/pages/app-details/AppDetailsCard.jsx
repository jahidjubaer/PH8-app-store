import React, { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { AddAppsDB } from "../../utilities/InstalledCard";
import { toast } from "react-toastify";

const AppDetailsCard = ({ appData }) => {
  const StoreApps = localStorage.getItem("installedCard");
  // console.log(StoreApps);

  // distructering the data ;
  const { id, title, companyName, reviews, size, downloads, ratings, image } =
    appData;

  // install context : comment it bz use local storage ;
  // const { installedApps, setInstalledApps } = useContext(InstallContext);

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

  // state for install button
  const [isInstalled, setIsInstalled] = useState(false);

  // cheek if the id has in local storage ;
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedCard")) || [];
    if (storedApps.includes(id)) {
      setIsInstalled(true);
    }
  }, [id]);

  // Handle install button
  const handleInstall = (id) => {
    const storedApps = JSON.parse(localStorage.getItem("installedCard")) || [];

    if (isInstalled) return;

    if (!storedApps.includes(id)) {
      AddAppsDB(id);
      toast.success(`${title} installed successfully!`);
      setIsInstalled(true);
    }
  };

  return (
    <div className="lg:flex gap-10">
      <div className="sm:w-[350px] w-[250px]  sm:h-[350px] h-[250px] bg-gray-100">
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
          onClick={() => handleInstall(id)}
          className={`  ${
            isInstalled && "disabled "
          } btn bg-[#00D390] border-none text-white mt-5`}
        >
          {isInstalled ? "Installed" : `Installed Now ( ${size} MB )`}
        </button>
      </div>
    </div>
  );
};

export default AppDetailsCard;
