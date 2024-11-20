"use client";

import React from "react";

const SentMessagebox  = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-end mb-2 relative">
      <div className="absolute -right-2 top-0 w-5 h-4 border-t-8 border-t-green-500 border-r-8 border-r-transparent border-b-8 border-b-transparent"></div>
      <div className="max-w-xs md:max-w-sm p-3 rounded-lg text-white bg-green-500">
        {message}
      </div>
    </div>
  );
};

export default SentMessagebox ;
