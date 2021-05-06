import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-custom-gray-light py-24">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-6">
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
        <div>
          <h3 className="text-custom-black font-semibold">Contact</h3>
          <div className="mt-4 font-light text-custom-gray">
            <p>1. Bola Ajibola Street, off Allen Avenue,</p>
            <p>Ikeja Lagos, Nigeria.</p>
            <p className="mt-1">+234-8100015495</p>
            <p>+234-7035654677</p>
            <p>+234-8032963838</p>
            <p className="mt-1">info@bruder-hilfe.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-custom-black font-semibold">Donate</h3>
          <div className="mt-4 font-light text-custom-gray">
            <p>Guaranty Trust Bank</p>
            <p>Acc Name: Bruderhilfe Social</p>
            <p>Developmnet Initiative</p>
            <p>
              Acc No:{" "}
              <span className="text-custom-black font-normal">0263296599</span>
            </p>
            <p className="mt-2">Keystone Bank</p>
            <p>Acc Name: Bruderhilfe Social</p>
            <p>Developmnet Initiative</p>
            <p>
              Acc No:{" "}
              <span className="text-custom-black font-normal">1006879560</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-custom-black font-semibold">Connect with us</h3>
          <div className="flex space-x-6 mt-4">
            <a href="/">
              <img src="facebook.png" alt="" />
            </a >
            <a href="/">
              <img src="twitter.png" alt="" />
            </a>
            <a href="/">
              <img src="instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
