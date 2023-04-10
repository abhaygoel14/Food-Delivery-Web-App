import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/header/About";
import Help from "./src/components/header/Help";
import Footer from "./src/components/Footer";
import Heading from "./src/components/header/Header";
import Error from "./src/components/header/Error";
import "./style.css";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import Cart from "./src/components/header/Cart";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Abhay Goel",
    email: "dummy@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Heading />
          <Outlet />
          {/* <Footer /> */}
        </UserContext.Provider>
      </Provider>
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
        path: "/help",
        element: <Help />,
      },
      {
        path: "/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
