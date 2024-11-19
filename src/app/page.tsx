'use client'

import InputChat from "@/components/inputChat";
import LayoutGrid from "@/components/layoutGrid";
import Messagebox from "@/components/messagebox";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  return (
    <LayoutGrid>
      <Messagebox />

      <InputChat
        id="input-chat"
        onChange={onChangeMessage}
        value={message}
        placeholder="Digite uma mensagem"
      />
      
    </LayoutGrid>
  );
}
