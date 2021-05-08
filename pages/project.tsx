import React, { useRef, useState } from "react";
import {
  Navbar,
  TextHero,
  SubHero,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "components";
import { sanityStaticProps, useSanityQuery } from "lib/sanity";
import { parsePortableText } from "lib/utils";
import { groq } from "next-sanity";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Project() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(1);
  const scrollLeft = (swiper) => {};
  return (
    <>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-6xl">
          Renovation of health clinic
        </h2>
        <h3 className="text-custom-gray font-light text-sm">
          <span>Date: </span>
          <span className="font-semibold">01/12/2019</span>,{" "}
          <span>Location: </span>
          <span className="font-semibold">Ejio Community, Ogun State</span>
        </h3>
      </TextHero>
      <div className="relative">
        {isBeginning ? null : (
          <div className="absolute inset-y-1/2 left-14 z-30">
            <button
              onClick={() => swiperRef?.current?.slidePrev()}
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
          spaceBetween={55}
          initialSlide={1}
        >
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <SwiperSlide key={item}>
              <div className="h-[585px] relative">
                <img
                  className="h-full w-full absolute inset-0 object-cover"
                  src="healthcliniccover.png"
                  alt=""
                />
                {currentIdx === idx ? (
                  <>
                    <div className="absolute inset-x-0 bottom-0 shadow h-[548px]"></div>
                  </>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isEnd ? null : (
          <div className="absolute inset-y-1/2 right-14 z-30">
            <button
              onClick={() => swiperRef?.current?.slideNext()}
              className="h-20 w-20 p-2 bg-primary rounded-full text-white shadow-4xl hover:bg-primary-dark  focus:outline-none flex justify-center items-center hover:shadow-4xl"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
      <div className="relative px-8 py-12 w-78p md:w-79.2p bg-primary mx-auto text-white text-2xl font-light flex justify-center items-center">
        <p className="text-center">
          We believe access to health care is the right of every human,
          irrespective of age, social status or gender.
        </p>
      </div>

      <section className="py-32">
        <div className="max-w-[1140px] mx-auto py-12  flex justify-center items-center">
          <p className="font-light text-center leading-loose text-custom-gray">
            This, being part of our intervention areas, we embarked on the
            renovation of Ejio Primary Health Center at Ejio Ewekoro Local
            Government in Ogun State. Indigenes from the Area CDC Ejio and all
            local CDAs from Ejio, Abese, Olorunsogo, Jagboja, Ibokuru,
            Elerugberu, Iludun, Orisasa, Arinkinkin, Oriogbo and Jolugbo were
            all beneficiaries of this project. As part of the laudable project,
            Bruderhilfe provided patient clinic card shelves, executive office
            tables and chairs for the officers, fixing of all the broken floors
            of the clinic, fixing of mosquito nets on all windows and entrances,
            and painting of the whole facility.
          </p>
        </div>
      </section>
      <section className="mt-34 bg-pink relative pb-16">
        <div className="absolute -top-32 left-12">
          <img src="patternhorizontal.png" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="transform -translate-y-16">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-80 p-32 bg-white rounded-lg shadow-md flex justify-center items-center col-span-2">
                <p>1</p>
              </div>
              <div className="h-80 p-32 bg-white rounded-lg shadow-md flex justify-center items-center col-span-1">
                <p>1</p>
              </div>
              <div className="h-80 p-32 bg-white rounded-lg shadow-md flex justify-center items-center col-span-1">
                <p>1</p>
              </div>
              <div className="h-80 p-32 bg-white rounded-lg shadow-md flex justify-center items-center col-span-2">
                <p>2</p>
              </div>
              <div className="h-80 p-32 bg-white rounded-lg shadow-md flex justify-center items-center col-span-2">
                <p>1</p>
              </div>
              <div className="h-80 p-32 bg-white rounded-lg shadow-md flex justify-center items-center col-span-1">
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const query = groq`*[_type=='project']{
  projectName,
  "slug":titleSlug.current,
  location,
  date,
  "coverImg":coverImage.asset->url,
  "description":description[],
  "images":images[]{"urls":asset->url}
}[]`