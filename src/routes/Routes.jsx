import { createBrowserRouter } from "react-router";
import Roots from "../pages/roots/Root";
import ErrorPage from "../pages/error-page/ErrorPage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/home/Home"));
const Apps = lazy(() => import("../pages/Apps/Apps"));
const Installation = lazy(() => import("../pages/Installation/Installation"));
const AppDetails = lazy(() => import("../pages/app-details/AppDetails"));

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
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/apps",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Apps />
          </Suspense>
        ),
        loader: () => fetch("/AllApps.json"),
      },
      {
        path: "/installation",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Installation />
          </Suspense>
        ),
        loader: () => fetch("/AllApps.json"),
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/AllApps.json"),
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <AppDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
