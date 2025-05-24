"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Content: React.FC = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <motion.div
          className="relative lg:w-1/2"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/content/image.jpeg"
            alt="Content Image"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
            width={1260}
            height={750}
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          ></svg>
        </motion.div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-AntiWhite uppercase rounded-full bg-Gunmetal">
              Terbaru
            </p>
          </motion.div>
          <motion.h5
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl"
          >
            Judul
          </motion.h5>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-5 text-gray-800"
          >
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
            sed consequat odio sollicitudin.
          </motion.p>
          <motion.div
            className="flex items-center"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true, margin: "-100px" }}
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-Gunmetal hover:bg-GraniteGray focus:shadow-outline focus:outline-none"
            >
              Mulai Sekarang
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-Gunmetal hover:text-GraniteGray"
            >
              Pelajari Lebih Lanjut
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
