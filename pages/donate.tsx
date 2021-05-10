import React from "react";
import Head from "next/head";
import { Navbar, SubHero, TextHero } from "components";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { budgetListings } from "lib/current";
export default function Donate() {
  return (
    <>
    <Head>
        <title>Donate | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <TextHero>
        <h2 className="text-custom-black font-bold text-3xl lg:text-6xl">
          Current Project
        </h2>
        <h3 className="text-custom-gray font-light">
          We help millions of the needy
        </h3>
      </TextHero>
      <div className="relative">
        <SubHero imgUrl="current.png" />
        <div className="absolute bottom-0 inset-x-1/2 h-[78px] w-[317px] lg:h-52 lg:w-[55rem] flex justify-between transform -translate-x-1/2 translate-y-1/2 text-white uppercase lg:text-3xl font-semibold">
          <div className="bg-deep-purple h-full w-1/2 flex justify-center items-center ">
            <h2 className="text-center ">
              Project <br />
              Karakata
            </h2>
          </div>
          <div className="bg-primary h-full w-1/2 flex justify-center items-center">
            <h2 className="text-center">
              Donate <br /> now
            </h2>
          </div>
        </div>
      </div>
      <section className="bg-light-green py-20 lg:py-64">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <p className="lg:text-center text-custom-gray leading-loose font-light lg:text-xl">
            Project Karakata (Kara-kata been a Yoruba parlance name for Economic
            and commercial activities that is inclusive) focuses on deploying
            and implementing practical and sustainable economic empowerment and
            skill acquisitions programmes for 200 women in rural and urban poor
            communities in Lagos, Ogun and Niger States in Nigeria who have
            little access to sustainable economic livelihoods. The project
            focuses on deploying interventions that will lead to the drastic
            reduction of poverty in rural and urban poor communities, ensuring
            gender equality, ensuring decent work and economic growth for all
            regardless of sex or status, reduce inequalities at all levels, and
            partnership between all sectors of the society including the
            government, private sector, civil society, academia, and local
            communities.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-36 bg-pink">
        <h2 className="font-bold text-custom-black  text-3xl lg:text-5xl  text-center">
          Planned Use of Funds
        </h2>
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center space-y-16">
          <div className="flex flex-col lg:flex-row lg:space-x-6  space-y-12 lg:space-y-0 justify-center">
            {budgetListings.map((budget, idx) => (
              <div key={idx} className="lg:w-1/3">
                <p className="text-custom-gray-sub text-sm uppercase">Budget</p>
                <h2 className="text-deep-purple font-bold text-3xl mt-2 pb-1">
                  <span>{budget.amountNGN}</span>/ <br />
                  <span>{budget.amountUSD}</span>
                </h2>
                <div className="h-1 border-t border-gray-400 w-4/6"></div>
                <div className="my-4 flex flex-col justify-between space-y-6">
                  <h3 className="text-custom-black text-2xl font-semibold flex flex-col">
                    <span>{budget.location1}</span>
                    <span>{budget.location2}</span>
                  </h3>

                  <ul className="space-y-4 font-light list-disc px-4">
                    {budget.items.map((item) => (
                      <li key={item} className="text-primary">
                        <span className="text-custom-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <a 
          href="/"
          className="md:-ml-24 lg:-ml-0 inline-flex items-center px-6 py-4 border border-transparent shadow-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
          Donate Now
          <ArrowRightIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
        </a>
        </div>
        
      </section>
    </>
  );
}
