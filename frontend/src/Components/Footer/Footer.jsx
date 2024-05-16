import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "Vo",
    link: "https://www.linkedin.com/in/stevenhfreeman/",
  },
  {
    id: 3,
    title: "Michael",
    link: "https://www.linkedin.com/in/michael-harris-348835266/",
  },
  {
    id: 4,
    title: "Caleb",
    link: "https://www.linkedin.com/in/calebcunninghamdev/",
  },
  {
    id: 5,
    title: "JR",
    link: "https://www.linkedin.com/in/johnrucker2ndsoftwareengineer/",
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                About Us
              </h1>
              <p className="text-sm">
              We are a passionate team of five individuals with a shared love for coding and a vision to make learning resources more accessible. Our journey began with the realization that finding quality coding materials and resources can be challenging, especially for beginners.

Driven by our collective passion for coding and education, we decided to do something about it. Drawing from our diverse backgrounds in software development, design, and education, we came together to create *Oneiros* , a platform dedicated to providing easy access to coding resources and materials.

Our mission is simple: to make learning to code easier, more enjoyable, and accessible to everyone. Whether you're just starting your coding journey or looking to expand your skills, we're here to help you every step of the way.

Thank you for joining us on this exciting adventure!
              </p>
              <br />

              {/* contact section */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Memphis, TN USA</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+1 800 123-4567</p>
                </div>
              </div>

              {/* social handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* Footer Links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">LinkedIn's</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      
                      </li>
                    ))}
                     
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">GitHubs</h1>
                  <ul className="space-y-3">

                    {/* updates to github team */}
                     <a
                          href="https://github.com/VoFromDaM"
                          className="cursor-pointer hover:text-primary"
                        >
                          Vo
                        </a><br></br>
                        <a
                          href="https://github.com/Mikemike8"
                          className="cursor-pointer hover:text-primary"
                        >
                           Michael
                        </a><br></br>
                        <a
                          href="https://github.com/Calebssu"
                          className="cursor-pointer hover:text-primary"
                        >
                          Caleb
                        </a><br></br>
                        <a
                          href="https://github.com/JOHNRUCKER51"
                          className="cursor-pointer hover:text-primary"
                        >
                          JR
                          </a><br></br>
                          <a
                          href="https://github.com/mccantsryan"
                          className="cursor-pointer hover:text-primary"
                        >Ryan </a>
                          
                        
                        
                    
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Locations</h1>
                    {/* updates to github team */}
                    <a
                          href="https://www.google.com/maps/place/Memphis,+TN/@35.1290744,-90.1219215,11z/data=!3m1!4b1!4m6!3m5!1s0x87d57e1eea439745:0xd193f315601ab6fe!8m2!3d35.1495343!4d-90.0489801!16zL20vMGNfbTM?entry=ttu"
                          className="cursor-pointer hover:text-primary"
                        >
                          Vo
                        </a><br></br>
                        <a
                          href="https://www.google.com/maps/place/Memphis,+TN/@35.1290744,-90.1219215,11z/data=!3m1!4b1!4m6!3m5!1s0x87d57e1eea439745:0xd193f315601ab6fe!8m2!3d35.1495343!4d-90.0489801!16zL20vMGNfbTM?entry=ttu"
                          className="cursor-pointer hover:text-primary"
                        >
                           Michael
                        </a><br></br>
                        <a
                          href="https://www.google.com/maps/place/Memphis,+TN/@35.1290744,-90.1219215,11z/data=!3m1!4b1!4m6!3m5!1s0x87d57e1eea439745:0xd193f315601ab6fe!8m2!3d35.1495343!4d-90.0489801!16zL20vMGNfbTM?entry=ttu"
                          className="cursor-pointer hover:text-primary"
                        >
                          Caleb
                        </a><br></br>
                        <a
                          href="https://www.google.com/maps/place/Memphis,+TN/@35.1290744,-90.1219215,11z/data=!3m1!4b1!4m6!3m5!1s0x87d57e1eea439745:0xd193f315601ab6fe!8m2!3d35.1495343!4d-90.0489801!16zL20vMGNfbTM?entry=ttu"
                          className="cursor-pointer hover:text-primary"
                        >
                          JR
                        </a>
                        
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;