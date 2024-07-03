import { GoArrowUpRight } from "react-icons/go";
import img1 from "../assets/Rectangle32.png";
import logo from '../assets/logolight.png'

const Advertisement = () => {
  return (
    <div className="relative my-20 mx-2 lg:mx-0 overflow-hidden">
      <img className=" rounded-3xl" src={img1} alt="img" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020043] to-[#020043] opacity-70 rounded-3xl flex flex-col justify-center lg:pl-16 pl-5 ">
        <h1 className="text-[#FFFFF5] ext-2xl lg:text-5xl font-semibold leading-normal">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
        <div className="flex space-x-5 text-black">
          <button className="bg-[#FFC637] flex items-center space-x-2 lg:py-3 px-2 py-1 lg:px-4 font-semibold rounded-xl mt-5">
            Appointment
            <span>
              <GoArrowUpRight size={25} />
            </span>
          </button>
          <button className="border-2 text-white flex items-center space-x-2 lg:py-3 px-2 py-1 lg:px-4 font-medium rounded-xl mt-5">
            Learn More
            <span>
              <GoArrowUpRight size={25} />
            </span>
          </button>
        </div>
        <div className="absolute right-8 top-7">
        <img className="w-20 lg:w-28" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
