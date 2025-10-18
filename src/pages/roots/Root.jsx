import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import { createContext, useState } from "react";
export const InstallContext = createContext();

const Roots = () => {
  const [installedApps, setInstalledApps] = useState([]);

  return (
    <InstallContext.Provider value={{ installedApps, setInstalledApps }}>
      <Header />
      <Outlet />
      <Footer />
    </InstallContext.Provider>
  );
};

export default Roots;
