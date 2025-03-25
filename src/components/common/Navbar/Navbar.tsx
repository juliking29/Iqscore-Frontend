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
  position: fixed;  // Cambiado a fixed
  top: 0;           // Asegúrate de que esté en la parte superior
  left: 0;          // Asegúrate de que ocupe todo el ancho
  z-index: 1000;    // Asegúrate de que esté por encima de otros elementos
  box-sizing: border-box;
  max-width: 100vw;
  overflow-x: hidden;
  border-radius: 0 0 8px 8px;

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
    font-family: "Funnel Display", sans-serif;
  font-size: 22px;
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
  gap: 16px;

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

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: fit-content;
  margin: 60px auto;  // Agregado margen superior para separar del Navbar
  padding: 10px;
  background-color: #BEBEBE;
  border-radius: 0 0 20px 20px;

  img {
    width: 40px; // Tamaño más pequeño para los logos
    height: auto;
    margin: 0 20px; // Espacio entre imágenes
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

  const imageLinks = [
    'https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/UEFA_Conference_League_full_logo_%282024_version%29.svg/640px-UEFA_Conference_League_full_logo_%282024_version%29.svg.png',
    'https://a.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F1543.png',
    'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png',
    'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F12.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/2048px-LaLiga_logo_2023.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ligue_1_2024_Logo.png',
    'https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/10.png',
    'https://upload.wikimedia.org/wikipedia/commons/5/5c/Logo_Liga_Profesional_de_F%C3%BAtbol_%28Argentina%29.png',
    'https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer%2F500%2F85.png',
    'https://logodownload.org/wp-content/uploads/2018/10/copa-libertadores-logo.png',
    'https://logodownload.org/wp-content/uploads/2018/10/copa-sulamericana-logo.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPVvfUTRI-DxoNBEn4jYk2INeM7K4-z7Z8BJPUOJsReIMADjyZqwkrRkPxT6NugE_nHj7kbl-A43Y80FnSdgcEjmCdcHAIIthO3Ro1t7jDhEf9BgEHaE_yQzSMFlbjld1OsMmVjr4byI8/s512/Copa+BetPlay.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Saudi_Pro_League_Logo.svg',
  ];

  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <Link to="/">
            <LogoCircle>J</LogoCircle>
          </Link>
          <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </HamburgerMenu>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/leagues">Ligas</NavLink>
            <NavLink to="/teams">Equipos</NavLink>
            <NavLink to="/Config">Configuración</NavLink>
          </NavLinks>
        </NavbarLeft>

        <NavbarRight>
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

      <ImageContainer>
        {imageLinks.map((link, index) => (
          <img key={index} src={link} alt={`Liga ${index + 1}`} />
        ))}
      </ImageContainer>
    </>
  );
};

export default Navbar;