"use client";
import React from "react";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";

const FilterDelete = () => {
  const router = useRouter();

  const handleReset = () => {
    window.history.pushState({}, "", "/");
    window.location.reload();
  };
  return (
    <div className="flex-center gap-5">
      <CustomButton
        title="Clear"
        btnType="button"
        containerStyles="bg-red-600 rounded-full text-white"
        handleClick={handleReset}
      />
    </div>
  );
};

export default FilterDelete;
