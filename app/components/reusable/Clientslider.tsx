"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Define the type for each image
interface SliderImage {
  src: string;
  alt: string;
}

// Define the type for slider settings
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
  cssEase: string;
  arrows: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }>;
}

// Define props for the Clientslider component
interface ClientsliderProps {
  images?: SliderImage[];
  title?: string;
  slidesToShow?: number; // For desktop view
  mobileSlidesToShow?: number; // For mobile view (below 480px)
  animationDuration?: number;
  animationDelay?: number;
}

const Clientslider: React.FC<ClientsliderProps> = ({
  images = Array.from({ length: 10 }, (_, index) => ({
    src: `https://dummyimage.com/100x100/cccccc/000000&text=Image+${index + 1}`,
    alt: `image-${index}`,
  })),
  title = "Our Clients",
  slidesToShow = 5,
  mobileSlidesToShow = 3,
  animationDuration = 0.8,
  animationDelay = 0.2,
}) => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: mobileSlidesToShow,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: animationDuration, ease: "easeOut" },
    },
  };

  // Animation variants for slider images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: animationDuration,
        delay: i * animationDelay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="container mx-auto px-5 py-8">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center w-full mb-[52px]"
      >
        <h1 className="sm:!text-3xl !text-2xl !font-semibold title-font text-gray-900">
          {title}
        </h1>
      </motion.div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              className="w-auto h-24 mx-auto p-3"
              src={image.src}
              alt={image.alt}
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Clientslider;
