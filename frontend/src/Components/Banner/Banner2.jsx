import React from "react";
import BannerPng from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* text content section */}
          <div className="order-2 sm:order-1  lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                NO MORE TABS ALL OVER THE PLACE   {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                   AN EASIER LIFE JUST FOR YOU!
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
Welcome to our platform, the ultimate destination for developers! We've revolutionized the way developers access information by gathering all the popular sources from developer forums into one centralized hub. Say goodbye to endless searches across multiple platforms—we've streamlined the process to provide you with instant access to the most relevant and up-to-date content. From tutorials and code snippets to discussions and Q&A threads, our platform has it all. But we didn't stop there. We've also integrated cutting-edge chat technology powered by GPT-4 Turbo, allowing you to connect with fellow developers, collaborate on projects, and get real-time assistance whenever you need it. With our platform, you'll never feel alone on your coding journey again. Join us today and experience the future of developer communities!</p>
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
                  data-aos-delay="900"
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
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px] blur-3xl opacity-50 "></div>
          </div>

          {/* image section */}
          <div data-aos="fade-up" className="order-1 sm:order-2">
            <img src={BannerPng} alt="" className="w-full max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
