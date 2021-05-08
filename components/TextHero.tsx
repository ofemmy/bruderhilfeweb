import React from "react";

export default function TextHero({
  title,
  subText = "This is where the subtext goes so please put custom here.",
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-16">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h2 className="text-custom-black font-bold text-6xl">{title}</h2>
        <h3 className="text-custom-gray font-light">{subText}</h3>
      </div>
    </div>
  );
}
