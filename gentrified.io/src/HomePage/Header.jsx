import nycStreetImg from "/Users/brandon/development/gentrification-app/gentrified.io/src/HomePage/images/nyc-street.png";
import mapPreview from "./images/map-preview.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-info">
        <h1 className="header-heading">
          Unveiling the Dynamics of Urban Evolution
        </h1>
       
        <p className="header-text">
          Dive deep into the dynamics of New York City's rental market. Discover
          trends, analyze patterns, and stay informed with Rent Rise. your
          comprehensive guide to understanding rent fluctuations in the heart of
          the Big Apple."
        </p>
      </div>
      {/* <img className="nyc-street" src={nycStreetImg} alt="nyc-street" />{" "} */}
    </div>
  );
};

export default Header;
