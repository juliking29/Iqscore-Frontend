import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/footer/Footer';
import { useTheme } from '../contexts/ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}

interface ThemeProps {
  isDark: boolean;
}

const LayoutContainer = styled.div<ThemeProps>`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isDark ? '#282829' : '#F7F3E3'};
  color: ${props => props.isDark ? '#F7F3E3' : '#282829'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  return (
    <LayoutContainer isDark={isDark}>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;