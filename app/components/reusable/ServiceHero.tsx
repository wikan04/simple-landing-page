"use client";

import { ReactNode } from "react";

// Define props for the Hero component
interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
  heading?: ReactNode; // Allow string or JSX for complex heading
  paragraph?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const Hero: React.FC<HeroProps> = ({
  imageSrc = "https://dummyimage.com/720x600",
  imageAlt = "hero",
  heading = (
    <>
      Before they sold out
      <br className="hidden lg:inline-block" />
      readymade gluten
    </>
  ),
  paragraph = "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
  primaryButtonText = "Button",
  secondaryButtonText = "Button",
}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt={imageAlt}
            src={imageSrc}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {heading}
          </h1>
          <p className="mb-8 leading-relaxed">{paragraph}</p>
          <div className="flex justify-start">
            <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
              {primaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
