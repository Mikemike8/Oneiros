import React from "react";
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = ({ togglePlay }) => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                ONERIOS, A BUILT IN {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  CHAT GBT 4 SUPER TURBO AI ENGINEER!
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
               A platform  that provides all the essential resources for software development, including MDN, W3Schools, and Stack Overflow, integrated with a built-in AI tool. This combination offers an unparalleled experience for developers, allowing them to access comprehensive documentation, tutorials, and community support seamlessly. The AI tool enhances productivity by offering intelligent code suggestions, debugging assistance, and personalized learning paths, making it the ultimate environment for both novice and experienced developers.
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                 
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
