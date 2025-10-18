import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { InstallContext } from "../roots/Root";
import { RemoveAppsDB } from "../../utilities/InstalledCard";
import { toast } from "react-toastify";

const InstalledApps = ({ sortOrder, installedApps, setInstalledApps }) => {
  // data from context api ;
  //   const { installedApps, setInstalledApps } = useContext(InstallContext);

  //   uninstall handle 
  const uninstall = (id) => {
     toast.warn("uninstall Successfully!");
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    RemoveAppsDB(id);
  };

  //   sorted ;
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "High-Low") return parseInt(b.size) - parseInt(a.size);
    if (sortOrder === "Low-High") return parseInt(a.size) - parseInt(b.size);
    return 0;
  });

  return (
    <div className="space-y-6">
      {sortedApps.map((app) =>  ( 
        <div key={app.id}  className="">
          <div className="flex justify-between p-6 bg-white shadow-lg items-center rounded-xl">
            {/* left side */}
            <div className="flex gap-4 items-center">
              <div className="w-[80px] h-[80px] bg-base-100 rounded-lg">
                <img
                  src={app.image}
                  className="h-full w-full object-cover rounded-lg "
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-[#001931] text-xl font-semibold">
                  {app.title}
                </h1>
                <div className="flex gap-4 mt-4">
                  <p className="flex gap-1 items-center text-[#00D390] font-medium">
                    <FiDownload></FiDownload> {app.downloads}
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
            <button
              onClick={() => uninstall(app.id)}
              className="btn bg-[#00D390] text-white font-semibold "
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstalledApps;
