import React from "react";

export default function TextHero({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-16">
      <div className="flex flex-col justify-center items-center space-y-6">
        {children}  
      </div>
    </div>
  );
}
