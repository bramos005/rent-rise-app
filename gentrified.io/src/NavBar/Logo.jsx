import "./navbar.css";
import logoPic from "./logo.png";
const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={logoPic} alt="logo" />
      <p className="logo-text">Rent Rise</p>
    </div>
  );
};

export default Logo;
