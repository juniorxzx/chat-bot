"use client";

import React from "react";

interface BotSentMessagebox {
  message: string;
  options?: { name: string; value: string }[];
  onOptionSelect?: (option: { name: string; value: string }) => void;
}

const BotSentMessagebox = ({
  message,
  options,
  onOptionSelect,
}: BotSentMessagebox) => {
  return (
    <div
      className={`flex justify-start mb-2 ${options ? "flex-col" : "flex-row"}`}
    >
      <div className="relative max-w-xs md:max-w-sm p-3 rounded-lg text-white bg-gray-500">
        <div className="absolute -left-2 top-0 w-5 h-4 border-t-8 border-t-gray-500 border-l-8 border-l-transparent border-b-8 border-b-transparent"></div>
        {message}
      </div>
      {options && (
        <div className="mt-2 flex flex-col space-y-2 w-fit">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onOptionSelect?.(option)}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600  text-start"
            >
              {option.name} - {option.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BotSentMessagebox;
