import { GoArrowUpRight } from "react-icons/go";
import img1 from "../assets/Rectangle24.png";
const Mission = () => {
  return (
    <div className="my-20 flex flex-col lg:flex-row justify-between items-center p-6 lg:p-0">
      <div className="lg:w-[48%]">
        <button className="border-2 border-[#020043] text-[#020043] px-5 py-1 mb-3 rounded-full">
          Who we are
        </button>
        <h1 className="text-4xl font-medium text-[#020043] leading-normal my-3">
          We Help To Get <br />
          Solutions
        </h1>
        <p className="text-sm text-[#4D4C7B] pb-3">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="bg-[#FFC637] flex items-center space-x-2 py-3 px-4 font-medium rounded-xl">
          Learn more{" "}
          <span>
            <GoArrowUpRight size={25} />
          </span>
        </button>
      </div>
      <div className="lg:w-[48%] relative mt-6 lg:mt-0">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="bg-[#343268] absolute w-[350px] text-white px-5 py-8 rounded-xl lg:-bottom-12 -bottom-12 -left-5 lg:-left-16">
          <h1 className="text-lg font-medium mb-2">Our mission is simple</h1>
          <p className="text-sm">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
