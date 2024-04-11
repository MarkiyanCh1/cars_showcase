"use client";

import { useContext, useEffect } from "react";
import { SearchContext } from "@/context/search";
import { ModalContext } from "@/context/modal";
import Image from "next/image";

import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import Search from "./Search";
import { SearchMobile } from ".";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  const { modalActive } = useContext(ModalContext);
  const { setSearchActive } = useContext(SearchContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1300) {
        if (window.scrollY > 1350) {
          setSearchActive(true);
        } else {
          setSearchActive(false);
        }
      }
      if (window.innerWidth >= 1024 && window.innerWidth < 1300) {
        if (window.scrollY > 2100) {
          setSearchActive(true);
        } else {
          setSearchActive(false);
        }
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section className="lg:h-[780px] max-width xl:h-[600px] bg-[#b2b7c2]/10">
      <div className="container xl:h-[550px] mx-auto h-[650px] xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="hero__title"
            >
              Explore the Finest <span className="text-accent">Global</span>
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-base xl:text-xl xl:leading-8 max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex space-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <Image src={"/app-store.svg"} width={132} height={36} alt="" />
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
          {/* img */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[350px] md:max-w-[900px]
          xl:max-w-[860px] xl:max-h-[542px]"
          >
            <Image
              src={"/hero2.png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className={`${
            modalActive
              ? "hidden"
              : "fixed top-[36px] z-20 w-full max-w-[1920px]"
          }
        `}
        >
          <Search />
        </motion.div>
      ) : (
        <div className="w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="md:hidden"
      >
        <SearchMobile />
      </motion.div>
    </section>
  );
}
