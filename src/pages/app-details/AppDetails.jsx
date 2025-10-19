import React from "react";

import AppBarChart from "./AppBarChart";
import AppDetailsCard from "./AppDetailsCard";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  // get the id here click using params ;
  const { id } = useParams();
  const appId = parseInt(id);

  // data load from router
  const allAppsData = useLoaderData();

  // find the single data using id here clicked
  const appData = allAppsData.find((app) => app.id === appId);

  const { description } = appData;

  // console.log(appData);
  

  return (
    <div className="bg-gray-100 p-20">
      {/* container  */}
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* card */}
        <AppDetailsCard appData={appData}></AppDetailsCard>

        <div className="divider"></div>
      </div>

      {/* bar chart  */}
      <AppBarChart appData={appData}></AppBarChart>

      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="divider py"></div>
        <h1 className=" text-2xl mb-4 font-semibold text-[#001931] ">
          Description
        </h1>
        <p className=" text-[#627382] text-xl ">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
