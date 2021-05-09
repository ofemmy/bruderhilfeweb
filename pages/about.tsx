import React, { useEffect, useRef } from "react";
import { sanityStaticProps, useSanityQuery } from "lib/sanity";
import { classNames, parsePortableText } from "lib/utils";
import { groq } from "next-sanity";
import {
  BookIcon,
  Navbar,
  SocialIcon,
  SubHero,
  TextHero,
  WomanIcon,
} from "components";
import { team, coreValues } from "lib/about";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useIcon } from "../lib/useIcon";

export default function About({ pageData }) {
  const { hero, whoWeAre, interventionAreas } = pageData;
  const [p1, p2, p3] = parsePortableText(pageData.whoWeAre.text);
  const testRef = useRef(null);
  const showMore = (e) =>
    e.target.parentNode.parentNode.firstElementChild.classList.toggle(
      "line-clamp-7"
    );
  return (
    <>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-6xl">{hero.heading}</h2>
        <h3 className="text-custom-gray font-light">
          We help millions of the needy
        </h3>
      </TextHero>
      <SubHero imgUrl={hero.backgroundImageUrl} />

      <section className="py-24 bg-light-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center space-y-6">
          <p className="font-light text-custom-gray text-sm">{p1}</p>
          <p className="text-2xl text-custom-black text-center leading-loose">
            {p2}
          </p>
          <p className="text-md text-custom-gray text-center font-light leading-loose">
            {p3}
          </p>
        </div>
      </section>
      <section className="py-32 bg-f0fff8">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 lg:grid grid-cols-3 gap-6">
          {interventionAreas.areas.map((area) => (
            <div className="text-custom-gray" key={area.sectionTitle}>
              {useIcon(area.sectionTitle)}

              <h3 className="text-primary font-bold text-2xl tracking-wide mt-8">
                {area.sectionTitle}
              </h3>
              <p className="font-light text-base mt-12 leading-loose">
                {parsePortableText(area.text)}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <h2 className="font-bold text-custom-black text-5xl text-center">
            Our core values
          </h2>
          <div className="mt-32">
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
        <div className="absolute p-[11.65rem] bg-pink bottom-0 inset-x-0"></div>
      </section>
      <section className="pt-64 pb-16 bg-pink">
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
      </section>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-custom-black text-5xl text-center">
            Our team
          </h2>
          <ul className="lg:grid grid-cols-3 gap-x-8 gap-y-16 mt-24">
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
                  <p
                    className={classNames(
                      "line-clamp-7 font-light text-center mt-8 leading-loose text-[#5e5e5e]"
                    )}
                  >
                    {member.description}
                  </p>
                  <button
                    onClick={showMore}
                    className="inline-flex text-center text-xs text-primary items-center space-x-1 mt-2 focus:outline-none"
                  >
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
const pageQuery = groq`*[_type=='page' && title=='About us']{
  "hero":sections[0]{"backgroundImageUrl":backgroundImage.asset->url,heading},
  "whoWeAre":sections[1]->{text},
  "interventionAreas":sections[2]->{sectionTitle,"areas":children[]{sectionTitle,text}}
}[0]`;
export async function getStaticProps(context) {
  const res = await sanityStaticProps({ context, query: pageQuery });

  return {
    props: {
      pageData: res.data,
    },
  };
}
