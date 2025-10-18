import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { InstallContext } from "../roots/Root";

const InstalledApps = () => {
  // data from context api ;
  const { installedApps,setInstalledApps } = useContext(InstallContext);
  const installedData = installedApps;

  //   uninstall
  const uninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
  };

  return (
    <div>
      {installedData.map((app) => (
        <div className="">
          <div className="flex justify-between p-6 bg-white shadow-lg items-center rounded-xl">
            {/* left side */}
            <div className="flex gap-4 items-center">
              <div className="w-[80px] h-[80px] bg-amber-400 rounded-lg">
                <img src={app.image} alt="" />
              </div>
              <div>
                <h1 className="text-[#001931] text-xl font-semibold">
                  {app.title}
                </h1>
                <div className="flex gap-4 mt-4">
                  <p className="flex gap-1 items-center text-[#00D390] font-medium">
                    <FiDownload></FiDownload> {app.download}M
                  </p>
                  <p className="flex gap-1 items-center   text-[#FF8811] font-medium">
                    <FaStar></FaStar> {app.ratings.count}
                  </p>
                  <p className="text-[#627382]">{app.size} MB</p>
                </div>
              </div>
            </div>

            {/* right side */}
            {/* uninstall btn */}
            <button onClick={() => uninstall(app.id)} className="btn bg-[#00D390] text-white font-semibold ">
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstalledApps;
