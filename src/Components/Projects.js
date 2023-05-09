import React from "react";
import ProjectItem from "./ProjectItem";

export const projectsInfo = [
  {
    //todo
    id: 1,
    name: "To do list",
    linkDemo: "https://illustrious-parfait-cd47f5.netlify.app",
    linkCode: "https://github.com/AndoneCristian/todoapp",
  },
  {
    //weather
    id: 2,
    name: "Weather app",
    linkDemo: "https://magenta-halva-65bdee.netlify.app/",
    linkCode: "https://github.com/AndoneCristian/wheaterapp",
  },
  {
    //calculator
    id: 3,
    name: "calculator app",
    linkDemo: "https://melodious-faloodeh-037c36.netlify.app/",
    linkCode: "https://github.com/AndoneCristian/calculator-app",
  },
  {
    //tictactoe
    id: 4,
    name: "tic tac toe",
    linkDemo: "https://helpful-conkies-594b5c.netlify.app",
    linkCode: "https://github.com/AndoneCristian/tic-tac-toe",
  },
];

const Projects = () => {
  return (
    <main id="Projects" className="w-full h-auto bg-[#263A29] pt-10 relative">
      <p className="absolute  right-3 top-5 sm:right-12 text-white text-2xl">
        Projects Page
      </p>
      <div
        className="w-full h-full bg-[#F1E3DB] flex items-end "
        style={{ clipPath: " polygon(0 0, 100% 15%, 100% 100%, 0 100%)" }}
      >
        <div className="bg-[#F1E3DB] w-full mt-20 mb-2 flex flex-col flex-wrap sm:flex-row justify-center items-center gap-2">
          {projectsInfo.map(({ id, name, linkDemo, linkCode }) => {
            return (
              <ProjectItem
                key={id}
                name={name}
                id={id}
                linkDemo={linkDemo}
                linkCode={linkCode}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
