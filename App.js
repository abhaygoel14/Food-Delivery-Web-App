import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/header/About";
import Contact from "./src/components/header/Contact";
import Footer from "./src/components/Footer";
import Heading from "./src/components/header/Header";
import Error from "./src/components/header/Error";
import "./style.css";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Heading />
      <Outlet />
      <Footer />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
