import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Navbar,
  TextHero,
  SubHero,
  ArrowDownIcon,
  ArrowUpIcon,
} from "components";

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
      <Head>
        <title>Projects | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-3xl lg:text-6xl">
          Projects
        </h2>
        <h3 className="text-custom-gray font-light">
          We desire to see a world where the less-privileged are empowered to
          fulfill their dreams also.
        </h3>
      </TextHero>
      <SubHero imgUrl="projectshero.png" />
      <section className="bg-primary">
        <div className="max-w-5xl px-6 sm:px-6 lg:px-8 py-16 lg:py-28 mx-auto flex flex-col justify-center items-center font-light text-white text-lg leading-loose text-center lg:text-left">
          <p className="">
            We are committed to helping all underprivileged and underrepresented
            members of the society
          </p>
          <p>who are living in unfavourable conditions and lifestyle </p>
        </div>
      </section>
      <section className="bg-pink py-24 lg:py-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 flex flex-col lg:flex-row lg:justify-between lg:space-x-12 space-y-20 lg:space-y-0 relative">
          <div className="h-[532px] lg:h-[810px] lg:w-1/2  rounded-md relative">
            <img
              src="bruderhilfe2.jpeg"
              alt=""
              className="h-full w-full object-cover z-20 relative rounded-lg"
            />
            <img
              src="/patternsmall.png"
              alt=""
              className="lg:hidden absolute -right-10 -bottom-10"
            />
          </div>
          <div className="lg:w-1/2 h-[810px] overflow-hidden">
            <Swiper
              height={810}
              autoplay
              direction="vertical"
              slidesPerView={4}
              onInit={(swiper) => (swiperRef.current = swiper)}
              slidesPerColumnFill="row"
              spaceBetween={55}
            >
              {pageData.map((project) => (
                <SwiperSlide key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                    <a className="h-40 bg-light-green text-custom-gray hover:bg-primary hover:shadow-2xl hover:text-white flex rounded-md overflow-hidden transition duration-200">
                      <div className="flex-1 p-6 flex  items-center">
                        <p className="lg:text-2xl font-light">
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
