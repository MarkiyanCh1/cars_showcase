"use client";

import { SearchContext } from "@/context/search";
import { useContext } from "react";
import { CustomButton } from ".";
import { LocationSelection } from ".";
import { DateSelection } from ".";
import { HourSelection } from ".";

export default function Search() {
  const { searchActive } = useContext(SearchContext);
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden md:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HourSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <CustomButton
            title="Search"
            containerStyles={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent md:w-[120px] xl:w-[184px]"
            }`}
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
}
