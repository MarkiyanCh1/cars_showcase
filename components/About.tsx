"use client";

import Image from "next/image";
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { CustomButton } from ".";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="xl:h-[500px] max-width my-20 flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container xl:h-[500px] mx-auto">
        <div className="flex gap-8 flex-col lg:flex-row xl:justify-between items-center">
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              src={"/car01.png"}
              width={600}
              height={448}
              className="rounded-[20px]"
              alt=""
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex-1 w-full flex xl:justify-center">
            <div className="xl:max-w-[517px] w-full text-center lg:text-start">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-4xl mb-6 font-bold"
              >
                Car Services simplifed.
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md mx-auto lg:mx-0"
              >
                Rent, choose, and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center justify-center lg:justify-start space-x-8 mb-12"
              >
                {/* car types */}
                <div className="flex flex-col items-center lg:items-start w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView && (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    )}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                {/* rental outlets */}
                <div className="flex flex-col items-center lg:items-start w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView && (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    )}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </div>
                {/* repair points */}
                <div className="flex flex-col items-center lg:items-start w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView && (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    )}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br /> points
                  </div>
                </div>
                {/* btn */}
              </motion.div>
              <motion.div
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CustomButton
                  title="See all cars"
                  btnType="button"
                  containerStyles="xl:block bg-accent hover:bg-accent-hover
               rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px]
               text-[13px] max-w-[184px]"
                  handleClick={handleScroll}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
