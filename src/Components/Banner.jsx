import banner from "../assets/Rectangle5.png";
const Banner = () => {
  return (
    <div className="relative mt-14  overflow-hidden">
      <img
        className="lg:rounded-xl "
        src={banner}
        alt="Banner"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C19D] to-[#02004378] opacity-35 rounded-[48px]"></div>
    </div>
  );
};

export default Banner;
