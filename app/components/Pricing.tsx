"use client";

import { motion } from "framer-motion";

const Pricing: React.FC = () => {
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

  // Animation variants for pricing cards
  const cardVariants = {
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

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-16 lg:max-w-2xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="mb-4 inline-block rounded-full bg-black px-3 py-px text-xs font-semibold tracking-wider text-white uppercase">
            Investasi
          </p>
        </motion.div>
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-6 max-w-lg font-sans text-3xl leading-none font-bold tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-mt-10 lg:-ml-28 lg:w-32"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span className="relative">Harga </span>
          </span>{" "}
          yang Transparan. Bayar Seiring Pertumbuhan Anda
        </motion.h2>
        <motion.p
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, margin: "-100px" }}
          className="text-base text-gray-700 md:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio
          laborum quibusdam sequi, provident suscipit nulla illum tempore
          laboriosam, impedit molestias, ea quas numquam molestiae. Quia, ea.
          Dolor, dolorem sint.
        </motion.p>
      </div>
      <div className="row-gap-5 sm:row-gap-10 grid max-w-md gap-1 sm:mx-auto lg:max-w-screen-lg lg:grid-cols-3 xl:max-w-screen-lg">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between rounded border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center"
        >
          <div className="text-center">
            <div className="text-lg font-semibold">Mulai</div>
            <div className="mt-2 flex items-center justify-center">
              <div className="mr-1 text-5xl font-bold">Gratis</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">10 deploys per hari</div>
              <div className="text-gray-700">10 GB penyimpanan</div>
              <div className="text-gray-700">20 domains</div>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gray-800 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-gray-900 focus:outline-none"
            >
              Coba Gratis
            </a>
            <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={4}
          viewport={{ once: true, margin: "-100px" }}
          className="border-black relative md:-my-10 flex flex-col justify-between rounded border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center"
        >
          <div className="absolute inset-x-0 top-0 -mt-3 flex justify-center">
            <div className="bg-black inline-block rounded px-3 py-1 text-xs font-medium tracking-wider text-white uppercase">
              Paling Populer
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Pro</div>
            <div className="mt-2 flex items-center justify-center">
              <sup className="text-xs mr-1.5">IDR</sup>
              <div className="mr-1 text-5xl font-bold">2.5 Mil</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">200 deploys per hari</div>
              <div className="text-gray-700">80 GB penyimpanan</div>
              <div className="text-gray-700">Global CDN</div>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="bg-black hover:bg-gray-500 focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
            >
              Beli Pro
            </a>
            <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={5}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between rounded border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center"
        >
          <div className="text-center">
            <div className="text-lg font-semibold">Business</div>
            <div className="mt-2 flex items-center justify-center">
              <sup className="text-xs mr-1.5">IDR</sup>
              <div className="mr-1 text-5xl font-bold">3.5 Mil</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">500 GB Penyimpanan</div>
              <div className="text-gray-700">Domain Unlimited</div>
              <div className="text-gray-700">24/7 Bantuan</div>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gray-800 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-gray-900 focus:outline-none"
            >
              Beli Bisnis
            </a>
            <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
