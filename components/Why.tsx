"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <section
      className=" xl:h-[520px] max-width my-20 flex items-center"
      id="why"
    >
      <div className="container xl:h-[520px] mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-4xl mb-6 font-bold text-center"
        >
          Unmatched excellence and satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:flex justify-center mb-6 xl:mb-2"
        >
          <Image
            src={"/car.svg"}
            className="h-[200px]"
            width={860}
            height={200}
            alt=""
          />
        </motion.div>
        {/* grid items */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/* item 1 */}
          <div
            className="flex flex-col items-center text-center md:max-w-[320px]
          xl:max-w-none p-2 xl:p-0"
          >
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="text-xl mb-4 font-semibold">
              Rent simply and quickly
            </h3>
            <p className="xl:flex">
              We prioritize you need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
          {/* item 2 */}
          <div
            className="flex flex-col items-center text-center md:max-w-[320px]
          xl:max-w-none p-2 xl:p-0"
          >
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="text-xl mb-4 font-semibold">
              Modern & well maintained vehicles
            </h3>
            <p className="xl:flex">
              We prioritize you need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
          {/* item 3 */}
          <div
            className="flex flex-col items-center text-center md:max-w-[320px]
          xl:max-w-none p-2 xl:p-0"
          >
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="text-xl mb-4 font-semibold">
              Prompt and flexible services
            </h3>
            <p className="xl:flex">
              We prioritize you need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
