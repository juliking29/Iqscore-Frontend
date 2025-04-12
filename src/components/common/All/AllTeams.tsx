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

const TeamsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TeamItem = styled.div`
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

const TeamLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const TeamName = styled.span`
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

const AllTeams = () => {
  const [favorites, setFavorites] = React.useState({
    "real-madrid": false,
    "barcelona": false,
    "manchester-city": false,
    "bayern-munich": false,
    "psg": false,
    "juventus": false,
  });

  const toggleFavorite = (team) => {
    setFavorites({
      ...favorites,
      [team]: !favorites[team],
    });
  };

  const teams = [
    { 
      id: "real-madrid", 
      name: "Real Madrid", 
      logo: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/08/real-madrid-logo-resized.png" 
    },
    { 
      id: "barcelona", 
      name: "FC Barcelona", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" 
    },
    { 
      id: "manchester-city", 
      name: "Manchester City", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" 
    },
    { 
      id: "bayern-munich", 
      name: "Bayern Munich", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" 
    },
    { 
      id: "psg", 
      name: "Paris Saint-Germain", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" 
    },
    { 
      id: "juventus", 
      name: "Juventus", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png" 
    },
  ];

  return (
    <CardContainerP>
      <Title>Equipos</Title>
      <CardContainer>
        <TeamsList>
          {teams.map((team) => (
            <TeamItem key={team.id}>
              <LogoAndName>
                <TeamLogo src={team.logo} alt={`${team.name} Logo`} />
                <TeamName>{team.name}</TeamName>
              </LogoAndName>
              <FavoriteButton onClick={() => toggleFavorite(team.id)}>
                {favorites[team.id] ? <FaHeart /> : <FaRegHeart />}
              </FavoriteButton>
            </TeamItem>
          ))}
        </TeamsList>
      </CardContainer>
    </CardContainerP>
  );
};

export default AllTeams;