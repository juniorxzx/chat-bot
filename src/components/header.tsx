"use client";

import Image from "next/image";
import React, { useState } from "react";

import { PiSealCheckFill } from "react-icons/pi";
import { MdOutlineClear, MdMoreVert } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header
        className="flex z-10 items-center  justify-between px-4 py-2 dark:bg-header_dark bg-header_light 
    absolute rounded-lg  top-0 left-0 w-full shadow-header"
      >
        <div className="flex items-center cursor-pointer">
          <div className="pr-4 rounded-full">
            <Image
              src={"/avatar.png"}
              alt="Ícone de perfil"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px]"
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
        <div className="flex gap-2">
          <MdOutlineClear size={20} />
          <MdMoreVert size={20} onClick={() => setOpen(!open)} />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="w-full absolute z-20 bg-header_op_06 h-full bottom-0 left-0">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.4 }}
              className="relative bg-header_dark w-full md:w-1/2 h-full rounded-r-2xl p-4"
            >
              <div
                className="absolute right-2 top-2 z-10"
                onClick={() => setOpen(!open)}
              >
                <MdOutlineClear size={20} />
              </div>
              <div className="absolute left-0  top-0 rounded-b-lg bg-blue-400 w-full h-[150px] z-[9]"></div>
              <div className="w-full flex justify-center items z-10">
                <div className="flex flex-col justify-center items-center gap-4 mt-4">
                  <Image
                    src={"/avatar.png"}
                    alt="Ícone de perfil"
                    width={100}
                    height={100}
                    className="rounded-full z-10 w-[200px] h-[200px]"
                  />
                  <div className="flex gap-1 items-center">
                    <h1 className="text-white_strong font-semibold text-xl leading-4">
                      Renata
                    </h1>
                    <PiSealCheckFill size={18} className="text-[#007BFC]" />
                  </div>
                  <span className="text-white_strong font-normal text-sm leading-4">
                    Sou um assistente do Grupo Ânima e estou aqui porque quero
                    te ajudar com soluções financeiras.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-6 z-10">
                <div className="flex items-center gap-2">
                  <BiWorld size={20} />
                  <a
                    href="https://www.grbsf.com.br/"
                    target="_blank"
                    className="text-blue-300"
                  >
                    https://www.grbsf.com.br/
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extralight">
                    😉 Fechando um acordo comigo você terá ótimas opções de
                    negociação.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extralight">
                    Antes de fazer qualquer pagamento, atente-se ao beneficiário
                    final que sempre será o credor da sua dívida. Em casos de
                    dúvidas, envie um e-mail para:
                    <a
                      href="mailto:confirmeseuboleto@grbsf.com.br"
                      className="ml-2 text-blue-300"
                    >
                      confirmeseuboleto@grbsf.com.br
                    </a>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
