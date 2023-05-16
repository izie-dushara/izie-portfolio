import React from "react";
import Section from "./common/Section";

// Import images
import commerce from "../assets/commerce.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: commerce,
      title: "E-Commerce Website",
    },

    {
      id: 2,
      image: web,
      title: "Web Development",
    },

    {
      id: 3,
      image: mobile,
      title: "Mobile Development",
    },
  ];

  return (
    <Section
      title="Skills ⚒️"
      subtitle="Here are all the skills that I am currently learning and try my best to be efficient with. I hope my skill will land me jobs at your request😀."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center rounded-xl p-5 shadow-lg duration-300 ease-in-out hover:scale-110 dark:shadow-gray-100"
          >
            <img
              src={image}
              alt={title}
              className="h-36 w-36 object-contain md:h-44 md:w-44"
            />

            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
