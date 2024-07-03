import { Swiper, SwiperSlide } from "swiper/react";
import ratings from "../assets/star.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
const Slider = () => {
  return (
    <div className="mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[300px]">
          <div className="container flex flex-col  lg:max-w-lg p-6 mx-auto  lg:w-96  shadow-lg bg-[#FFFFF5] rounded-lg">
            <h1 className="text-lg font-medium pb-3 text-[#020043]">
              Expertise and Compassion <br /> Combined
            </h1>
            <p className="text-sm pb-3 text-[#4D4C7B]">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 object-cover bg-center bg-cover  rounded-full"
                src={img1}
                alt=""
              />
              <div>
                <h1>
                  <p className="text-sm text-[#020043]">
                    <span className="font-medium">Sarah D, </span>
                    <span>IT Professional</span>
                  </p>
                </h1>
                <div className="flex">
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <div className="container flex flex-col  lg:max-w-lg p-6 mx-auto  lg:w-96 shadow-lg bg-[#FFFFF5] rounded-lg">
            <h1 className="text-lg font-medium pb-3 text-[#020043]">
              Life-Saving Care, Life-Changing Experience
            </h1>
            <p className="text-sm pb-3 text-[#4D4C7B]">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 object-cover bg-center bg-cover  rounded-full"
                src={img2}
                alt=""
              />
              <div>
                <h1>
                  <p className="text-sm text-[#020043]">
                    <span className="font-medium">Michael R,</span>
                    <span> Business Executive</span>
                  </p>
                </h1>
                <div className="flex">
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <div className="container flex flex-col  lg:max-w-lg p-6 mx-auto  lg:w-96 shadow-lg bg-[#FFFFF5] rounded-lg">
            <h1 className="text-lg font-medium pb-3 text-[#020043]">
              A Partner in Health and <br /> Wellness
            </h1>
            <p className="text-sm pb-3 text-[#4D4C7B]">
            As a busy professional, I appreciate the convenience and quality of care I receive at Doc+. From telemedicine consultations to routine check-ups, 
            </p>
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 object-cover bg-center bg-cover  rounded-full"
                src={img3}
                alt=""
              />
              <div>
                <h1>
                  <p className="text-sm text-[#020043]">
                    <span className="font-medium">David S, </span>
                    <span>Lawyer</span>
                  </p>
                </h1>
                <div className="flex">
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <div className="container flex flex-col  max-w-lg p-6 lg:mx-auto  lg:w-96 shadow-lg bg-[#FFFFF5] rounded-lg">
            <h1 className="text-lg font-medium pb-3 text-[#020043]">
              Expertise and Compassion <br /> Combined
            </h1>
            <p className="text-sm pb-3 text-[#4D4C7B]">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 object-cover bg-center bg-cover  rounded-full"
                src={img4}
                alt=""
              />
              <div>
                <h1>
                  <p className="text-sm text-[#020043]">
                    <span className="font-medium">Sarah D, </span>
                    <span>IT Professional</span>
                  </p>
                </h1>
                <div className="flex">
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                  <img className="w-6 h-6" src={ratings} alt="rating" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
