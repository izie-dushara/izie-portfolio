import React from "react";
// Social Media Icon
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
// Import image from local file
import avatar from "../assets/avatar.png";
const Hero = () => {
  // list of social media
  const SOCIAL = [
    {
        id: 1,
        link: "mailto:izie.zahbawork@gmail.com",
        icon: <FaEnvelope />,
    },
    {
      id: 2,
      link: "https://github.com/izie-dushara",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/izzul-hazim-bin-zahba-546924228",
      icon: <FaLinkedin />,
    },
  ];

  // To hide arrow when scrolling down
  // Must use function for the this to work
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    // The .down-arrow will be available on index.css
    if (this.scrollY >= 90) {
      downArrow.classList.add("hide-down-arrow");
    } else {
      downArrow.classList.remove("hide-down-arrow");
    }
  });

  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-5 pt-0 text-center">
      <h2 className="text-5xl font-bold uppercase text-rose-600">
        Izzul Hazim bin Zahba
      </h2>
      <h3
        className="py-3 text-2xl
            "
      >
        Student of Software
      </h3>
      {/* Max Width Large is for Responsiveness */}
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-3xl ">👋</span>, welcome to my
        site. I am a Software Engineering student. I like to work on Web
        Development.
      </p>

      {/* Social Icon */}
      <div className="flex w-full justify-center gap-16 py-8 text-3xl hover:animate-pulse md:w-1/3 lg:py-16 ">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            // For security purposes
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Image and Resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="h-60 w-60 rounded-xl bg-gradient-to-b from-rose-600 object-cover object-top pt-5 hover:animate-spin md:h-72 md:w-72"
        />
        <a
          href="/dummy-resume.pdf"
          download={true}
          className="mt-10 flex items-center justify-center rounded-3xl bg-gradient-to-r from-rose-600 to-teal-500 py-2 text-white hover:animate-pulse"
        >
          Resume
        </a>
      </div>

      {/* Arrow down animation */}
      <div className="down-arrow mt-10">
        <FaArrowDown className="animate-bounce text-2xl text-gray-900 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
