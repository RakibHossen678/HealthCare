import Slider from "./Slider";


const Testimonial = () => {
  return (
    <div className="my-20">
      <div>
        <button className="border-2 border-[#020043] text-[#020043] px-5 py-1 mb-3 rounded-full">
          Testimonial
        </button>
        <h1 className="text-3xl font-semibold text-[#020043] mt-2">What they say about us</h1>
      </div>
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Testimonial;
