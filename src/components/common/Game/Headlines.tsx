import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const LineupCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CardTitle = styled.h3`
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

const TeamSection = styled.div`
  padding: 1.5rem;
  &:first-child {
    border-right: 1px solid #222;
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const TeamLogo = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const TeamName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
`;

const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PlayerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  background-color: #222;
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayerName = styled.p`
  font-size: 16px;
  margin: 0;
`;

const StartingLineup: React.FC = () => {
  const teams = [
    {
      id: 1,
      name: "REAL MADRID",
      logo: "/api/placeholder/36/36",
      players: [
        { id: 1, name: "Mbappe", avatar: "/api/placeholder/48/48" },
        { id: 2, name: "Raphina", avatar: "/api/placeholder/48/48" },
        { id: 3, name: "Harry Kane", avatar: "/api/placeholder/48/48" },
        { id: 4, name: "Juan Fernando Quintero", avatar: "/api/placeholder/48/48" },
        { id: 5, name: "Marino Hinestroza", avatar: "/api/placeholder/48/48" },
        { id: 6, name: "Jhay", avatar: "/api/placeholder/48/48" }
      ]
    },
    {
      id: 2,
      name: "MANCHESTER CITY",
      logo: "/api/placeholder/36/36",
      players: [
        { id: 1, name: "Mbappe", avatar: "/api/placeholder/48/48" },
        { id: 2, name: "Raphina", avatar: "/api/placeholder/48/48" },
        { id: 3, name: "Harry Kane", avatar: "/api/placeholder/48/48" },
        { id: 4, name: "Juan Fernando Quintero", avatar: "/api/placeholder/48/48" },
        { id: 5, name: "Marino Hinestroza", avatar: "/api/placeholder/48/48" },
        { id: 6, name: "Jhay", avatar: "/api/placeholder/48/48" }
      ]
    }
  ];

  return (
    <CardContainer>
      <CardTitle>Titulares</CardTitle>
      <LineupCardContainer>
        {teams.map((team) => (
          <TeamSection key={team.id}>
            <TeamHeader>
              <TeamLogo>
                <TeamImage src={team.logo} alt={team.name} />
              </TeamLogo>
              <TeamName>{team.name}</TeamName>
            </TeamHeader>
            
            {team.players.map((player) => (
              <PlayerRow key={player.id}>
                <PlayerAvatar>
                  <PlayerImage src={player.avatar} alt={player.name} />
                </PlayerAvatar>
                <PlayerName>{player.name}</PlayerName>
              </PlayerRow>
            ))}
          </TeamSection>
        ))}
      </LineupCardContainer>
    </CardContainer>
  );
};

export default StartingLineup;