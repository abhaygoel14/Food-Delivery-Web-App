import { useEffect, useState } from "react";
import { LOGO_URL } from "../../constant";

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
        <h1>Foodie</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
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
