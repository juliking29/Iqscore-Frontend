import React, { useState } from "react";

interface Message {
  sender: "user" | "ia";
  text: string;
}

const ChatIA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ia",
      text: "Bienvenido al CHAT con mayor precisión para apuestas deportivas, ¿qué equipo o liga te gustaría?",
    },
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const newMessage: Message = { sender: "user", text: message };
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");

      // Simulamos respuesta del bot (opcional)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "ia", text: "¡Gracias por tu mensaje! Aún estoy aprendiendo 😅" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="relative z-10">
      {/* Botón flotante */}
      <div
        className={`fixed top-[80%] w-[60px] h-[70px] bg-[#8400FF] text-white flex flex-col items-center justify-center text-[18px] tracking-[8px] cursor-pointer rounded-l-[10px] shadow-[ -3px_0_8px_rgba(0,0,0,0.2)] transition-all duration-300 z-[999] font-bold font-sans ${
          isOpen ? "right-[450px]" : "right-0"
        } hover:bg-[rgb(82,0,159)]`}
        onClick={toggleChat}
      >
        <img
          src="./images/chatbot.png"
          alt="Chat Icon"
          className="w-[40px] h-[40px]"
        />
      </div>

      {/* Contenedor del chat */}
      <div
        className={`fixed top-[20%] w-[450px] h-[550px] bg-[#CFCFCF] dark:bg-[#181818] shadow-lg transition-transform duration-300 ease-in-out flex flex-col rounded-bl-[10px] overflow-hidden z-[998] border border-[#878787] dark:border-gray-700 ${
          isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"
        }`}
      >
        {/* Área de mensajes */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 text-black dark:text-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#8400FF] text-white dark:bg-[#8400FF]"
                    : "bg-[#e4e4e4] dark:bg-[#2a2a2a]"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input del mensaje */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#222]"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="¿Qué quieres hacer?"
            className="w-full px-4 py-2 rounded-lg bg-[#DEDEDE] dark:bg-[#333] text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none shadow-inner focus:ring-2 focus:ring-[#8400FF]"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatIA;
