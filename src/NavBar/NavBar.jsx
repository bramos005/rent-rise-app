import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const location = useLocation();
  useEffect(() => {
    Aos.init()
  },[toggle])
  const getStatus  = (path) => {
    return location.pathname === path ? " text-3xl text-[#245EE7]" : "text-black opacity-90 text-2xl" ;
  };

  const handleClick = () => {
    setToggle(!toggle);
    
  }
  return (
    <div className="items-center">
      <div className="flex items-center justify-between pt-8 pl-8 pr-8 flex-wrap">
        <Logo />
        <ul className=" hidden md:flex gap-6 mt-6 mr-8">
          <Link to="/">
            <li className={` ${getStatus("/")}   cursor-pointer transition-all duration-700 ease-in-out hover:text-3xl hover:text-[#245EE7] hover:opacity-100 `}>
              Home
            </li>
          </Link>
          <Link to="/map">
            <li className={` ${getStatus("/map")} cursor-pointer transition-all duration-700 ease-in-out hover:text-3xl hover:text-[#245EE7] hover:opacity-100`}>
              Map
            </li>
          </Link>
          
        </ul>
        <div onClick={handleClick} className=" flex  flex-col gap-2 p-0 m-0 self-center md:hidden ">
          <span className="border border-black w-10 inline-block"></span>
          <span className="border border-black w-10  inline-block"></span>
          <span className="border border-black w-10  inline-block"></span>
        </div>
        <div data-aos="fade-left" className={`${toggle? "": "hidden"} fixed right-0 flex border p-5 w-3/4 bottom-0 h-full  bg-white z-30`}>
        <ul className=" flex flex-col gap-6 mt-6 mr-8">
          <Link to="/">
            <li className={` ${getStatus("/")}   cursor-pointer transition-all duration-700 ease-in-out hover:text-3xl hover:text-[#245EE7] hover:opacity-100 `}>
              Home
            </li>
          </Link>
          <Link to="/map">
            <li className={` ${getStatus("/map")} cursor-pointer transition-all duration-700 ease-in-out hover:text-3xl hover:text-[#245EE7] hover:opacity-100`}>
              Map
            </li>
          </Link>
          
          </ul>
          <div onClick={handleClick} className="  absolute top-12 right-10 flex z-40 flex-col gap-2 p-0 m-0 self-center md:hidden ">
          <span className="border border-black w-10 inline-block"></span>
          <span className="border border-black w-10  inline-block"></span>
          <span className="border border-black w-10  inline-block"></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
