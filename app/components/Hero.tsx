"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

// Define props for the Hero component
interface HeroProps {
  badgeText?: string;
  heading?: ReactNode;
  paragraph?: string;
  buttonText?: string;
  buttonHref?: string;
  animationDuration?: number;
  animationDelay?: number;
}

const Hero: React.FC<HeroProps> = ({
  badgeText = "Terbaru",
  heading = (
    <>
      Raih Keuntungan <br className="hidden md:block" />
      <span className="inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-2 text-left leading-tight [&_li]:block">
          <li>Maksimal</li>
          <li>Optimal</li>
          <li aria-hidden="true">Maksimal</li>
        </ul>
      </span>{" "}
      <span className="inline-block text-gray-700">Bersama Kami</span>
    </>
  ),
  paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae? Consectetur, sequi corporis veritatis, earum aliquam commodi maiores ab minus pariatur laborum molestiae expedita aut inventore numquam! Saepe, exercitationem pariatur.",
  buttonText = "Pelajari Sekarang",
  buttonHref = "/",
  animationDuration = 0.8,
  animationDelay = 0.2,
}) => {
  // Animation variants for text elements
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

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: animationDuration, delay: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation variants for SVGs
  const svgVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: animationDuration,
        delay: i * 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <style jsx>{`
        @keyframes text-slide-2 {
          0%,
          40% {
            transform: translateY(0%);
          }
          50%,
          90% {
            transform: translateY(-33.33%);
          }
          100% {
            transform: translateY(-66.66%);
          }
        }
        .animate-text-slide-2 {
          animation: text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
        }
      `}</style>
      <div className="container px-5 py-24 mx-auto">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
              >
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-black">
                  {badgeText}
                </p>
              </motion.div>
              <motion.h2
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
                className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none"
              >
                {heading}
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={2}
                viewport={{ once: true }}
                className="text-base text-gray-700 md:text-lg"
              >
                {paragraph}
              </motion.p>
            </div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Link
                href={buttonHref}
                className="focus:shadow-outline mr-6 inline-flex h-12 items-center justify-center rounded bg-black px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-gray-600 focus:outline-none"
              >
                {buttonText}
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <motion.svg
              variants={svgVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
              className="absolute w-full text-black"
              fill="currentColor"
              viewBox="0 0 600 392"
            >
              <rect x="0" y="211" width="75" height="181" rx="8"></rect>
              <rect x="525" y="260" width="75" height="132" rx="8"></rect>
              <rect x="105" y="83" width="75" height="309" rx="8"></rect>
              <rect x="210" y="155" width="75" height="237" rx="8"></rect>
              <rect x="420" y="129" width="75" height="263" rx="8"></rect>
              <rect x="315" y="0" width="75" height="392" rx="8"></rect>
            </motion.svg>
            <motion.svg
              variants={svgVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="relative w-full text-gray-700"
              fill="currentColor"
              viewBox="0 0 600 392"
            >
              <rect x="0" y="311" width="75" height="81" rx="8"></rect>
              <rect x="525" y="351" width="75" height="41" rx="8"></rect>
              <rect x="105" y="176" width="75" height="216" rx="8"></rect>
              <rect x="210" y="237" width="75" height="155" rx="8"></rect>
              <rect x="420" y="205" width="75" height="187" rx="8"></rect>
              <rect x="315" y="83" width="75" height="309" rx="8"></rect>
            </motion.svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
