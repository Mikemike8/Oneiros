import React, { useEffect } from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";

const HeroCard = () => {
  const [links, setLinks] = useState([]);
  useEffect(()=>{
    axios.get("https://oneiros-branch.onrender.com/")
    .then(res => {
      console.log("res", res)
      let axiosData = res.data;
      setLinks(axiosData);
    });
  }, [])

const ServiceData = links.map((data, index)=>{
  return   {
    title: data.title,
    description: data.link,
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  }
})

  

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
                      <a className="text-sm" href={data.description}>{data.title}</a>
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
