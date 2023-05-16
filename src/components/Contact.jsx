import React from "react";
import Section from "./common/Section";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import mobile from "../assets/mobile.png";

const Contact = () => {
  const social = [
    {
      id: 1,
      link: "mailto:izie.zahbawork@gmail.com",
      icon: <FaEnvelope />,
    },

    {
      id: 2,
      link: "https://www.linkedin.com/in/izzul-hazim-bin-zahba-546924228",
      icon: <FaLinkedin />,
    },

    {
      id: 3,
      link: "https://github.com/izie-dushara",
      icon: <FaGithub />,
    },
  ];
  return (
    <Section
      title="Contact 📱"
      subtitle="These are the ways you can get in touch with me. Hope to hear from you soon ;)"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center ">
        <div>
          <img src={mobile} alt="Contact" className="h-32 w-32" />
        </div>
        <div>
          <p className="max-w-xs font-extralight md:max-w-lg ">
            I am open to talk about job opportunity. <br />
            Feel free to contact me using your preferred medium. <br />
            Or even better you can reach out to me using forms below.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl hover:animate-pulse">
          {social.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="duration-200 ease-in-out hover:scale-110 hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Contact form */}
        <div className=" flex w-full items-center justify-center p-8 text-left">
          {/* GetForm.IO */}
          <form
            action="https://getform.io/f/66d0b64e-777d-4b1d-95db-32a8b39b1589"
            method="POST"
          >
            <div className="w-full gap-4">
              <div className=" flex flex-col ">
                <label className="py-2 text-sm font-extralight capitalize">
                  name<span className=" text-rose-500">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="please enter your name"
                  required
                  className=" flex rounded-lg border-2 border-gray-400 p-3 placeholder:text-sm placeholder:font-extralight placeholder:capitalize placeholder:text-gray-600 focus:outline-none focus:valid:border-teal-500 focus:invalid:border-rose-600 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="py-2 text-sm font-extralight capitalize">
                  phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="please enter your phone number (optional)"
                  className=" flex rounded-lg border-2 border-gray-400 p-3 placeholder:text-sm placeholder:font-extralight placeholder:capitalize placeholder:text-gray-600 focus:outline-none focus:valid:border-teal-500 focus:invalid:border-rose-600 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="py-2 text-sm font-extralight capitalize ">
                  email<span className=" text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="please enter your email"
                  required
                  className=" flex rounded-lg border-2 border-gray-400 p-3 placeholder:text-sm placeholder:font-extralight placeholder:capitalize placeholder:text-gray-600 focus:outline-none focus:valid:border-teal-500 focus:invalid:border-rose-600 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="py-2 text-sm font-extralight capitalize">
                  message<span className=" text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="10"
                  placeholder="please enter your message here"
                  required
                  className=" flex resize-none rounded-lg border-2 border-gray-400 p-3 placeholder:text-sm placeholder:font-extralight placeholder:capitalize placeholder:text-gray-600 focus:outline-none focus:valid:border-teal-500 focus:invalid:border-rose-600 dark:bg-gray-900 dark:text-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button className=" my-8 cursor-pointer rounded-md bg-gradient-to-r from-rose-600 to-teal-500 px-6 py-3 uppercase tracking-wider text-white duration-200 hover:scale-105">
                  send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
