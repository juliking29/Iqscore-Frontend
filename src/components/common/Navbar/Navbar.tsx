import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../../contexts/ThemeContext';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  color: white;
  padding: 12px 24px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  max-width: 100vw;
  overflow-x: hidden;
  border-bottom-left-radius: 20px;  
  border-bottom-right-radius: 20px; 

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 12px 16px;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const LogoCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eab308;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  margin-right: 24px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #282829;
    padding: 16px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    z-index: 100;
    border-bottom-left-radius: 20px;  
    border-bottom-right-radius: 20px; 
  }
`;

const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; // Espacio entre el botón de tema y el buscador

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 16px;
    justify-content: space-between;
  }
`;

const SearchContainer = styled.div`
  width: 0%;
  min-width: 400px;
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    order: 2;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #3B3B3C;
  color: white;
  border-radius: 9999px;
  padding: 8px 16px 8px 40px;
  border: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #a0a0a0;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a0a0a0;
  width: 20px;
  height: 20px;
  padding: 0;
  cursor: pointer;
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('searchQuery') as string;
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <NavbarContainer>
      <NavbarLeft>
        <Link to="/">
          <LogoCircle>J</LogoCircle>
        </Link>
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerMenu>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/equipos">EQUIPOS</NavLink>
          <NavLink to="/ligas">LIGAS</NavLink>
          <NavLink to="/chat-ia">CHAT-IA</NavLink>
        </NavLinks>
      </NavbarLeft>

      <NavbarRight>
        {/* Botón para cambiar el tema - ahora está a la izquierda del buscador */}
        <ThemeToggleButton onClick={toggleTheme} title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </ThemeToggleButton>
        
        <SearchContainer>
          <form onSubmit={handleSearch}>
            <SearchInputWrapper>
              <SearchInput
                type="text"
                name="searchQuery"
                placeholder="Busca una liga o equipo"
              />
              <SearchIcon type="submit">
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
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;