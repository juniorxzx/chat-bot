"use client";

import React, { useEffect, useRef, useState } from "react";
import InputChat from "./inputChat";
import Header from "./header";
import BotSentMessagebox from "./botSentMessagebox";
import SentMessagebox from "./sentMessagebox";
import { validateCpf } from "@/utils/validadeCpf"; // Função extraída para utilitário

const ChatBox = () => {
  const [messages, setMessages] = useState<
    {
      message: string;
      options?: { name: string; value: string }[];
      sender: boolean;
    }[]
  >([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isCpfValid, setIsCpfValid] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático para o final da lista
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Adicionar a mensagem do usuário
    setMessages((prev) => [...prev, { message, sender: true }]);

    if (!isCpfValid) {
      if (validateCpf(message)) {
        setIsCpfValid(true);

        try {
          const response = await fetch(`/api/user/${message}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) throw new Error("Erro na resposta do servidor.");

          const data = await response.json();

          setMessages((prev) => [
            ...prev,
            { message: `CPF validado! ${data.message}`, sender: false },
          ]);

          if (data.dividas?.length > 0) {
            setMessages((prev) => [
              ...prev,
              {
                message: "Aqui estão as suas dívidas:",
                options: data.dividas.map((d: string) => ({
                  name: d.instituicao,
                  value: d.valor,
                })),
                sender: false,
              },
            ]);
          } else {
            setMessages((prev) => [
              ...prev,
              { message: "Nenhuma dívida encontrada.", sender: false },
            ]);
          }
        } catch (error) {
          console.error("Erro ao buscar dívidas:", error);
          setMessages((prev) => [
            ...prev,
            {
              message: "Erro ao buscar dívidas. Tente novamente mais tarde.",
              sender: false,
            },
          ]);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            message: "CPF inválido. Por favor, tente novamente.",
            sender: false,
          },
        ]);
      }
      setInputMessage("");
      return;
    }

    try {
      const response = await fetch("/api/msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem.");

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { message: data.response, options: data.options, sender: false },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prev) => [
        ...prev,
        {
          message: "Erro ao processar sua mensagem. Tente novamente.",
          sender: false,
        },
      ]);
    }

    setInputMessage("");
  };

  useEffect(() => {
    // Mensagem inicial do bot
    setMessages([
      {
        message:
          "Olá, sou sua assistente virtual e vou te auxiliar. Para começar, por favor digite seu CPF (sem pontuação).",
        sender: false,
      },
    ]);
  }, []);

  const handleOptionSelect = (option: { name: string; value: string }) => {
    sendMessage(option.value); // Enviar apenas o valor como mensagem
  };

  return (
    <div className="relative flex flex-col w-full h-full p-2 bg-[url('/plano-bg-dark.jpg')] rounded-lg">
      <Header />

      <div className="flex-1 overflow-y-auto p-4 py-16">
        {messages.map((msg, index) =>
          msg.sender ? (
            <SentMessagebox key={index} message={msg.message} />
          ) : (
            <BotSentMessagebox
              key={index}
              message={msg.message}
              options={msg.options}
              onOptionSelect={handleOptionSelect}
            />
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      <InputChat
        id="input-chat"
        onChange={(e) => setInputMessage(e.target.value)}
        value={inputMessage}
        placeholder="Digite uma mensagem"
        onClick={() => sendMessage(inputMessage)}
        onEnter={() => sendMessage(inputMessage)}
      />
    </div>
  );
};

export default ChatBox;
