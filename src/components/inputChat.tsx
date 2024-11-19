"use client";

import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

interface InputChatProps {
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputChat = ({ id, onChange, placeholder, value }: InputChatProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  
  return (
    <form

    className="flex items-center justify-between gap-2 dark:bg-header_dark shadow-input px-4 py-2 absolute bottom-0 left-0 w-full">
      <input
        type="text"
        className="bg-input_dark py-2 px-3 rounded-lg w-full "
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button>
        <IoMdSend size={24} className="text-white_weak" />
      </button>
    </form>
  );
};

export default InputChat;
