import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvdfmmt",
        "template_r0m6m0p",
        form.current,
        "alAJD2ZK3J2_xmY7_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div className="bg-[#F1E3DB] w-full h-[90%] flex justify-center items-center  text-white">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col bg-[#333] p-5 rounded-md "
          >
            <label className="">Name</label>
            <input
              className=" border-b-2 border-[#263A29] bg-[#41644A] p-2 outline-none caret-[#333] "
              type="text"
              name="user_name"
            />
            <label>Email</label>
            <input
              className=" border-b-2 border-[#263A29] bg-[#41644A] p-2 outline-none caret-[#333] "
              type="email"
              name="user_email"
            />
            <label>Message</label>
            <textarea
              className=" border-b-2 border-[#263A29] bg-[#41644A] p-2 outline-none caret-[#333] "
              name="message"
            />
            <button
              className="w-24 h-8 bg-[#41644A] hover:bg-[#263A29] rounded-full mt-2 mx-auto  "
              type="submit"
              value="Send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
