import pie from "../assets/pie.png";
import certificate from "../assets/certificate.png";
import ratings from "../assets/star.png";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import coin from "../assets/coin.png";
import camera from "../assets/icons8-camera-48.png";
import comment from "../assets/icons8-comment-96.png";
const Care = () => {
  return (
    <div className="flex gap-6 mt-24 mb-20">
      <div className="h-[300px] w-[210px] bg-[#FBFBFB] rounded-xl  shadow-xl p-5">
        <h1 className="text-[#020043] font-semibold text-4xl pb-2 font-inter">
          90%
        </h1>
        <p className="text-sm pb-4">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <img className="w-32 mx-auto" src={pie} alt="" />
      </div>
      <div>
        <div>
          <h1 className="text-5xl font-semibold text-center pb-4 items-center">
            Comprehensive Care <br /> for Every Patient
          </h1>
        </div>
        <div className="flex items-end gap-5 ">
          <div className="h-[180px] shadow-lg rounded-xl p-5 w-[200px] bg-[#FFFFF5]">
            <h1 className="text-[#020043] font-semibold text-4xl font-inter pb-1">
              500+
            </h1>
            <p className="text-sm pb-1">
              Board-certified <br /> doctors
            </p>
            <div className="flex justify-end -space-x-7">
              <img className="w-16 -rotate-12 " src={certificate} alt="" />
              <img className="w-16 rotate-12" src={certificate} alt="" />
            </div>
          </div>
          <div className="h-[150px] w-[200px] bg-[#FBFBFB] shadow-lg rounded-xl p-5">
            <div className="flex items-center space-x-3">
              <h1 className="text-[#020043] font-semibold text-4xl font-inter">
                4.8
              </h1>
              <img className="w-9" src={ratings} alt="" />
            </div>
            <p className="text-sm py-2">Over 20,000 Patient</p>
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 object-cover bg-center bg-cover  rounded-full"
                src={img1}
                alt=""
              />
              <img
                className="w-8 h-8 object-cover bg-center bg-cover  rounded-full"
                src={img2}
                alt=""
              />
              <img
                className="w-8 h-8 object-cover bg-center bg-cover  rounded-full"
                src={img3}
                alt=""
              />
              <img
                className="w-8 h-8 object-cover bg-center bg-cover  rounded-full"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className="h-[180px] shadow-lg rounded-xl p-5 w-[200px] bg-[#FFFFF5]">
            <h1 className="text-[#020043] font-semibold text-4xl font-inter pb-1">
              $5000
            </h1>
            <p className="text-sm pb-1">Money spend for poor patient</p>
            <div className="flex items-center justify-end">
              <img className="w-8" src={coin} alt="" />
              <div>
                <img className="w-8 " src={coin} alt="" />
                <img className="w-8" src={coin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-[210px] bg-[#FBFBFB] rounded-xl  shadow-xl p-5">
        <h1 className="text-[#020043] font-semibold text-4xl pb-3 font-inter">
          50+
        </h1>
        <p className="text-sm pb-4">Free lession video for patient</p>
        <div className="relative">
          <img className="w-44" src={comment} alt="" />
          <img
            className="absolute bottom-14 left-16 w-16"
            src={camera}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Care;
