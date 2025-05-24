"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Define the type for each service card
interface ServiceCard {
  imageSrc: string;
  imageAlt: string;
  subheading: string;
  heading: string;
  paragraph: string;
}

// Define props for the JasaSection component
interface JasaSectionProps {
  title?: string;
  description?: string;
  services?: ServiceCard[];
  animationDuration?: number;
  animationDelay?: number;
}

const JasaSection: React.FC<JasaSectionProps> = ({
  title = "Jasa Kami",
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni illo est vitae quos nam, beatae facilis saepe, voluptatibus libero sed cupiditate explicabo id eaque voluptatum velit iure culpa itaque. Atque!",
  services = [
    {
      imageSrc: "https://dummyimage.com/720x400",
      imageAlt: "content",
      subheading: "SUBJUDUL",
      heading: "Layanan 1",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores, laborum eius animi ea nemo, voluptas aliquam ut debitis ad, provident aperiam iste harum veniam. Culpa distinctio qui delectus sequi?",
    },
    {
      imageSrc: "https://dummyimage.com/721x401",
      imageAlt: "content",
      subheading: "SUBJUDUL",
      heading: "Layanan 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, delectus sapiente alias explicabo, dolor accusantium error ipsa magni voluptate harum quas laboriosam debitis cum. Mollitia voluptates sapiente doloremque impedit optio?",
    },
    {
      imageSrc: "https://dummyimage.com/722x402",
      imageAlt: "content",
      subheading: "SUBJUDUL",
      heading: "Layanan 3",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cupiditate corrupti magnam eveniet ex, repudiandae aut maiores nulla nam provident aspernatur reprehenderit ducimus beatae non, quisquam ad aliquid dicta consequatur?",
    },
    {
      imageSrc: "https://dummyimage.com/723x403",
      imageAlt: "content",
      subheading: "SUBJUDUL",
      heading: "Layanan 4",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit saepe sit officia sunt architecto aliquam fuga inventore in dicta veritatis sint, cum mollitia nam odio hic dolorum similique dignissimos.",
    },
  ],
  animationDuration = 0.8,
  animationDelay = 0.2,
}) => {
  // Animation variants for title and description
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        delay: i * animationDelay,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        delay: i * animationDelay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true, margin: "-100px" }}
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            >
              {title}
            </motion.h1>
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true, margin: "-100px" }}
              className="h-1 w-20 bg-Gunmetal rounded"
            />
          </div>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full leading-relaxed text-gray-500"
          >
            {description}
          </motion.p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index + 3} // Start after title and description
              viewport={{ once: true, margin: "-100px" }}
              className="xl:w-1/4 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={service.imageSrc}
                  alt={service.imageAlt}
                />
                <h3 className="tracking-widest text-Gunmetal text-xs font-medium">
                  {service.subheading}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {service.heading}
                </h2>
                <p className="leading-relaxed text-base">{service.paragraph}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JasaSection;
