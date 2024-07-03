import { GoArrowUpRight } from "react-icons/go";
import img1 from "../assets/Rectangle27-2.png";
import img2 from "../assets/Rectangle27-1.png";
import img3 from "../assets/Rectangle27.png";
const Empower = () => {
  return (
    <div className="mb-20 mt-40 p-6 lg:p-0">
      <div className=" flex flex-col lg:flex-row justify-between items-center ">
        <div className="lg:w-[48%]">
          <button className="border-2 border-[#020043] text-[#020043] px-5 py-1 mb-3 rounded-full">
            Service
          </button>
          <h1 className="text-4xl font-medium text-[#020043] leading-normal my-3">
            Empowering Health,
            <br /> Enriching Lives
          </h1>
          <p className="text-sm text-[#4D4C7B] pb-3 max-w-sm">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="bg-[#FFC637] flex items-center space-x-2 py-3 px-4 font-medium rounded-xl mt-5">
            Appointment
            <span>
              <GoArrowUpRight size={25} />
            </span>
          </button>
        </div>
        <div className="lg:w-[48%] relative mt-6 lg:mt-0">
          <div>
            <img className="rounded-3xl" src={img1} alt="" />
          </div>
          <div className="bg-[#343268d0] absolute w-[350px] text-white px-5 py-8 rounded-xl lg:bottom-6 bottom-4 left-2  lg:left-14 flex items-end">
            <div>
              <h1 className="text-lg font-medium mb-2">Advanced Technology</h1>
              <p className="text-sm">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="bg-[#FFC637] rounded-full p-2">
              <GoArrowUpRight size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10">
        <div className="lg:w-[48%] relative mt-6 lg:mt-0">
          <div>
            <img className="rounded-3xl" src={img2} alt="" />
          </div>
          <div className="bg-[#343268d0] absolute w-[350px] text-white px-5 py-8 rounded-xl lg:bottom-6 bottom-4 left-2  lg:left-14 flex items-end">
            <div>
              <h1 className="text-lg font-medium mb-2">Online Doctor Meet</h1>
              <p className="text-sm">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="bg-[#FFC637] rounded-full p-2">
              <GoArrowUpRight size={25} />
            </div>
          </div>
        </div>
        <div className="lg:w-[48%] relative mt-6 lg:mt-0">
          <div>
            <img className="rounded-3xl" src={img3} alt="" />
          </div>
          <div className="bg-[#343268d0] absolute w-[350px] text-white px-5 py-8 rounded-xl lg:bottom-6 bottom-4 left-2  lg:left-14 flex items-end">
            <div>
              <h1 className="text-lg font-medium mb-2">
                Consultancy your health
              </h1>
              <p className="text-sm">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="bg-[#FFC637] rounded-full p-2">
              <GoArrowUpRight size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
