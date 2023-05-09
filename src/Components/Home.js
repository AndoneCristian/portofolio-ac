import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Typewriter from "typewriter-effect";

import ImageFull from "../Assets/ImageFull.png";

const Home = () => {
  return (
    <main
      id="Home"
      className="h-[100vh] bg-[#F2E3DB] w-full flex sm:flex-row flex-col tracking-wide	 "
    >
      <div className="h-full w-full ">
        <article className="w-full h-full flex flex-col  justify-center   ">
          <div
            className=" w-3/4 mx-auto flex flex-col gap-3 text-xs"
            style={{ fontFamily: "Pathway Extreme" }}
          >
            <div className="flex whitespace-nowrap justify-center font-bold text-2xl sm:text-4xl py-8 px-2 bg-[#41644A] text-[#F2E3DB] rounded-full">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Hi, I'm Andone")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Your Front-End developer!")
                    .start();
                }}
              />
            </div>
            <article className="w-full sm:items-center  flex sm:mt-10 sm:flex-row flex-col ">
              <div className="mx-auto">
                <a
                  href="https://www.linkedin.com/in/cristian-andone-829347254/"
                  className="text-[#0B65C3] flex hover:scale-105  hover:text-opacity-80"
                >
                  <AiFillLinkedin size={80} />
                  <span className="flex items-center">Linkedin</span>
                </a>
              </div>
              {/* <AiFillGithub /> */}
              <div className="mx-auto">
                <a
                  href="https://github.com/AndoneCristian"
                  className="text-[#333] flex hover:scale-105 hover:text-opacity-80"
                >
                  <AiFillGithub size={80} />
                  <span className="flex items-center">Github</span>
                </a>
              </div>
              {/* <AiFillInstagram /> */}
              <div className="mx-auto">
                <a
                  href="https://www.instagram.com/andonecristi24/"
                  className=" flex hover:scale-105  hover:text-opacity-80 "
                >
                  <AiFillInstagram size={80} />
                  <span className="flex items-center">Instagram</span>
                </a>
              </div>
            </article>
          </div>
        </article>
      </div>
      <div className="h-full w-full  flex justify-center items-center overflow-hidden ">
        <div>
          <div>
            <img
              src={ImageFull}
              alt="hero"
              className="bg-[#41644A] rounded-[60%]  h-full sm:w-1/2 w-3/4 mx-auto "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
