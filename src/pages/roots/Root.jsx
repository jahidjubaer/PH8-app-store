/* eslint-disable react-refresh/only-export-components */
import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import { createContext, Suspense } from "react";
export const InstallContext = createContext();
import { ToastContainer } from "react-toastify";
const Roots = () => {
  return (
    <div>
      <Header />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Outlet />
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Roots;
