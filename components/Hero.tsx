"use client";
import Image from "next/image";
import { CustomButton } from ".";

import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero" id="home">
      <div className="flex-1 pt-36 padding-x">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hero__title"
        >
          Find, book or rent a car — quickly and easily!
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hero__subtitle"
        >
          Streamline your car rental experience with our effortless booking
          process.
        </motion.p>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          <CustomButton
            title="Explore cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </motion.div>
      </div>
      <div className="hero__image-container">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hero__image"
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
