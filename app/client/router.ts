import { createBrowserRouter } from "react-router";
import BaseLayout from "./layouts/base/BaseLayout";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";

export default createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/about", Component: AboutPage },
    ],
  },
]);
