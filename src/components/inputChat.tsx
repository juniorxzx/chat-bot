"use client";

import React from "react";
import { IoMdSend } from "react-icons/io";

const InputChat = () => {
  return (
    <div className="flex items-center justify-between gap-2 dark:bg-header_dark shadow-input px-4 py-2 absolute bottom-0 left-0 w-full">
      <input
        type="text"
        className="bg-input_dark py-2 px-3 rounded-lg w-full "
        placeholder="Digite uma mensagem"
      />
      <button>
        <IoMdSend size={24} className="text-white_weak" />
      </button>
    </div>
  );
};

export default InputChat;
