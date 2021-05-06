import React from "react";

export default function Card({ thema }) {
  return (
    <div className="h-[578px] w-[329px] border border-gray-300 rounded-b-2xl overflow-hidden">
      <div className="h-[272px]">
        <img src={thema.imgSrc} alt="Boy in school" className="h-full w-full object-cover" />
      </div>
      <div className="py-4 px-4 flex flex-col space-y-4">
        <h3 className="text-custom-black text-md font-bold px-4 py-1 border-b border-gray-300 w-full">
          {thema.title}
        </h3>
        <ul className="space-y-2 font-light list-disc px-4">
          {thema.actions.map((action, idx) => (
            <li
              className="text-primary"
              key={action}
            >
              <span className="text-custom-gray">{action}</span>
            </li>
          ))}

          {/* <li className="text-custom-gray flex items-center space-x-2">
            <div className="h-[6px] w-[6px] bg-primary rounded-full"></div>
            <span>Renovation of schools</span>
          </li>
          <li className="text-custom-gray flex items-center space-x-2">
            <div className="h-[6px] w-[6px] bg-primary rounded-full"></div>
            <span>Provision of educational materials</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
