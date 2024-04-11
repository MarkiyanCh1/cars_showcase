"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CustomButton, LocationSelection } from ".";
import { DateSelection } from ".";
import { HourSelection } from ".";

export default function SearchMobile() {
  const [clicked, setClicked] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Menu as="div" className="w-full h-full">
      <div className="relative flex-1">
        <Menu.Button
          className="dropdown-btn flex justify-center items-center text-[30px] bg-[#0000ff] h-[45px] w-[300px] rounded-[20px] mx-auto"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <div className="w-full h-16 flex justify-center">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <p className="text-xl text-white">Rent a car</p>
                {clicked ? (
                  <FaChevronUp className="text-accent" />
                ) : (
                  <FaChevronDown className="text-accent" />
                )}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu bg-[#fffaf0] shadow-lg absolute top-[55px] left-1/2 z-20 transform -translate-x-1/2 text-sm text-center w-full max-w-[332px] py-6 rounded-[20px]">
          <div className="flex flex-col items-center gap-8 h-full">
            <div className="w-[250px] rounded-[20px] bg-[#faebd7]">
              <LocationSelection />
            </div>
            <div className="w-[250px] rounded-[20px] bg-[#faebd7]">
              <DateSelection />
            </div>
            <div className="w-[250px] rounded-[20px] bg-[#faebd7]">
              <HourSelection />
            </div>
            <Menu.Item>
              {({ close }) => (
                <div className="w-[120px] rounded-[20px] bg-[#faebd7]">
                  <CustomButton
                    title="Search"
                    containerStyles="btn btn-lg btn-accent w-[120px]"
                    handleClick={handleScroll}
                    onClick={close}
                  />
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
      ;
    </Menu>
  );
}
