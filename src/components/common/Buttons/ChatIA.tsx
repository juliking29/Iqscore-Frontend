import React, { useState } from "react";
import styled from "styled-components";

interface ChatContainerProps {
  isOpen: boolean;
}

const ChatWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const ChatContainer = styled.div<ChatContainerProps>`
  position: fixed;
  right: 0;
  top: 20%;
  width: 450px;
  height: 550px;
  background-color: #181818;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateX(${props => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0 10px;
  overflow: hidden;
`;

const SidebarButton = styled.div<ChatContainerProps>`
    font-family: "Funnel Display", sans-serif;
    font-weight: 700;
  font-style: normal;
  position: fixed;
  right: ${props => (props.isOpen ? "450px" : "0")};
  top: 80%;
  width: 60px;
  height: 70px;
  background-color: #8400FF;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 8px;
  cursor: pointer;
  line-height: 1.5;
  border-radius: 10px 0 0 10px; 
  box-shadow: -3px 0 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 999;

  &:hover {
    background-color:rgb(82, 0, 159);
  }
`;

const WelcomeMessage = styled.div`
  font-family: "Funnel Display", sans-serif;
  background-color: #1a2c38;
  padding: 15px;
  margin: 20px 15px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  line-height: 1.4;
`;

const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  border-radius: 0 0 0 10px;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-radius: 10px;
  background-color: #222;
  color: white;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(255, 255, 255, 0.1);
  }
`;

const ChatIA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatWrapper>
      <SidebarButton onClick={toggleChat} isOpen={isOpen}>
        <img src="./images/chatbot.png" alt="Chat Icon" style={{ width: "40px", height: "40px" }} />
      </SidebarButton>

      <ChatContainer isOpen={isOpen}>
        <WelcomeMessage>
          Bienvenido al CHAT con mayor precisión para apuestas deportivas, ¿qué equipo o liga te gustaría?
        </WelcomeMessage>

        <InputContainer>
          <ChatInput placeholder="¿Qué quieres hacer?" />
        </InputContainer>
      </ChatContainer>
    </ChatWrapper>
  );
};

export default ChatIA;