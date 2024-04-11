"use client";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { CustomButton } from ".";

const Footer = () => {
  return (
    <footer className="flex flex-col tex-black-100 border-t border-gray-100 ">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="flex flex-wrap flex-col items-center gap-16 sm:px-16 px-6 py-10">
          <div className="flex justify-around flex-wrap w-full flex-col sm:flex-row gap-6 items-center">
            <div className="flex flex-col items-start gap-6 min-w-[250px]">
              <Image
                src="/logo.svg"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
              />
              <p className="text-base text-gray-700">
                Car Market 2023 <br />
                All rights reserved &copy;
              </p>
            </div>
            <div className="min-w-[250px]">
              <h3 className="text-xl mb-4 font-semibold">Working Hours</h3>
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-2">
                  <h3>Mon-Fri:</h3>
                  <p className="font-semibold">09:00AM - 09:00PM</p>
                </div>
                <div className="flex gap-x-2">
                  <h3>Sat:</h3>
                  <p className="font-semibold">09:00AM - 07:00PM</p>
                </div>
                <div className="flex gap-x-2">
                  <h3>Sun:</h3>
                  <p className="font-semibold">Closed</p>
                </div>
              </div>
            </div>
            <div className="min-w-[250px]">
              <h3 className="text-xl mb-4 font-semibold">Newsletter</h3>
              <div className="mb-9 text-secondary">
                Subscribe for latest news
              </div>
              <form className="flex gap-x-2 h-10">
                <input
                  type="text"
                  placeholder="Your email"
                  className="outline-none text-[13px] bg-white h-full border rounded-lg pl-2 focus:border-accent"
                />
                <CustomButton
                  title="Submit"
                  containerStyles="btn h-10 text-sm btn-accent px-0 w-24"
                />
              </form>
            </div>
          </div>
          <div className="footer__links justify-evenly flex-col sm:flex-row gap-5 md:flex-row">
            {footerLinks.map((link) => (
              <div key={link.title} className="footer__link mx-auto">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-5">
        <p>@2023 CarMarket. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
