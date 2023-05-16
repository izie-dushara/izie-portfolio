import React from "react";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="flex min-h-fit flex-col items-center justify-start px-5 py-16 text-center">
      <h3 className="py-16 text-3xl lg:text-5xl">{title}</h3>
      <p className="mb-10 max-w-xl text-sm font-light text-gray-500 md:text-base">
        {subtitle}
      </p>
      {children}
    </section>
  );
};

export default Section;
