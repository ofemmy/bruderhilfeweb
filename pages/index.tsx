import Head from "next/head";
import { Navbar, Hero, Card, Footer } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { sanityStaticProps, useSanityQuery } from "lib/sanity";
import { parsePortableText } from "lib/utils";
import { futureProgrammes } from "lib/about";
import { groq } from "next-sanity";

export default function Home(props) {
  const { pageData } = props;
  const { heroSection, missionSection, thematicAreaSection } = pageData;
  const [p1, p2] = parsePortableText(pageData.missionSection.text);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <>
      <Head>
        <title>Welcome | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <Hero heroData={heroSection} />
      <section className="lg:py-36 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col-reverse items-center lg:flex-row lg:justify-center relative lg:space-x-16">
          <div className="mt-12 lg:mt-0 h-[433px] lg:h-full  lg:w-1/2 relative z-20">
            <img
              src={missionSection.sectionImage.url}
              alt="Bruder Hilfe vision"
              className="w-full h-full relative z-20 object-cover rounded-md"
            />
            <img
              src="pattern2.png"
              alt=""
              className="absolute -bottom-12 -left-20 h-[260px] w-[208px] lg:h-[336.73px] lg:w-[228px]"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="lg:text-left text-custom-black font-extrabold text-3xl lg:text-4xl tracking-wide mt-12 lg:mt-0">
              {missionSection.sectionTitle}
            </h2>
            <p className="text-custom-gray leading-loose font-light text-md">
              {p1} <br /> {p2}
            </p>
          </div>
        </div>
      </section>
      <section className="pt-36">
        <div className="max-w-7xl bg-primary  relative">
          <div className="absolute w-full h-full">
            <img
              src="bruder-mission-2.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-primary bg-opacity-95"></div>
          <div className="relative mx-auto px-6 sm:px-6 lg:px-0 flex flex-col items-center justify-center lg:items-start lg:flex-row lg:justify-between py-16 lg:pl-28 lg:space-x-20">
            <div className="space-y-8 text-white lg:w-1/2 flex flex-col justify-center  lg:items-start lg:justify-start">
              <h2 className="font-extrabold  text-3xl lg:text-4xl tracking-wide">
                Project Karakata
              </h2>
              <p className="leading-loose font-light text-md relative w-full">
                <span>
                  Project Kárà -Kátà (Kárà -Kátà being a Yoruba parlance name
                  for economic and commercial activites that is inclusive)
                  focuses on deploying and implementing practical and
                  sustainable economic empowerment and skill acquisition
                  programmes for 200 women in rural and urban poor communities
                  in Lagos, Ogun and Niger states in Nigeria who have little
                  access to sustainable economic livelihoods.
                </span>{" "}
                <br />
                <span>
                  The project focuses on deploying interventions that will lead
                  to the drastic reduction of poverty in rural and urban poor
                  communities, ensuring gender equality, ensuring decent work
                  and economic growth for all regardless of sex or status,
                  reduce inequalities at all levels, and partnership between all
                  sectors of the society including the government, private
                  sector, civil society, academia, and local communities.
                </span>
              </p>
              <Link href="/karakata">
                <a className=" inline-flex items-center justify-center lg:justify-start px-8 py-4 border border-transparent shadow-sm text-md leading-4 font-medium rounded-md  bg-white text-primary hover:bg-light-green">
                  Learn More
                </a>
              </Link>
            </div>

            <div className="bg-white rounded-t-lg overflow-hidden transform translate-y-32 w-full lg:-translate-y-36  translate-x-7 lg:translate-x-0">
              <img
                src="helping-woman.png"
                alt=""
                className="w-full h-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-32 pt-32 bg-pink">
        <h2 className="font-extrabold text-custom-black text-3xl lg:text-4xl tracking-wide text-center">
          {thematicAreaSection.sectionTitle}
        </h2>
        <div className="hidden md:block ml-12 lg:ml-24 pt-16">
          <Swiper
            breakpoints={{
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
              1280: { slidesPerView: 3.7 },
            }}
            slidesPerView={2.2}
            spaceBetween={20}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {}}
            onInit={(swiper) => (swiperRef.current = swiper)}
          >
            {thematicAreaSection.thematicAreas.map((thema, idx) => (
              <SwiperSlide key={idx}>
                <Card thema={thema} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:hidden pt-16 flex flex-col justify-center items-center space-y-12">
          {thematicAreaSection.thematicAreas.map((thema, idx) => (
            <Card thema={thema} key={idx} />
          ))}
        </div>
        <div className="hidden md:flex justify-end mt-4 space-x-1 px-8">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className={`inline-flex items-center border border-transparent focus:outline-none ${
              isBeginning ? "text-gray-500" : "text-gray-800"
            }`}
          >
            <ArrowLeftIcon className="h-6 w-12" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className={`inline-flex items-center border border-transparent focus:outline-none ${
              isEnd ? "text-gray-500" : "text-gray-800"
            }`}
          >
            <ArrowRightIcon className="h-6 w-12" />
          </button>
        </div>
      </section>
      <section className="lg:flex lg:h-[950px]">
        <div className="lg:w-1/2 h-full relative">
          <img
            src="future-new.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 px-6 md:px-8 lg:px-12 h-full flex flex-col items-start pb-16 lg:pb-0">
          <h2 className="font-extrabold text-custom-black text-3xl lg:text-5xl mt-14 lg:mt-28">
            Our Future Programmes
          </h2>
          <ul className="mt-6 lg:mt-12 space-y-4 font-light list-disc px-4">
            {futureProgrammes.map((item, idx) => (
              <li
                key={idx}
                className="text-primary leading-loose font-light text-md"
              >
                <span className="text-custom-gray">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="/donate"
            className="flex items-center px-6 py-3 border border-transparent shadow-sm rounded-md text-white bg-primary hover:bg-primary-dark mt-8 xl:mt-16"
          >
            Support us
            <ArrowRightIcon
              className="ml-2 -mr-0.5 h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </>
  );
}
const query = groq`*[_type=='page'&& title=='Home Page']{
  "hero":sections[0]{heading,tagline,backgroundImage{"url":asset->url}},
 "mission":sections[1]->{cta{title,"route":route->slug.current},title,sectionImage{"url":asset->url},sectionTitle,text}
 }[0]`;
const q2 = groq`*[_type=='pageSection' && sectionTitle=='Our Thematic Areas']{
  sectionTitle,
  "thematicAreas":children[]{"bulletPoints":text[]{children[0][]},"image":sectionImage.asset->url,sectionTitle} 
}`;
export async function getStaticProps(context) {
  const queryResult = await Promise.all([
    sanityStaticProps({ context, query: query }),
    sanityStaticProps({ context, query: q2 }),
  ]);

  const pageData = {
    heroSection: queryResult[0].data["hero"],
    missionSection: queryResult[0].data["mission"],
    thematicAreaSection: queryResult[1].data[0],
  };

  return {
    props: {
      pageData,
    },
  };
}
