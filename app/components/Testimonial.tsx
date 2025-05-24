"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Testimonial: React.FC = () => {
  // Animation variants for header elements
  const headerVariants = {
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

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1, // Faster stagger for images
        ease: "easeOut",
      },
    }),
  };

  // Images with paths adjusted for Next.js public directory
  const images = [
    {
      src: "/masonary/masonry-01.jpg",
      alt: "Image 01",
      width: 232,
      height: 290,
    },
    {
      src: "/masonary/masonry-02.jpg",
      alt: "Image 02",
      width: 232,
      height: 290,
    },
    {
      src: "/masonary/masonry-03.jpg",
      alt: "Image 03",
      width: 232,
      height: 174,
    },
    {
      src: "/masonary/masonry-04.jpg",
      alt: "Image 04",
      width: 232,
      height: 155,
    },
    {
      src: "/masonary/masonry-05.jpg",
      alt: "Image 05",
      width: 232,
      height: 349,
    },
    {
      src: "/masonary/masonry-06.jpg",
      alt: "Image 06",
      width: 232,
      height: 250,
    },
    {
      src: "/masonary/masonry-07.jpg",
      alt: "Image 07",
      width: 232,
      height: 349,
    },
    {
      src: "/masonary/masonry-08.jpg",
      alt: "Image 08",
      width: 232,
      height: 155,
    },
    {
      src: "/masonary/masonry-09.jpg",
      alt: "Image 09",
      width: 232,
      height: 250,
    },
    {
      src: "/masonary/masonry-10.jpg",
      alt: "Image 10",
      width: 232,
      height: 290,
    },
    {
      src: "/masonary/masonry-11.jpg",
      alt: "Image 11",
      width: 232,
      height: 155,
    },
    {
      src: "/masonary/masonry-12.jpg",
      alt: "Image 12",
      width: 232,
      height: 309,
    },
  ];

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: "-100px" }}
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Testimonial
          </motion.h1>
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, margin: "-100px" }}
            className="h-1 w-20 bg-Gunmetal rounded"
          />
        </div>
        <motion.p
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 w-full leading-relaxed text-gray-500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </motion.p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column #1 */}
        <div className="grid gap-4">
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                className="w-full rounded-xl shadow object-cover"
                src={images[idx].src}
                width={images[idx].width}
                height={images[idx].height}
                alt={images[idx].alt}
                quality={90} // Higher quality to reduce compression artifacts
                priority={idx < 3} // Prioritize first column for LCP
                sizes="(max-width: 768px) 50vw, 25vw" // Responsive sizes for grid
              />
            </motion.div>
          ))}
        </div>
        {/* Column #2 */}
        <div className="grid gap-4">
          {[3, 4, 5].map((idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                className="w-full rounded-xl shadow object-cover"
                src={images[idx].src}
                width={images[idx].width}
                height={images[idx].height}
                alt={images[idx].alt}
                quality={90}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
        {/* Column #3 */}
        <div className="grid gap-4">
          {[6, 7, 8].map((idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                className="w-full rounded-xl shadow object-cover"
                src={images[idx].src}
                width={images[idx].width}
                height={images[idx].height}
                alt={images[idx].alt}
                quality={90}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
        {/* Column #4 */}
        <div className="grid gap-4">
          {[9, 10, 11].map((idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                className="w-full rounded-xl shadow object-cover"
                src={images[idx].src}
                width={images[idx].width}
                height={images[idx].height}
                alt={images[idx].alt}
                quality={90}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
