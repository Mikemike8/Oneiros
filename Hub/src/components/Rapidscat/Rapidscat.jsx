{/* <img
  src={sateliteImg}
  alt=""
  className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
/> */}
import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
            <iframe width="315" height="315" src="https://www.youtube.com/embed/LfaMVlDaQ24?si=mVE1EM5muoTapoc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" allowfullscreen></iframe>
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                CS50
              </h1>     
              <p data-aos="fade-up" data-aos-delay="700">
              CS50, an introductory computer science course by Harvard University led by Professor David J. Malan, covers a broad range of topics, including programming languages (like C, Python, and SQL), algorithms, data structures, and web development. The engaging lectures feature live coding examples, clear explanations, and interactive demonstrations, often with guest speakers discussing real-world applications. These videos offer a comprehensive introduction to computer science concepts and programming skills, making them a valuable resource for self-paced learning.              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science">View all</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
