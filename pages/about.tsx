import React from "react";
import { Navbar } from "../components";
import { team,coreValues } from "lib/about";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function About() {
  
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid grid-cols-3 gap-9">
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
            <div className="lg:grid grid-cols-3 gap-x-4 gap-y-16 ">
              {coreValues.map((item) => (
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
                      <p className="mt-5 text-center text-md pb-2 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-64 pb-16 bg-custom-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-1/2 relative">
            <img
              src="objectives.png"
              alt=""
              className=" relative z-20 object-cover"
            />
            <img
              src="pattern2.png"
              alt=""
              className="absolute -top-20 -left-16"
            />
          </div>
          <div className="w-1/2">
            <h2 className="font-extrabold text-custom-black text-5xl">
              Our Objectives
            </h2>
            <div className="lg:grid grid-cols-2 gap-x-8 gap-y-12 font-light text-custom-gray mt-12 leading-loose">
              <p>
                To ensure an increased accessibility and provision of
                socio-economic services for the less-privileged and the social
                excluded members of the society.
              </p>
              <p>
                To promote and advocate for the rights of children and support
                young people in building a just,democartic and inclusive
                society, enhancing human security and improving livelihood for
                the poor and excluded.
              </p>
              <p>
                To build the capacity and strengthen the ability of the less
                privileged and poor people mostly in rural areas to hold
                governments at all levels and corporate bodies accountable
                towards enhancing their access to quality services.
              </p>
              <p>
                To improve and increase the literacy level of women, boys and
                girls in rural communities and put in place material and
                non-material facilities that will promote their safety and
                participation in public and private spaces.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <h2 className="font-bold text-custom-black text-5xl text-center">
            Our team
          </h2>
        </div>
      </section>
      <section className="pt-12 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="lg:grid grid-cols-3 gap-x-8 gap-y-16">
            {team.map((member) => (
              <li className="flex flex-col items-center px-4" key={member.name}>
                <div className="relative h-28 w-28 rounded-full overflow-hidden">
                  <div className="absolute inset-0 h-full w-full">
                    <img
                      src={member.image}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-custom-black font-semibold">
                    {member.name}
                  </h3>
                  <h4 className="text-custom-gray-sub text-xs font-light">
                    {member.position}
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="line-clamp-7 font-light text-center mt-8 leading-loose text-[#5e5e5e]">
                    {member.description}
                  </p>
                  <button className="inline-flex text-center text-xs text-primary items-center space-x-1 mt-2 focus:outline-none">
                    <span>Read More</span>
                    <ArrowRightIcon className="h-3 w-3" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
