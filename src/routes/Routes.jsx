import { createBrowserRouter } from "react-router";
import Roots from "../pages/roots/Root";
import Home from "../pages/home/home";
import ErrorPage from "../pages/error-page/ErrorPage";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/app-details/AppDetails";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// we crete router here and export it ,
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    // error element need to call with as element not component
    errorElement: (
      <div>
        <Header></Header>
        <ErrorPage></ErrorPage>
        <Footer></Footer>
      </div>
    ),
    // this is children of root , it will show in outlet of roots
    children: [
      {
        index: true,
        path: "/",
        // load the books data in home page ;
        loader: () => fetch("/TrendingApps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/AllApps.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => fetch("/AllApps.json"),
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/AllApps.json"),
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);
