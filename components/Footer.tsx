import React from "react";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "components";

export default function Footer() {
  return (
    <div className="bg-custom-gray-light py-12 lg:py-24">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid grid-cols-4 gap-6 space-y-6 lg:space-y-0">
        <div>
          <Link href="/">
            <a className="flex-none">
              <span className="sr-only">
                Bruder Hilfe Social Development Initiative
              </span>
              <img src="/logo.png" alt="" className="h-6 sm:h-8 w-auto" />
            </a>
          </Link>
        </div>
        <div className="leading-loose">
          <h3 className="text-custom-black font-semibold">Contact</h3>
          <div className="lg:mt-4 font-light text-custom-gray">
            <p>1. Bola Ajibola Street, off Allen Avenue,</p>
            <p>Ikeja Lagos, Nigeria.</p>
            <p className="">+234-8100015495</p>
            <p>+234-8028283993</p>
            <p>+234-8032963838</p>
            <p className="">info@bruder-hilfe.com</p>
          </div>
        </div>
        <div className="leading-loose">
          <h3 className="text-custom-black font-semibold">Donate</h3>
          <div className="lg:mt-4 font-light text-custom-gray">
            <p>Guaranty Trust Bank</p>
            <p>Acc Name: Bruderhilfe Social</p>
            <p>Development Initiative</p>
            <p>
              Acc No:{" "}
              <span className="text-custom-black font-normal">0263296599</span>
            </p>
            <p className="lg:mt-1 mt-4">Keystone Bank</p>
            <p>Acc Name: Bruderhilfe Social</p>
            <p>Development Initiative</p>
            <p>
              Acc No:{" "}
              <span className="text-custom-black font-normal">1006879560</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-custom-black font-semibold">Connect with us</h3>
          <div className="flex space-x-6 mt-4">
            <a href="https://facebook.com/BruderhilfeSDI" target="_blank">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/BruderHilfeSDI?s=08" target="_blank">
              <TwitterIcon />
            </a>
            <a
              href=" https://youtube.com/channel/UCnTzhUlxIpOM15ZnH3WK2gw"
              target="_blank"
            >
              <YoutubeIcon />
            </a>
            <a href="https://www.instagram.com/bruderhilfe" target="_blank">
              <img src="/insta.png" alt="" className="h-6 -mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
