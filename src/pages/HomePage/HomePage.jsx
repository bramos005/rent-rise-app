import NavBar from "../../components/NavBar/NavBar";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
const HomePage = () => {
  Aos.init();

  return (
    <div class="homepage bg-white ">
      <NavBar />
      <div data-aos="fade-right">
        <div className="flex   items-center justify-around  text-center  gap-[5rem]">
          <div className="flex  items-center gap-4">
            {/* <h1 className="text-lg  font-extrabold text-black">
              Unveiling the Dynamics of Urban Evolution
            </h1> */}{" "}
            <div className="hidden md:flex flex-col mt-20 ">
              <p className=" text-lg md:w-96 font-semibold xl:text-xl ">
                Dive deep into the dynamics of New York City's rental market.
                Discover trends, analyze patterns, and stay informed with Rent
                Rise. Your comprehensive guide to understanding rent
                fluctuations in the heart of the Big Apple.
              </p>{" "}
              <Link to="/map">
                <button className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="flex relative flex-col justify-center items-center">
              <img
                className="  w-[90vw] lg:w-[40vw] xl:w-[50rem]"
                src="./hero.svg"
                alt="chart"
              />

              <div className=" flex flex-col items-center md:hidden">
                <p className=" block leading-[2.5rem] w-[70%] mt-10 font-semibold text-center self-center text-black lg:hidden ">
                  Dive deep into the dynamics of New York City's rental market.
                  Discover trends, analyze patterns, and stay informed with Rent
                  Rise. Your comprehensive guide to understanding rent
                  fluctuations in the heart of the Big Apple.
                </p>
                <Link to="/map">
                  <button className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-white justify-center items-center flex-wrap gap-[5rem] mt-[10rem] pt-[10rem] pb-[10rem] bg-[#245EE7] ">
          <div className="flex flex-col gap-4  w-[40rem]">
            <h2 className="font-extrabold text-center">
              Understanding rent rise in NYC
            </h2>
            <p className=" leading-10 text-center  font-semibold">
              Through careful analysis of extensive StreetEasy data, we've
              extracted compelling insights into rent rises in NYC. See at a
              glance where the most significant changes are happening. Our
              visualizations bring data to life, highlighting key trends and
              providing a clear picture of the city's transformation.
            </p>
          </div>
          <figure className="flex flex-col gap-7 items-center">
            <img
              src="/streeteasy-img.png"
              alt="streetEasyData"
              className="w-[40rem] h-[20rem] shadow-2xl shadow-black rounded-[2rem]"
            />
            <figcaption>*StreetEasy chart*</figcaption>
          </figure>
        </div>
      </div>
      <div className="homepage bg-white">
        <div className="flex flex-col items-center justify-center mt-40 mb-20">
          <div className="text-center mb-[5rem]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-5">
              Explore More About NYC Real Estate
            </h2>
            <p className="text-lg md:text-xl text-black mb-6 max-w-xl mx-auto">
              Dive deeper into the dynamics of New York City's real estate with
              these comprehensive resources. Stay informed and ahead in the
              market.
            </p>
            <div className="space-y-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.brickunderground.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out">
                NYC Real Estate Forecast for 2024
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.streeteasy.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out">
                StreetEasy's 2024 Housing Market Predictions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs m-5">
        <p>illustration credits: </p>
        <a className="text-blue-700" href="https://storyset.com/travel">
          Travel illustrations by Storyset
        </a>
      </div>
    </div>
  );
};

export default HomePage;
