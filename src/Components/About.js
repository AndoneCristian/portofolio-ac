import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
const About = () => {
  return (
    <main
      id="About"
      className="w-full sm:h-[100svh] bg-[#263A29] relative pt-10"
    >
      <p className="absolute  right-3 top-5 sm:right-12 text-white text-2xl">
        About Page
      </p>
      <div
        className="w-full h-full bg-[#F1E3DB] flex items-end "
        style={{ clipPath: " polygon(0 0, 100% 15%, 100% 100%, 0 100%)" }}
      >
        <div className="bg-[#F1E3DB] w-full h-[90%] pt-10 pb-2   ">
          <article className="w-full h-3/4  flex flex-col  sm:flex-row  justify-start sm:justify-center   items-center gap-4 sm:gap-12 text-xs sm:text-sm">
            <div className="w-44  border-2 border-[#263A29] flex flex-col text-[#F1E3DB]">
              <div className="w-full h-12 bg-[#263A29] flex items-center justify-center">
                Front End Skills
              </div>
              <ul className="text-black text-xs sm:text-sm p-2 ">
                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  <span>HTML5</span>
                  <span className="text-[#C95536]">
                    <AiOutlineHtml5 size={30} />
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  <span>CSS3</span>
                  <span className="text-[#2E49D4]">
                    <DiCss3 size={30} />
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  <span>SASS</span>
                  <span className="text-[#C66493]">
                    <DiSass size={30} />
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  <span>TAILWIND</span>
                  <span className="text-[#17AFCE]">
                    <SiTailwindcss size={30} />
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  <span>JAVASCRIPT</span>
                  <span className="text-[#EFD91A]">
                    <DiJavascript size={30} />
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  <span>REACT</span>
                  <span className="text-[#5FD2F3]">
                    <DiReact size={30} />
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-44  border-2 border-[#263A29] text-[#F1E3DB] flex flex-col ">
              <div className="w-full h-12 bg-[#263A29] flex items-center justify-center">
                Soft Skills
              </div>
              <ul className="text-black text-sm p-2 flex flex-col gap-5">
                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  Communicative
                </li>
                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  Problem solver
                </li>
                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  Passion
                </li>
                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  Friendly
                </li>
                <li className="flex items-center justify-center gap-2 border-b-2 border-[#263A29]">
                  Team-Work
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default About;
