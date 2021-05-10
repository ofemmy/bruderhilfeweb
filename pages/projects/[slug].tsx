import React, { useRef, useState } from "react";
import {
  Navbar,
  TextHero,
  SubHero,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "components";
import { sanityStaticProps } from "lib/sanity";
import { classNames, gridColArrayGen, parsePortableText } from "lib/utils";
import { groq } from "next-sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { ParsedUrlQuery } from "querystring";
import SwiperCore, { Autoplay } from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay]);

export default function Project(props) {
  const {
    pageData: { current, previous, next },
  } = props;
  const gridCols = gridColArrayGen(Math.ceil(current.images.length / 2));
  const paragraphs = current?.description
    ? parsePortableText(current.description)
    : "";
  const heroSection = [
    { img: previous?.coverImg, href: previous?.slug },
    { img: current?.coverImg, href: current?.slug },
    { img: next?.coverImg, href: next?.slug },
  ];

  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(1);

  return (
    <>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-2xl md:text-3xl lg:text-6xl text-center">
          {current?.projectName}
        </h2>
        <h3 className="text-custom-gray font-light text-sm">
          <span>Date: </span>
          <span className="font-semibold">{current?.date}</span>,{" "}
          <span>Location: </span>
          <span className="font-semibold">{current?.location}</span>
        </h3>
      </TextHero>
      <div className="md:hidden relative">
        <img src={current?.coverImg} alt="" />
      </div>
      <div className="hidden md:block relative">
        {isBeginning ? null : (
          <div className="absolute inset-y-1/2 left-14 z-30">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="h-20 w-20 p-2 bg-primary rounded-full  text-white shadow-4xl hover:bg-primary-dark focus:outline-none flex justify-center items-center"
            >
              <ArrowLeftIcon />
            </button>
          </div>
        )}
        <Swiper
          height={585}
          slidesPerView={1.25}
          centeredSlides={true}
          onInit={(swiper) => (swiperRef.current = swiper)}
          onReachBeginning={(swiper) => setIsBeginning(true)}
          onReachEnd={(swiper) => setIsBeginning(false)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setCurrentIdx(swiper.activeIndex);
          }}
          autoplay
          spaceBetween={55}
          initialSlide={1}
        >
          {current.images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[785px] relative">
                <img
                  className="h-full w-full absolute inset-0 object-cover"
                  src={item.url}
                  alt=""
                />
                {currentIdx === idx ? (
                  <>
                    {/* <div className="absolute inset-x-0 bottom-0 shadow h-[548px]"></div> */}
                  </>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isEnd ? null : (
          <div className="absolute inset-y-1/2 right-14 z-30">
            <button
              onClick={() => swiperRef?.current.slideNext()}
              className="h-20 w-20 p-2 bg-primary rounded-full text-white shadow-4xl hover:bg-primary-dark  focus:outline-none flex justify-center items-center hover:shadow-4xl"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
      <div className="relative px-4 lg:px-8 py-12 md:w-78p lg:w-79.2p bg-primary mx-auto text-white lg:text-2xl font-light flex justify-center items-center leading-loose">
        <p className="text-center">
          We believe access to health care is the right of every human,
          irrespective of age, social status or gender.
        </p>
      </div>

      <section className="py-8 lg:py-32">
        <div className="max-w-[1140px] mx-auto py-12 px-4">
          {paragraphs
            ? paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-light  leading-loose text-custom-gray mt-2"
                >
                  {p}{" "}
                </p>
              ))
            : null}
        </div>
      </section>
      <section className="mt-34 bg-pink relative pb-16">
        <div className="absolute -top-32 left-12">
          <img src="patternhorizontal.png" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="transform -translate-y-16">
            <div className="space-y-8 lg:space-y-0 lg:grid grid-cols-3 gap-4">
              {current.images.map((image, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    `col-span-${gridCols[idx]}`,
                    "lg:rounded-lg relative h-[35rem] overflow-hidden"
                  )}
                >
                  <img
                    src={image.url}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  justify-between items-center relative">
          {previous ? (
            <Link href={`/projects/${previous?.slug ?? ""}`}>
              <a
                className="inline-flex items-center px-4 py-2 border border-transparent text-md font-light rounded-md text-deep-purple  border-deep-purple hover:bg-deep-purple focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-ellipsis
            hover:text-white focus:ring-deep-purple space-x-2 absolute left-8"
              >
                <span>
                  <ArrowLeftIcon />
                </span>
                <span>{previous?.projectName}</span>
              </a>
            </Link>
          ) : (
            <Link href={`/projects`}>
              <a
                className="inline-flex items-center px-4 py-2 border border-transparent text-md font-light rounded-md text-deep-purple  border-deep-purple hover:bg-deep-purple focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-ellipsis
            hover:text-white focus:ring-deep-purple space-x-2 absolute left-8"
              >
                <span>
                  <ArrowLeftIcon />
                </span>
                <span>Back to Projects</span>
              </a>
            </Link>
          )}
          {next ? (
            <Link href={`/projects/${next?.slug ?? ""}`}>
              <a
                className="inline-flex items-center px-4 py-2 border border-transparent text-md font-light rounded-md text-deep-purple  border-deep-purple hover:bg-deep-purple focus:outline-none focus:ring-2 focus:ring-offset-2
            hover:text-white focus:ring-deep-purple space-x-2 absolute right-8 overflow-ellipsis"
              >
                <span>{next?.projectName}</span>
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </Link>
          ) : null}
        </div>
        <div>
        {previous ? (
            <Link href={`/projects/${previous?.slug ?? ""}`}>
              <a
                className="lg:hidden inline-flex items-center px-4 py-2 border border-transparent text-md font-light rounded-md text-deep-purple  border-deep-purple hover:bg-deep-purple focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-ellipsis
            hover:text-white focus:ring-deep-purple space-x-2 absolute left-4"
              >
                <span>
                  <ArrowLeftIcon />
                </span>
                <span>Prev</span>
              </a>
            </Link>
          ) : (
            <Link href={`/projects`}>
              <a
                className="lg:hidden inline-flex items-center px-4 py-2 border border-transparent text-md font-light rounded-md text-deep-purple  border-deep-purple hover:bg-deep-purple focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-ellipsis
            hover:text-white focus:ring-deep-purple space-x-2 absolute left-4"
              >
                <span>
                  <ArrowLeftIcon />
                </span>
                <span>Projects</span>
              </a>
            </Link>
          )}
          {next ? (
            <Link href={`/projects/${next?.slug ?? ""}`}>
              <a
                className="lg:hidden inline-flex items-center px-4 py-2 border border-transparent text-md font-light rounded-md text-deep-purple  border-deep-purple hover:bg-deep-purple focus:outline-none focus:ring-2 focus:ring-offset-2
            hover:text-white focus:ring-deep-purple space-x-2 absolute right-4 overflow-ellipsis"
              >
                <span>Next</span>
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </Link>
          ) : null}
        </div>
      </section>
    </>
  );
}
const pageQuery = groq`*[_type=='project' && titleSlug.current == $slug ]{
  "current":{
    projectName,
    description,
    date,
    "images":images[]{"url":asset->url},
  location,
  "slug":titleSlug.current,
  "coverImg":coverImage.asset->url
  },
  "next":*[_type=="project" && _createdAt > ^._createdAt]{
    projectName,
    description,
    date,
    "images":images[]{"url":asset->url},
  location,
  "slug":titleSlug.current,
  "coverImg":coverImage.asset->url
  }[0],
"previous":*[_type=="project" && _createdAt < ^._createdAt]{
    projectName,
    description,
    date,
    "images":images[]{"url":asset->url},
  location,
  "slug":titleSlug.current,
  "coverImg":coverImage.asset->url
  }[0],
}[0]`;
const slugQuery = groq`*[_type=="project"]{"slug":titleSlug.current}`;
export async function getStaticPaths(context) {
  const { data } = await sanityStaticProps<any, ParsedUrlQuery>({
    context,
    query: slugQuery,
  });

  return {
    paths: data.map((data) => ({ params: { slug: data.slug } })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { data } = await sanityStaticProps({
    context,
    query: pageQuery,
    params: { slug: context.params.slug },
  });

  return {
    props: {
      pageData: data,
    },
  };
}
