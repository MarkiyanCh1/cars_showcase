"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
// import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`${
        header
          ? "bg-white shadow-md py-2 "
          : "w-full absolute z-10 py-4 text-xl"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 font-semibold
      `}
    >
      <div className="flex justify-between ml-28 mr-6	items-center	">
        <Link to="" href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={125}
            height={18}
            className="object-contain"
          />
        </Link>

        <nav className="xl:flex xl:gap-8 pr-28 hidden">
          <Link
            className="cursor-pointer"
            to="home"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="discover"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </nav>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles={`${
            header ? "bg-[#4d208840] h-[28px]" : "bg-white min-w-[130px]"
          } xl:flex hidden text-primary-blue rounded-full `}
        />
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-20 xl:hidden"
        >
          {nav ? (
            <BiX className="text-4xl" />
          ) : (
            <BiMenuAltRight className="text-4xl " />
          )}
        </div>
      </div>
      <nav
        className={`${
          nav
            ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 flex flex-col gap-y-6 overflow-hidden font-black	 transition-all duration-150 uppercase text-base items-center	  bg-[#f0f8ff]  rounded-3xl	w-[250px] absolute right-1.5	top-2.5	"
            : "hidden"
        }`}
      >
        <Link
          className="cursor-pointer"
          to="home"
          smooth={true}
          activeClass="active"
          spy={true}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer"
          to="discover"
          smooth={true}
          activeClass="active"
          spy={true}
        >
          Cars
        </Link>
        <Link
          className="cursor-pointer"
          to="about"
          smooth={true}
          activeClass="active"
          spy={true}
        >
          About
        </Link>
        <Link
          className="cursor-pointer"
          to="why"
          smooth={true}
          activeClass="active"
          spy={true}
        >
          Why us
        </Link>
        <Link
          className="cursor-pointer"
          to="testimonial"
          smooth={true}
          activeClass="active"
          spy={true}
        >
          Testimonials
        </Link>
        <Link
          className="cursor-pointer"
          to="contact"
          smooth={true}
          activeClass="active"
          spy={true}
        >
          Contact
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="bg-[#4d208840] max-w-[130px] flex text-primary-blue rounded-full"
        />
      </nav>
    </header>
  );
};

export default Navbar;
