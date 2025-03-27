import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/footer/Footer';
import MainNavigation from '../components/common/Cards/MainNavigation';
import PlayerOfTheWeek from '../components/common/Cards/PlayerOfTheWeek';
import SliderHome from '../components/common/SliderHome';
import Favorite from '../components/common/Cards/Favorite';
import ChatButtonComponent from '../components/common/Buttons/ChatIA';
import Ad1 from '../components/common/Cards/ADS/Ad1';
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
  background-color: ${props => props.isDark ? '#10242c' : '#EAF9D9'};
  color: ${props => props.isDark ? '#EAF9D9' : '#10242c'};
  transition: background-color 0.5s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  padding: 20px;
  margin-top: -40px; // Este margen puede ser necesario si el Navbar tiene altura
`;

const NavigationWrapper = styled.div`
  width: 250px;
`;

const ContentWrapper = styled.div`
  width: 0%;
  flex: 1;
  padding-left: 20px;
`;

const FavoritesWrapper = styled.div`
  flex-shrink: 0; // Evita que se reduzca el tamaño
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
      <MainContent>
        <NavigationWrapper>
          <MainNavigation />
          <PlayerOfTheWeek />
        </NavigationWrapper>
        <ContentWrapper>
          <SliderHome /> <br />
          {children}
        </ContentWrapper>
        <FavoritesWrapper>
          <Favorite />
          <Ad1 />
        </FavoritesWrapper>
      </MainContent>
      <Footer />
      <ChatButtonComponent />
    </LayoutContainer>
  );
};

export default MainLayout;