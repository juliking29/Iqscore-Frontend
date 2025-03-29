import React, { useEffect, ReactNode, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/footer/Footer';
import SliderHome from '../components/common/SliderHome';
import ChatButtonComponent from '../components/common/Buttons/ChatIA';
import { useTheme } from '../contexts/ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}

interface ThemeProps {
  isDark: boolean;
}

interface LayoutProps {
  isSidebarOpen: boolean;
}

const LayoutContainer = styled.div<ThemeProps>`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isDark ? '#10242c' : '#EAF9D9'};
  color: ${props => props.isDark ? '#EAF9D9' : '#10242c'};
  transition: background-color 0.5s ease, color 0.3s ease;
`;

const MainContent = styled.main<LayoutProps>`
  flex: 1;
  display: flex;
  margin-top: 70px;
  margin-left: ${props => props.isSidebarOpen ? '230px' : '60px'};
  transition: margin-left 0.3s ease;
`;

const NavbarWrapper = styled.div<LayoutProps>`
  margin-left: ${props => props.isSidebarOpen ? '230px' : '60px'};
  position: sticky;
  top: 0;
  z-index: 999;
  transition: margin-left 0.3s ease;
`;

const ContentWrapper = styled.div<LayoutProps>`
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.boxSizing = 'border-box';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.boxSizing = '';
    };
  }, []);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <LayoutContainer isDark={isDark}>
      <NavbarWrapper isSidebarOpen={isSidebarOpen}>
        <Navbar onSidebarToggle={handleSidebarToggle} />
      </NavbarWrapper>

      <MainContent isSidebarOpen={isSidebarOpen}>
        <ContentWrapper isSidebarOpen={isSidebarOpen}>
          {children}
        </ContentWrapper>
      </MainContent>

      <SliderHome />
      <Footer />
      <ChatButtonComponent />
    </LayoutContainer>
  );
};

export default MainLayout;