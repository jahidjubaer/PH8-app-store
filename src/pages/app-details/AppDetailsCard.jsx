import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
const AppDetailsCard = () => {
  return (
    <div className="flex gap-10">
      <div className="w-[350px] h-[350px] bg-amber-300">
        <img src="" alt="" />
      </div>

      <div>
        <div>
          {/* header */}
          <h1 className=" text-[#001931] text-3xl font-bold mb-2 ">
            SmPlan:ToDo List with Reminder
          </h1>
          <p className=" text-[#001931] text-xl font-semibold mb-2">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">
              productive.io
            </span>{" "}
          </p>
          <div className="divider"></div>
        </div>

        {/* download review and rating  */}
        <div className="flex my-8 gap-8">
          <div className=" space-y-2 ">
            <img src={downloadImg} alt="" />

            <p className="text-[#001931]">Downloads</p>
            <h1 className=" text-4xl  text-[#001931] font-semibold ">8M</h1>
          </div>
          <div className=" space-y-2 ">
            <img src={ratingImg} alt="" />

            <p className="text-[#001931]">Average Ratings</p>
            <h1 className=" text-4xl text-[#001931] font-semibold ">4.9</h1>
          </div>
          <div className=" space-y-2 ">
            <img src={reviewImg} alt="" />

            <p className="text-[#001931]">Downloads</p>
            <h1 className=" text-4xl text-[#001931] font-semibold ">54K</h1>
          </div>
        </div>
        <button className="btn bg-[#00D390] border-none text-white mt-5">
          Install Now (291 MB)
        </button>
      </div>
    </div>
  );
};

export default AppDetailsCard;
