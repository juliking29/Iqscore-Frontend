import Navbar from '../components/common/Navbar/Navbar.tsx';
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from '../components/common/footer/Footer.tsx';
import ChatIA from '../components/common/Buttons/ChatIA.tsx';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Content = styled.main`  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <MainContainer>
                <Navbar />
                <Content>{children}</Content>
                <Footer />
                <ChatIA />
            </MainContainer>
        </>
    );
};

export default MainLayout;