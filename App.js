import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Heading from "./src/components/Header";
import "./style.css";
/**
 *
 * Header
 *  - Logo
 *  -Nav List(Item) - Home About Contact Sign in
 * -Body
 *  -Carousel
 *   -cards->
 *      0. Image
 *      1. Name
 *      2. Cuisines
 *      3. Location
 * Footer
 */
//CoNFIG DRIVEN UI
const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
