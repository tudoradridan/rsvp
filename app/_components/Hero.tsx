"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Audio from "@/app/_components/Audio";

import HeroImage from "@/app/images/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start z-40 flex-col">
        <motion.h1
          className="text-white text-2xl font-bold sm:text-4xl allura-font mt-16 sm:mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ana Maria & Andrei
        </motion.h1>
        <motion.h5
          className="text-white text-md sm:text-2xl oswald-font"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          23 August 2025
        </motion.h5>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Audio />
        </motion.div>
      </div>
      <Image
        src={HeroImage}
        alt="Hero Image"
        layout="fill"
        style={{ objectFit: "cover" }}
        quality={100}
        className="absolute inset-0"
        priority={true}
      />
    </section>
  );
};

export default Hero;
