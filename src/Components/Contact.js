import React from "react";

const Contact = () => {
  return (
    <main
      id="Contact"
      className="w-full h-[100svh] bg-[#263A29] pt-10 relative"
    >
      <p className="absolute  right-3 top-5 sm:right-12 text-white text-2xl">
        Contact Page
      </p>
      <div
        className="w-full h-full bg-[#F1E3DB] flex items-end "
        style={{ clipPath: " polygon(0 0, 100% 15%, 100% 100%, 0 100%)" }}
      >
        <div className="bg-[#F1E3DB] w-full h-[90%]  ">hey</div>
      </div>
    </main>
  );
};

export default Contact;
