import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../../constant";

const Heading = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  useEffect(() => {
    getAuthentication();
  }, []);
  function getAuthentication() {
    setIsAuthenticate(true);
  }
  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <img className="logo" src={LOGO_URL} alt="logo" />
        <Link to={"/"}>
          <h1>Foodie</h1>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <button
        type="submit"
        onClick={() =>
          isAuthenticate ? setIsAuthenticate(false) : setIsAuthenticate(true)
        }
      >
        {isAuthenticate ? "Log out" : "Login"}
      </button>
    </div>
  );
};

export default Heading;
