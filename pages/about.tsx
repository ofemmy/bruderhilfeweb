import React from "react";
import { Navbar } from "../components";

export default function About() {
  const coreValues = [
    {
      title: "Godliness",
      text:
        "We are moved and are guided by a sense of godliness manifested in showing love and concerns to our neighbours especially the disadvantaged and lowly ones as we love and value ourselved which God Himself exemplified.",
      coverImg: "godliness.png",
    },
    {
      title: "Helping",
      text:
        "We see ourselves as a group of people with helping hand to lift up the downtrodden from their lowly positions.",
      coverImg: "helping.png",
    },
    {
      title: "Brotherhood",
      text:
        "To be part of a people with the mind of extending hands of love and devoted service to make the society a better and more equitable one.",
      coverImg: "brotherhood.png",
    },
    {
      title: "Integrity",
      text:
        "We are determined to be steadfast, thorough, consistent in our activities, planning, and implementation and in abiding with values, principles that shaped our work.",
      coverImg: "integrity.png",
    },
    {
      title: "Transparency",
      text:
        "We are open in our conduct, in making decision and interaction with people regardless of status and condition.",
      coverImg: "transparency.png",
    },
    {
      title: "Accountability",
      text:
        "We are responsible and accountable for our actions as an organisation. We owe it as stewards to be accountable to God and to people He surrounds us with.",
      coverImg: "accountability.png",
    },
    {
      title: "Equity",
      text:
        "We are committed to a fair and impartial view of people and strongly believe in equal opportunities for everyone regardless of age, gender, race, religion, disability, location and health status.",
      coverImg: "equity.png",
    },
    {
      title: "Positive Attitude",
      text:
        "We are always guided by a sense of optimism in the successful implementation of our programmes despite the internal and external challenges that surrounds us.",
      coverImg: "postive-attitude.png",
    },
    {
      title: "Teamwork",
      text:
        "We energetically work together to bring an end to discrimination, socio-economic exclusion and poverty.",
      coverImg: "teamwork.png",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-16">
        <h2 className="text-custom-black font-bold text-6xl">About us</h2>
      </div>
      <section className="h-[585px] relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="about.png"
            alt="Two girls with the world map"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 shadow h-[548px]"></div>
      </section>
      <section className="py-24 bg-light-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center space-y-6">
          <p className="font-light text-custom-gray text-sm">
            Bruderhilfe is a non-governmental organization duly registered with
            the Corporate Affairs Comission (CAC) in 2017.
          </p>
          <p className="text-2xl text-custom-black text-center leading-loose">
            Bruderhilfe is dedicated to improving the health, education of
            children and youth in rural and urban societies, embarking on
            sustainable community development projects, and creating
            socio-economic opportunities for children, women and families in
            rural communities.
          </p>
          <p className="text-md text-custom-gray text-center font-light leading-loose">
            We focus on the excluded members of the societies, the less
            privileged and rural, hard-to-reach communities with little access
            to socio-economic development programmes of government and private
            corporations. The organisation &#40;as our name translated into
            English <em>Brotherly Help</em> indicates&#41; seeks as a broad goal
            to improve the quality of life for all, but with particular emphasis
            on the vulnerable and undeserved populations.
          </p>
        </div>
      </section>
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-9">
          <div className="text-white">
            <img src="book.png" alt="" />
            <h3 className="text-white font-bold text-2xl tracking-wide mt-6">
              Education
            </h3>
            <p className="font-light text-base mt-6 leading-loose">
              We work on promoting rights to qualitative education through the
              human rights based approach to development. Bruderhilfe through
              community sensitization, mobilization, capacity building,
              scholarships, and project modelling with specific emphasis on
              basis education is working and will continue to work in the basic
              education sector in different parts of Nigeria.
            </p>
          </div>
          <div className="text-white">
            <img src="arrow.png" alt="" />
            <h3 className="text-white font-bold text-2xl tracking-wide mt-6">
              Social Inclusion
            </h3>
            <p className="font-light text-base mt-6 leading-loose">
              We are committed to working on the sustainabile ways of improving
              the terms of participation in society, particularly for people who
              are disadvantaged, through enhancing opportunities, access to
              resources, voice and respect for rights.
            </p>
          </div>
          <div className="text-white">
            <img src="womenchildren.png" alt="" />
            <h3 className="text-white font-bold text-2xl tracking-wide mt-6">
              Women and Children
            </h3>
            <p className="font-light text-base mt-6 leading-loose">
              We are working on promoting rights of women and children with
              specific emphasis on gender equity and gender sensitivity. We do
              these through empowerment like disbursement of seed grant to boost
              local businesses of women, renovation and provision of educational
              materials for childreb in educationally disadvantaged regions, all
              with the aim of improving livelihoods of families in rural
              communities.
            </p>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="font-bold text-custom-black text-5xl text-center">
            Our core values
          </h2>
          <div className="mt-12">
            <div className="grid grid-cols-3 gap-x-4 gap-y-16 ">
                {
                    coreValues.map(item=>(
              <div className="h-541px w-358 overflow-hidden" key={item.title}>
                <div className="h-[272px] relative w-358">
                  <img
                    src={item.coverImg}
                    alt=""
                    className=" absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="bg-primary font-light text-white ">
                  <div className="px-6 py-8 flex flex-col  items-center overflow-hidden h-[270px]">
                    <h3 className="font-semibold tracking-wide text-md">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-center text-md pb-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>

                    ))
                }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
