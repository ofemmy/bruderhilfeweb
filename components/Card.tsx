import React from "react";
function parsePortableList(portableList) {
  return portableList.map((item) => item.children.text);
}
export default function Card({ thema }) {
  return (
    <div className="h-[578px] w-[329px]  rounded-b-2xl overflow-hidden bg-white border border-gray-200">
      <div className="h-[272px]">
        <img
          src={thema.image}
          alt="Boy in school"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-2 py-4 px-4 flex flex-col space-y-4">
        <h3 className="text-custom-black text-md font-bold px-4 py-1 border-b border-gray-300 w-full">
          {thema.sectionTitle}
        </h3>
       <ul className="space-y-2 font-light list-disc px-4">
          {parsePortableList(thema.bulletPoints).map((point, idx) => (
            <li className="text-primary" key={point}>
              <span className="text-custom-gray">{point}</span>
            </li>
          ))}
        </ul> 
      </div>
    </div>
  );
}
