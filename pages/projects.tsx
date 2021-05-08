import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  TextHero,
  SubHero,
  ArrowDownIcon,
  ArrowUpIcon,
} from "components";
import { projectList } from "lib/projects";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
  const [isBeginning, setIsBeginning] = useState(true);
  const swiperRef = useRef(null);
  const scroll = (swiper) => {
    console.log(swiper);
    isBeginning ? swiper.slideNext() : swiper.slidePrev();
  };
  return (
    <>
      <Navbar />
      <TextHero title="Projects" />
      <SubHero imgUrl="projectshero.png" />
      <section className="bg-primary">
        <div className="max-w-5xl py-28 mx-auto flex flex-col justify-center items-center font-light text-white text-lg leading-loose">
          <p className="">
            We are committed to helping all underprivileged and underrepresented
            members of the society.
          </p>
          <p>who are living in unfavourable conditions and lifestyle </p>
        </div>
      </section>
      <section className="bg-pink py-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between space-x-12 relative">
          <div className="w-1/2 overflow-hidden rounded-md relative">
            <img
              src="bruderhilfe2.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 h-[810px] overflow-hidden">
            <Swiper
              height={810}
              direction="vertical"
              slidesPerView={3.5}
              onInit={(swiper) => (swiperRef.current = swiper)}
              slidesPerColumnFill="row"
              spaceBetween={0}
              onReachEnd={(swiper) => setIsBeginning(false)}
              onReachBeginning={(swiper) => setIsBeginning(true)}
            >
              {projectList.map((project) => (
                <SwiperSlide key={project.title}>
                  <Link href="/">
                    <a className="h-40 bg-light-green text-custom-gray hover:bg-primary hover:text-white flex rounded-md overflow-hidden transition duration-200">
                      <div className="flex-1 p-6 flex  items-center">
                        <p className="text-2xl font-light">{project.title}</p>
                      </div>
                      <div className="h-full">
                        <img
                          src={project.imgUrl}
                          alt=""
                          className="h-full object-cover"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute -bottom-6 inset-x-1/2 transform -translate-x-22 z-20 ">
            <button
              onClick={() => scroll(swiperRef.current)}
              className="h-20 w-20 p-2 bg-white rounded-full shadow-xl text-custom-gray hover:shadow-4xl hover:bg-light-green hover:text-primary focus:outline-none flex justify-center items-center animate-bounce-slow hover:animate-none"
            >
              {isBeginning ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
