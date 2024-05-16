import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";


const ServiceData = [
  {
    title: "JavaScript",
    content: `test`,
    description:
      `test`,
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "JavaScript",
    content: `test`,
    description:
    `test`,
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "JavaScript",
    content: `test`,
    description:
    `test`,
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  }
];

const HeroCard = () => {
  const [links, setLinks] = useState();

  axios.get("https://oneiros-branch.onrender.com/")
.then(res => {
  let axiosData = res.data.Links;
  let arr = [];
  console.log(axiosData);
  for(let i = 0; i < axiosData.length; i++) {
    arr.push(axiosData[i]);
  };
  setLinks(arr);
});

  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
