import React from "react";
import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={BannerPng} alt="" className="w-full max-w-[400px]" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                GET READY TO ENJ0Y SOME CS50 LECTURES{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  AND PODCASTS WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              Get ready to immerse yourself in a world of coding knowledge and inspiration with our curated selection of lectures and podcasts. Whether you're a seasoned developer or just starting your coding journey, our platform offers a diverse range of content to suit your interests and skill level. Tune in to engaging lectures delivered by industry experts, covering topics ranging from advanced programming techniques to emerging technologies. Dive into thought-provoking podcasts that explore the latest trends, share valuable insights, and offer practical advice for navigating the ever-evolving landscape of software development. With our platform, you'll have everything you need to stay informed, inspired, and ready to take your coding skills to the next level.

</p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
