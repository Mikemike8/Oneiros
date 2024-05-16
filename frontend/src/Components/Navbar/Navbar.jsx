import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import LoginButton from "../../../Authzero/Login";
import LogoutButton from "../../../Authzero/Logout";
import Profile from "../../../Authzero/Profile";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "https://oneiros-uq26.onrender.com/",
  },
  {
    id: 2,
    name: "Onerios",
    link: "https://youai.ai/ais/04f072b5-d4b3-4fea-9b6c-ffb4b87b73d1/use",
  },
  {
    id: 3,
    name: "HUB",
    link: "https://the-hub-yzqt.onrender.com/",
  },
  {
    id: 4,
    name: "Creators",
    link: "#",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-16" />
            <p className="text-3xl">
              CODE{" "}
              <span className="font-bold text-yellow-200 hover:text-yellow-300 hover:shadow-md">
                HUB
              </span>
            </p>
          </div>

          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
             
              {/* Darkmode feature */}
              <input
                type="text"
                style={{
                  backgroundColor:"#555"
                }}
              />
               <LoginButton></LoginButton>
              <LogoutButton></LogoutButton>
              <Profile></Profile>
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
