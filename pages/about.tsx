import React from "react";
import { Navbar } from "../components";

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
              
          </div>
        </div>
      </section>
    </>
  );
}
