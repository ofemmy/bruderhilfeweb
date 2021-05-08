import React from "react";

export default function SubHero({ imgUrl, altText = "" }) {
  return (
    <section className="h-[585px] relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={imgUrl}
          alt={altText}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 shadow h-[548px]"></div>
    </section>
  );
}
