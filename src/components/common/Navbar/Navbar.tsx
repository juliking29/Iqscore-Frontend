import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../../contexts/ThemeContext";

interface NavbarProps {
  onSearch?: (query: string) => void;
  onSidebarToggle?: (isOpen: boolean) => void;
}

interface SidebarProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => (theme === "dark" ? "#192E36" : "#303cc4")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  padding: 12px 24px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 12px 16px;
  }
`;

const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "230px" : "60px")};
  background-color: #192e36;
  color: #fff;
  transition: all 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "20px" : "10px")};
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  & > *:not(button):first-of-type {
    margin-top: 60px;
  }
`;

const SidebarToggle = styled.button<SidebarProps>`
  position: fixed;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? "190px" : "20px")};
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 30px;
  height: 30px;
  z-index: 201;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${({ isOpen }) =>
    !isOpen
      ? `
    span {
      margin: 2px 0;
    }
    span:nth-child(1) {
      transform: none;
    }
    span:nth-child(2) {
      opacity: 1;
    }
    span:nth-child(3) {
      transform: none;
    }
    `
      : `
    span:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
    `}
`;

const SectionTitle = styled.h3<SidebarProps>`
  font-family: "Funnel Display", sans-serif;
  font-weight: 700;
  font-style: normal;
  border-bottom: 2px solid #fdddfc;
  padding-bottom: 10px;
  margin-top: 20px;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ListItem = styled.li<SidebarProps>`
  font-family: "Funnel Display", sans-serif;
  list-style: none;
  margin: 10px 0;
  padding: 4px;
  cursor: pointer;
  white-space: nowrap;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

const IconOnly = styled.div<SidebarProps>`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  font-size: 24px;

  span {
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
    margin: 16px 0;
    order: 2;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input<{ theme: string }>`
  font-family: "Funnel Display", sans-serif;
  width: 100%;
  background-color: ${({ theme }) => (theme === "dark" ? "#2F4553" : "#F0F0F0")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  border-radius: 10px;
  padding: 8px 16px 8px 40px;
  border: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => (theme === "dark" ? "#a0a0a0" : "#606060")};
  }
`;

const SearchIcon = styled.button<{ theme: string }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => (theme === "dark" ? "#a0a0a0" : "#606060")};
  width: 20px;
  height: 20px;
  padding: 0;
  cursor: pointer;
`;

const NavLink = styled(Link)<{ theme: string }>`
  font-family: "Funnel Display", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

const ConfigButton = styled.button<{ theme: string }>`
  background: none;
  border: none;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ onSearch, onSidebarToggle }) => {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    if (onSidebarToggle) {
      onSidebarToggle(newState);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("searchQuery") as string;
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <>
      <SidebarContainer isOpen={isSidebarOpen}>
        <SidebarToggle
          onClick={handleSidebarToggle}
          isOpen={isSidebarOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </SidebarToggle>

        {!isSidebarOpen ? (
          <IconOnly isOpen={isSidebarOpen}>
            <span>⚽</span>
            <span>🏆</span>
            <span>⭐</span>
            <span>📌</span>
          </IconOnly>
        ) : (
          <>
            <SectionTitle isOpen={isSidebarOpen}>POPULARES</SectionTitle>
            <ul>
              <ListItem isOpen={isSidebarOpen}>Premier League</ListItem>
              <ListItem isOpen={isSidebarOpen}>La Liga</ListItem>
              <ListItem isOpen={isSidebarOpen}>Serie A</ListItem>
              <ListItem isOpen={isSidebarOpen}>Champions League</ListItem>
              <ListItem isOpen={isSidebarOpen}>Europa League</ListItem>
              <ListItem isOpen={isSidebarOpen}>Bundesliga</ListItem>
              <ListItem isOpen={isSidebarOpen}>Conmebol Libertadores</ListItem>
              <ListItem isOpen={isSidebarOpen}>Copa Sudamericana</ListItem>
            </ul>

            <SectionTitle isOpen={isSidebarOpen}>EQUIPOS PRINCIPALES</SectionTitle>
            <ul>
              <ListItem isOpen={isSidebarOpen}>Real Madrid</ListItem>
              <ListItem isOpen={isSidebarOpen}>Liverpool</ListItem>
              <ListItem isOpen={isSidebarOpen}>Barcelona</ListItem>
              <ListItem isOpen={isSidebarOpen}>Juventus</ListItem>
              <ListItem isOpen={isSidebarOpen}>America De Cali</ListItem>
              <ListItem isOpen={isSidebarOpen}>Bucaramanga FC</ListItem>
              <ListItem isOpen={isSidebarOpen}>Manchester City</ListItem>
              <ListItem isOpen={isSidebarOpen}>Paris SG</ListItem>
              <ListItem isOpen={isSidebarOpen}>Arsenal</ListItem>
            </ul>

            <SectionTitle isOpen={isSidebarOpen}>FAVORITOS</SectionTitle>
            <ul>
              <ListItem isOpen={isSidebarOpen}>Premier League</ListItem>
              <ListItem isOpen={isSidebarOpen}>La Liga</ListItem>
              <ListItem isOpen={isSidebarOpen}>Serie A</ListItem>
              <ListItem isOpen={isSidebarOpen}>Champions League</ListItem>
              <ListItem isOpen={isSidebarOpen}>Europa League</ListItem>
              <ListItem isOpen={isSidebarOpen}>Bundesliga</ListItem>
              <ListItem isOpen={isSidebarOpen}>Conmebol Libertadores</ListItem>
              <ListItem isOpen={isSidebarOpen}>Real Madrid</ListItem>
              <ListItem isOpen={isSidebarOpen}>Juventus</ListItem>
              <ListItem isOpen={isSidebarOpen}>America de Cali</ListItem>
              <ListItem isOpen={isSidebarOpen}>Bucaramanga FC</ListItem>
            </ul>

            <SectionTitle isOpen={isSidebarOpen}>PRINCIPAL</SectionTitle>
            <ul>
              <ListItem isOpen={isSidebarOpen}>EQUIPOS</ListItem>
              <ListItem isOpen={isSidebarOpen}>LIGAS</ListItem>
            </ul>
          </>
        )}
      </SidebarContainer>

      <NavbarContainer theme={theme}>
        <NavbarLeft></NavbarLeft>

        <NavbarCenter>
          <SearchContainer>
            <form onSubmit={handleSearch}>
              <SearchInputWrapper>
                <SearchInput
                  type="text"
                  name="searchQuery"
                  placeholder="Busca una liga o equipo"
                  theme={theme}
                />
                <SearchIcon type="submit" theme={theme}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </SearchIcon>
              </SearchInputWrapper>
            </form>
          </SearchContainer>
        </NavbarCenter>

        <NavbarRight>
          <NavLink to="/" theme={theme}>
            INICIO
          </NavLink>
          <NavLink to="/leagues" theme={theme}>
            LIGAS
          </NavLink>
          <NavLink to="/teams" theme={theme}>
            EQUIPOS
          </NavLink>
          <ConfigButton onClick={toggleTheme} theme={theme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </ConfigButton>
        </NavbarRight>
      </NavbarContainer>
    </>
  );
};

export default Navbar;