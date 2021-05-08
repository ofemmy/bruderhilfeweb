import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  TextHero,
  SubHero,
  ArrowDownIcon,
  ArrowUpIcon,
} from "components";
import { projectList } from "lib/projects";
import { imageUrlBuilder, sanityStaticProps } from "lib/sanity";
import { groq } from "next-sanity";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
export default function Projects({ pageData }) {
  const swiperRef = useRef(null);

  return (
    <>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-6xl">Projects</h2>
        <h3 className="text-custom-gray font-light">
          We help millions of the needy
        </h3>
      </TextHero>
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
              autoplay
              direction="vertical"
              slidesPerView={4}
              onInit={(swiper) => (swiperRef.current = swiper)}
              slidesPerColumnFill="row"
              spaceBetween={55}
              onSlideChange={(swiper) => {
                if (swiper.isBeginning && !swiper.isEnd) {
                  console.log("down");
                }
                if (swiper.isEnd) {
                  console.log("up");
                }
                // setIsBeginning(swiper.isBeginning);
                // setIsEnd(swiper.isEnd);
              }}
              // onReachEnd={(swiper) => setIsBeginning(false)}
              // onReachBeginning={(swiper) => setIsBeginning(true)}
            >
              {pageData.map((project) => (
                <SwiperSlide key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                    <a className="h-40 bg-light-green text-custom-gray hover:bg-primary hover:shadow-2xl hover:text-white flex rounded-md overflow-hidden transition duration-200">
                      <div className="flex-1 p-6 flex  items-center">
                        <p className="text-2xl font-light">
                          {project.projectName}
                        </p>
                      </div>
                      <div className="h-full overflow-hidden">
                        <img
                          src={imageUrlBuilder
                            .image(project.coverImg)
                            .width(165)
                            .height(186)
                            .url()}
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
          <div className="absolute -bottom-8 inset-x-1/2 transform -translate-x-22 z-20 flex space-x-2 ">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="h-12 w-12 p-4 hover:bg-white rounded-full shadow-xl text-custom-gray hover:shadow-4xl bg-light-green hover:text-primary focus:outline-none flex justify-center items-center"
            >
              <ArrowUpIcon />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="h-12 w-12 p-4 bg-white rounded-full shadow-xl text-custom-gray hover:shadow-4xl hover:bg-light-green hover:text-primary focus:outline-none flex justify-center items-center"
            >
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
const pageQuery = groq`*[_type=='project']{
  projectName,
  "slug":titleSlug.current,
  "coverImg":coverImage.asset->url,
}[]`;
export async function getStaticProps(context) {
  const res = await sanityStaticProps({ context, query: pageQuery });

  return {
    props: {
      pageData: res.data,
    },
  };
}
