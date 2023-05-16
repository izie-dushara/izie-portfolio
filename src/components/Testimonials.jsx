import React from "react";
import Section from "./common/Section";
import avatar from "../assets/avatar.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: avatar,
      client: "Arwin Kumar",
      comment:
        "He is a diligent and hardworking person. It's a matter of time before he will become good at this.",
    },

    {
      id: 2,
      image: avatar,
      client: "Hameem",
      comment:
        "That's the spirit, Izie. Aim higher in learning the full-stack and I will be there if you have any questions to ask.",
    },

    {
      id: 3,
      image: avatar,
      client: "Edy Bashar",
      comment:
        "Your knowledge is still low, but with time you will grow your knowledge. It's improvement over perfection after all.",
    },
  ];
  return (
    <Section
      title="Testimonials 💬"
      subtitle="This is what my friends said about me. Will like to change this into clients in the near future."
    >
      <div className="flex max-w-xl flex-col gap-8">
        {testimonials.map(({ id, image, client, comment }) => (
          <div className="flex items-center justify-center rounded-xl p-4 shadow-md dark:shadow-gray-300">
            <div
              className="w-1/3
                        "
            >
              <img
                src={image}
                alt={client}
                className="h-20 w-20 object-cover object-top pt-2"
              />
            </div>
            <div className="flex w-2/3 flex-col items-center justify-center gap-2 p-2">
              <h3 className="text-xl font-semibold">{client}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
