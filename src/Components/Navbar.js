import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const NAV_ITEMS = [
  {
    key: "01",
    value: "Home",
  },
  {
    key: "02",
    value: "About",
  },
  {
    key: "03",
    value: "Projects",
  },
  {
    key: "04",
    value: "Contact",
  },
];

const Navbar = () => {
  const clickHandler = () => {
    setisOpen(!isOpen);
  };
  const clickHandlerToFalse = () => {
    setisOpen(false);
  };

  const [isOpen, setisOpen] = useState(false);
  //[#a0d2eb]
  //[#e5eaf5]
  //[#d0bdf4]
  //[#8458b3]
  //[#494d5f]
  return (
    <nav
      className={`bg-[#263A29] z-50 fixed top-0 left-0 right-0 flex flex-col sm:flex-row justify-start sm:justify-between  py-3
        ${isOpen ? "inset-0 sm: sm:top-0" : ""}

        `}
    >
      <div className="flex items-center justify-between text-2xl px-8 text-white">
        <a href="/" style={{ fontFamily: "Dancing Script" }}>
          Andone
        </a>

        <button onClick={clickHandler} className=" sm:hidden   ">
          {isOpen ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <ul
        className={`  text-md  flex sm:flex-row  items-center ${
          isOpen ? "flex-col h-full mt-8 " : "hidden sm:flex"
        }`}
      >
        {NAV_ITEMS.map(({ value }) => {
          return (
            <NavbarItem
              key={value}
              value={value}
              clickHandlerToFalse={clickHandlerToFalse}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
