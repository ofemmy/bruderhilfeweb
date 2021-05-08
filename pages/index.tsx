import { Navbar, Hero, Card, Footer } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
export default function Home(params) {
  const swiperRef = useRef(null);
  const thematic = [
    {
      title: "Education",
      actions: [
        "Scholarship",
        "Renovation of schools",
        "Provision of educationsl materials",
      ],
      imgSrc: "education.png",
    },
    {
      title: "Health",
      actions: [
        "Renovation of health centers",
        "Medical outreaches to rural areas",
        "Training of health workers",
      ],
      imgSrc: "health.png",
    },
    {
      title: "Socio-economic empowerment",
      actions: [
        "Provision of mobility carts to people living with disabilities",
        "Provision of seed grants to women and youths",
        "Economic empowerment and training",
        "Acess to financial services",
      ],
      imgSrc: "development.png",
    },
    {
      title: "Advocacy",
      actions: [
        "Engaging in advocacy for inclusive governance",
        "Organising seminars and training on transparency and accountability",
        "Local community engagement",
        "Creating awareness through the media",
      ],
      imgSrc: "advocacy.jpeg",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center relative space-x-16">
          <div className="w-1/2 relative z-20">
            <img
              src="vision.png"
              alt="Bruder Hilfe vision"
              className="w-full h-full relative z-20 object-cover"
            />
            <img
              src="pattern2.png"
              alt=""
              className="absolute -bottom-12 -left-20 h-[336.73px] w-[228px]"
            />
          </div>
          <div className="w-1/2 space-y-8">
            <h2 className="text-custom-black font-extrabold text-4xl tracking-wide mt-12">
              Our Vision
            </h2>
            <p className="text-custom-gray leading-relaxed font-light text-md">
              Bruder Hilfe is a charity organization located in Nigeria and
              Germany, dedicated to improving the health, education, of
              children, men and women both in cities and rural areas through
              community projects, infrastructural projects thereby creating more
              opportunities for children, adults and families in rural areas and
              communities. <br /> Our mission is to embark on sustainable
              social-economic initiatives and programmes that will lead to the
              empowerment of the disadvantaged and marginalized members of the
              society and ensure the fulfilment of the right of all humans to
              live in security, dignity and peace.
            </p>
            <Link href="/donate">
              <a className="inline-flex items-center px-8 py-4 border border-transparent shadow-sm text-md leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                Learn More
              </a>
            </Link>
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
          <div className="relative mx-auto flex justify-between py-16 pl-28 space-x-20">
            <div className="space-y-8 text-white w-1/2">
              <h2 className="font-extrabold text-4xl tracking-wide">
                Project K&aacute;r&agrave; - K&aacute;t&agrave;
              </h2>
              <p className="leading-relaxed font-light text-md">
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
              <Link href="/donate">
                <a className="inline-flex items-center px-8 py-4 border border-transparent shadow-sm text-md leading-4 font-medium rounded-md  bg-white text-primary hover:bg-light-green">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="bg-white rounded-t-lg overflow-hidden transform -translate-y-36">
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
        <h2 className="font-extrabold text-custom-black text-4xl tracking-wide text-center">
          Our Thematic Areas
        </h2>
        <div className="ml-28 pt-16">
          <Swiper
            slidesPerView={3.5}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
            onInit={(swiper) => (swiperRef.current = swiper)}
          >
            {thematic.map((thema, idx) => (
              <SwiperSlide key={thema.title}>
                <Card thema={thema} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-end mt-4 space-x-1 px-8">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className={`inline-flex items-center border border-transparent focus:outline-none ${
              swiperRef.current?.isBeginning ? "text-gray-500" : "text-gray-800"
            }`}
          >
            <ArrowLeftIcon className="h-6 w-12" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className={`inline-flex items-center border border-transparent focus:outline-none ${
              swiperRef.current?.isEnd ? "text-gray-500" : "text-gray-800"
            }`}
          >
            <ArrowRightIcon className="h-6 w-12" />
          </button>
        </div>
      </section>
    </>
  );
}
