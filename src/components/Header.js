import { LOGO_URL } from "../../constant";

const Heading = () => {
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
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
