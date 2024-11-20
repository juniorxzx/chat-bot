"use client";

import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

interface InputChatProps {
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  value: string;
  onEnter?: () => void;
}

const InputChat = ({
  id,
  onChange,
  placeholder,
  value,
  onClick,
  onEnter,
}: InputChatProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };
  return (
    <div className="flex items-center justify-between gap-2 dark:bg-header_dark shadow-input px-4 py-2 absolute bottom-0 left-0 w-full">
      <input
        type="text"
        value={value}
        className="bg-input_dark py-2 px-3 rounded-lg w-full "
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleKeyDown}
        onBlur={() => setIsFocused(false)}
      />
      <button onClick={onClick}>
        <IoMdSend size={24} className="text-white_weak" />
      </button>
    </div>
  );
};

export default InputChat;
