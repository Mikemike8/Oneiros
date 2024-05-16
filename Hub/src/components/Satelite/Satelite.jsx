import React from "react";
import satelitImg from "../../assets/satelite2.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
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
                Codecademy
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Codecademy's "Learn JavaScript" course offers a beginner-friendly journey into the language, covering key concepts through interactive lessons, exercises, and projects. With its hands-on approach and structured curriculum, learners gain practical skills for web development, from basic JavaScript syntax to more advanced topics, empowering them to create dynamic and interactive websites and applications.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                <a href="https://www.codecademy.com/enrolled/courses/introduction-to-javascript">View All</a>
              </button>
            </div>
            <div data-aos="zoom-in">
            <iframe width="350" height="250" src="https://www.youtube.com/embed/uh4gG7LbDPQ?si=IC5SwO8dKbFdw6pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
