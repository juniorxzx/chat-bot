"use client";

import Image from "next/image";
import React from "react";

import { PiSealCheckFill } from "react-icons/pi";
const Header = () => {
  return (
    <header className="px-4 py-2 dark:bg-header_dark bg-header_light absolute top-0 left-0 w-full shadow-header">
      <div className="flex items-center cursor-pointer">
        <div className="pr-4 rounded-full">
          <Image
            src={"/avatar.png"}
            alt="Ícone de perfil"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center">
            <h1 className="text-white_strong font-semibold text-base leading-4">
              Renata
            </h1>
            <PiSealCheckFill size={18} className="text-[#007BFC]" />
          </div>
          <span className="text-xs leading-4 text-white_weak">Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
