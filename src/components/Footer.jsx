import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <footer className=" flex min-h-fit flex-col items-center justify-start px-5 py-16 text-center">
      <p className=" mb-10 max-w-xl from-rose-600 to-teal-500 bg-clip-text font-light text-gray-500 hover:bg-gradient-to-r">
        &copy; {today.getFullYear()} IZZUL HAZIM
      </p>
    </footer>
  );
};

export default Footer;
