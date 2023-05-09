import React from "react";
import { Link } from "react-scroll";

const NavbarItem = ({ value, clickHandlerToFalse }) => {
  return (
    <li
      key={value}
      className="sm:bg-transparent bg-[#41644A] w-full text-center p-4 text-white cursor-pointer
     
      "
    >
      <Link
        className=" p-4 px-14 sm:p-1   hover:sm:bg-transparent  hover:sm:border-b-2 hover:sm:border-[#E86A33] hover:bg-[#263A29] hover:text-[#E86A33] transition"
        onClick={clickHandlerToFalse}
        to={value}
        spy={true}
        smooth={true}
        offset={-55}
        duration={500}
      >
        {value}
      </Link>
    </li>
  );
};

export default NavbarItem;
