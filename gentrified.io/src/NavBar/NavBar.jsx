import Logo from "./Logo";
import "./navbar.css";
import NavBarList from "./NavBarList";
const NavBar = () => {
  return (
    <div className="navbar">
      <Logo />
      <NavBarList />
    </div>
  );
};

export default NavBar;
