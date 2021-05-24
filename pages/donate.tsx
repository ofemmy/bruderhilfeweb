import React, { useRef } from "react";
import Head from "next/head";
import { ArrowRightIcon } from "@heroicons/react/outline";
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
        <title>Donate | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-3xl lg:text-6xl">
          Donate
        </h2>
        <h3 className="text-custom-gray font-light text-center">
          Help us create a world where the less-privileged are empowered to
          fulfill their dreams too.
        </h3>
      </TextHero>
      <SubHero imgUrl="new-donate.jpeg" />
      <section className="bg-primary">
        <div className="max-w-5xl px-6 sm:px-6 lg:px-8 py-16 lg:py-28 mx-auto flex flex-col justify-center items-center font-light text-white text-lg leading-loose text-center lg:text-left">
          <p className="">
            By donating to our cause, you are joining us in this quest to
            fulfill our vision of helping people
          </p>
          <p>who are living in unfavourable conditions and lifestyle. </p>
        </div>
      </section>
      <section className="bg-pink py-24 lg:py-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 flex flex-col lg:flex-row lg:justify-between lg:space-x-20 space-y-20 lg:space-y-0 relative">
          <div className="h-[532px] lg:h-[810px] lg:w-1/2  rounded-md relative">
            <img
              src="gifts.jpeg"
              alt=""
              className="h-full w-full object-cover z-20 relative rounded-lg"
            />
            <img
              src="/patternsmall.png"
              alt=""
              className="lg:hidden absolute -right-10 -bottom-10"
            />
          </div>
          <div className="lg:w-1/2 h-[810px] overflow-hidden lg:py-24 space-y-12">
            <p className="text-deep-purple">
              You can donate directly into our bank accounts:
            </p>
            <div className="lg:mt-4 font-light text-custom-gray leading-loose">
              <p>Guaranty Trust Bank</p>
              <p>Acc Name: Bruderhilfe Social</p>
              <p>Development Initiative</p>
              <p>
                Acc No:{" "}
                <span className="text-custom-black font-normal">
                  0263296599
                </span>
              </p>
              <p className="lg:mt-12 mt-8">Keystone Bank</p>
              <p>Acc Name: Bruderhilfe Social</p>
              <p>Development Initiative</p>
              <p>
                Acc No:{" "}
                <span className="text-custom-black font-normal">
                  1006879560
                </span>
              </p>
            </div>
            <a
              href="https://www.paypal.me/bruderhilfe"
              target="_blank"
              className="md:-ml-24 lg:-ml-0 inline-flex items-center px-6 py-4 border border-transparent shadow-sm leading-4 font-medium rounded-md text-deep-purple border-deep-purple hover:bg-pink"
            >
              <img src="paypalicon.png" alt="" className="h-6"/>
              <span className="ml-2 -mr-0.5">Donate through Paypal</span>
           
              {/* <ArrowRightIcon
                className="ml-2 -mr-0.5 h-4 w-4"
                aria-hidden="true"
              /> */}
            </a>
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
