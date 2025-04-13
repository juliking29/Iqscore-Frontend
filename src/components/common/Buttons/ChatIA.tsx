import React, { useState } from "react";

interface ChatIAProps {}

const ChatIA: React.FC<ChatIAProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      {/* Sidebar Button */}
      <div
        className={`fixed top-[80%] w-[60px] h-[70px] bg-[#8400FF] text-white flex flex-col items-center justify-center text-[18px] tracking-[8px] cursor-pointer rounded-l-[10px] shadow-[ -3px_0_8px_rgba(0,0,0,0.2)] transition-all duration-300 z-[999] font-bold font-sans ${
          isOpen ? 'right-[450px]' : 'right-0'
        } hover:bg-[rgb(82,0,159)]`}
        onClick={toggleChat}
      >
        <img
          src="./images/chatbot.png"
          alt="Chat Icon"
          className="w-[40px] h-[40px]"
        />
      </div>

      {/* Chat Container */}
      <div
        className={`fixed top-[20%] w-[450px] h-[550px] bg-[#181818] shadow-lg transition-transform duration-300 ease-in-out flex flex-col rounded-bl-[10px] overflow-hidden z-[2] ${
          isOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'
        }`}
      >
        {/* Welcome Message */}
        <div className="bg-[#1a2c38] p-[15px] m-[20px_15px] rounded-[8px] text-[14px] shadow-[0_2px_5px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.05)] leading-[1.4] font-sans font-bold">
          Bienvenido al CHAT con mayor precisión para apuestas deportivas, ¿qué equipo o liga te gustaría?
        </div>

        {/* Input */}
        <div className="absolute bottom-0 w-full p-[15px] rounded-br-[10px]">
          <input
            type="text"
            placeholder="¿Qué quieres hacer?"
            className="w-full p-[10px_8px] rounded-[10px] bg-[#222] text-white text-[14px] placeholder-[#aaa] focus:outline-none shadow-inner shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),_0_0_0_2px_rgba(255,255,255,0.1)] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatIA;
