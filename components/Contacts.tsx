"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function Contacts() {
  return (
    <section
      className=" xl:h-[600px] my-20 max-width flex items-end  bg-[#b2b7c2]/10 overflow-hidden"
      id="contact"
    >
      <div className="container xl:h-[600px] mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl mb-6 font-bold"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="mb-10"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit quod eaque error nemo beatae, rerum quia laudantium
                harum distinctio temporibus.
              </motion.p>
              {/* btns */}
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className="flex space-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta">
                  <Image
                    src={"/app-store.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={"/google-play.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image src={"/phone.svg"} width={320} height={640} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
