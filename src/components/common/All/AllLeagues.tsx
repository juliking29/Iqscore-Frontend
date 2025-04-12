import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CardContainerP = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  background-color: #1c1f22;
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  max-width: 1240px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 18px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
  margin: 0 0 1rem 0;
  color: white;
  text-transform: uppercase;
`;

const CompetitionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CompetitionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const LogoAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CompetitionLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const CompetitionName = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 18px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
  }
`;

const AllLeague = () => {
  const [favorites, setFavorites] = React.useState({
    "Liga Betplay Dimayor 1": false,
    "Serie A 1": false,
    "Premier League 1": false,
    "Liga Betplay Dimayor 2": false,
    "Serie A 2": false,
    "Premier League 2": false,
  });

  const toggleFavorite = (competition) => {
    setFavorites({
      ...favorites,
      [competition]: !favorites[competition],
    });
  };

  const competitions = [
    { id: "Liga Betplay Dimayor 1", name: "Liga Betplay Dimayor", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm5vx7uEL8qvmLdtsszzL2v7ixiq0zzV2aUrowvo7m-YzGrVz1g90p1XfoMoy_ecYE43cjxOtcfDzcD62TloUNMpyAAXjzKVUBa0XcP9HM9X9RGMh8xBUxtN8zYZfGMgNml6An2EI4g6U/s512/Liga+BetPlay.png" },
    { id: "Serie A 1", name: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1200px-Serie_A_logo_2022.svg.png" },
    { id: "Premier League 1", name: "Premier League", logo: "/api/placeholder/36/36" },
    { id: "Liga Betplay Dimayor 2", name: "Liga Betplay Dimayor", logo: "/api/placeholder/36/36" },
    { id: "Serie A 2", name: "Serie A", logo: "/api/placeholder/36/36" },
    { id: "Premier League 2", name: "Premier League", logo: "/api/placeholder/36/36" },
  ];

  return (
    <CardContainerP>
      <Title>Ligas</Title>
    <CardContainer>
      <CompetitionList>
        {competitions.map((competition) => (
          <CompetitionItem key={competition.id}>
            <LogoAndName>
              <CompetitionLogo src={competition.logo} alt={`${competition.name} Logo`} />
              <CompetitionName>{competition.name}</CompetitionName>
            </LogoAndName>
            <FavoriteButton onClick={() => toggleFavorite(competition.id)}>
              {favorites[competition.id] ? <FaHeart /> : <FaRegHeart />}
            </FavoriteButton>
          </CompetitionItem>
        ))}
      </CompetitionList>
    </CardContainer>
    </CardContainerP>
  );
};

export default AllLeague;