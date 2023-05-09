import React from "react";
import todoappss from "../Assets/todoappssf.png";
import calculatorappss from "../Assets/calculatorappssf.png";
import weatherappssf from "../Assets/weatherappssf.png";
import tictactoess from "../Assets/tictactoess.png";

const ProjectItem = ({ id, name, linkDemo, linkCode }) => {
  let myvariable = "";
  if (id === 1) myvariable = todoappss;
  else if (id === 2) myvariable = weatherappssf;
  else if (id === 3) myvariable = calculatorappss;
  else if (id === 4) myvariable = tictactoess;
  else {
    alert("Some error has been made");
  }
  return (
    <div className=" h-80 w-80 bg-[#41644A] border-2 border-[#263A29] rounded-2xl flex  flex-col items-center   text-white pb-1 overflow-hidden">
      <p className="text-3xl">{name}</p>
      <div className=" h-3/4 w-full hover:scale-105 hover:opacity-80 overflow-hidden">
        <img
          src={myvariable}
          alt="my imag3"
          className="w-full h-full bg-cover "
        />
      </div>
      <div className="w-full mt-1">
        <button className="w-1/2 h-8  overflow-hidden">
          <a
            href={linkDemo}
            target="_blank"
            rel="noreferrer"
            className=" bg-[#E86A33] hover:bg-[#eb7b4b]  p-2 rounded-full text-2xl"
          >
            Live demo
          </a>
        </button>
        <button className="w-1/2 h-8 overflow-hidden">
          <a
            href={linkCode}
            target="_blank"
            rel="noreferrer"
            className=" bg-[#E86A33] hover:bg-[#eb7b4b] p-2 rounded-full text-2xl "
          >
            See code
          </a>
        </button>
      </div>
    </div>
  );
};
export default ProjectItem;
