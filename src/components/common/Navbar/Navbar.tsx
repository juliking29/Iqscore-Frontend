import React, { useState } from "react";
import { FaUser, FaCog, FaSearch } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 600;
  font-style: normal;
  background-color: #111517;
  color: white;
  padding: 1rem 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  position: relative;
  z-index: 100;
`;

const SearchContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: #20262A;
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  text-align: center;
  &::placeholder {
    color: #EAEAEA;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: #EAEAEA;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #8400FF;
  }
`;

const Button = styled.button`
  background-color: #EAEAEA;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  color: #1D1B20;
  font-weight: bold;
  &:hover {
    background-color: #d6d6d6;
  }
`;

const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #4a5568;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #1D1B20;
  }
`;

const Navbar: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <NavbarContainer>
      <div className="text-lg font-bold">logo <span style={{ color: "#a0aec0" }}>(EN PROCESO)</span></div>
      
      <SearchContainer>
        <IconWrapper>
          <FaSearch />
        </IconWrapper>
        <SearchInput
          type="text"
          placeholder="Busca en IQSCORE"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContainer>
      
      <LinksContainer>
        <Link href="#">LIGAS</Link>
        <Link href="#">EQUIPOS</Link>
        <Link href="#">FAVORITOS</Link>
        <Button>
          <FaUser /> <span>INICIAR</span>
        </Button>
        <IconButton>
          <FaCog />
        </IconButton>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;