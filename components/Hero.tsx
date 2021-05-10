import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
export default function Hero({ heroData }) {
  const { heading, tagline, backgroundImage } = heroData;
  const [line1, line2] = tagline.split("and");
  //h-[832px]
  return (
    <div className="h-[405px] md:h-[605px] lg:h-[832px] bg-primary relative overflow-hidden flex items-end justify-center">
      <div className="hidden md:block absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={backgroundImage.url}
          alt="Two girls with the world map"
        />
      </div>
      <div className="md:hidden block absolute inset-0">
      <img
          className="h-full w-full object-cover"
          src="/mainheroMobile.png"
          alt="Two girls with the world map"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 shadow h-[572px] md:h-[672px]"></div>
      <div
        className="
      relative text-white flex flex-col items-center justify-center mb-12 md:mb-36 space-y-6 px-4 md:px-0"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-col xl:flex-row justify-center items-center space-x-2">
          <span className="">A world free of</span>

          <div className="text-primary-light xl:inline-flex">
            <Typewriter
              onInit={() => {}}
              options={{
                strings: heading.split(","),
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "inline-flex",
                deleteSpeed: 250,
              }}
            />
          </div>
        </h1>
        <div className="flex flex-col justify-center items-center text-sm lg:text-lg">
          <p className="">{line1}</p>
          <p>and {line2}</p>
        </div>
        <Link href="/donate">
          <a className="inline-flex items-center px-8 py-4 border border-transparent shadow-sm text-lg leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark mt-1">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
}
//1rem = 16px
