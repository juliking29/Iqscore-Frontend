import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const PlayersCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  max-width: 1250px;
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

const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
`;

const PlayerNumber = styled.div`
  width: 24px;
  margin-right: 1rem;
  font-size: 14px;
  color: #999;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

const PlayerAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #2a2a2a;
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayerName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #222;
`;

const HeaderNumber = styled.div`
  width: 24px;
  margin-right: 1rem;
  font-size: 14px;
  color: #999;
`;

const HeaderLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;

const PlayerTeam: React.FC = () => {
  const playersData = [
    {
      id: 1,
      number: 1,
      name: "Adrián Ramos",
      image: "https://cdn.sofifa.net/players/163/607/16_120.png",
    },
    {
      id: 2,
      number: 2,
      name: "Cristian Barrios",
      image: "https://cdn.sofifa.net/players/247/085/22_120.png",
    },
    {
      id: 3,
      number: 3,
      name: "Rodrigo Holgado",
      image: "https://cdn.sofifa.net/players/226/757/22_120.png",
    },
    {
      id: 4,
      number: 4,
      name: "Edwin Cardona",
      image: "https://cdn.sofifa.net/players/204/725/22_120.png",
    },
    {
      id: 5,
      number: 5,
      name: "Harold Rivera",
      image: "https://cdn.sofifa.net/players/245/399/22_120.png",
    },
    {
      id: 6,
      number: 6,
      name: "Daniel Bocanegra",
      image: "https://cdn.sofifa.net/players/237/702/19_120.png",
    },
  ];

  return (
    <CardContainer>
        <CardTitle>JUGADORES</CardTitle>
      <PlayersCardContainer>
        <HeaderRow>
          <HeaderNumber>#</HeaderNumber>
          <HeaderLabel>Jugador</HeaderLabel>
        </HeaderRow>
        <PlayersList>
          {playersData.map((player) => (
            <PlayerRow key={player.id}>
              <PlayerNumber>{player.number}</PlayerNumber>
              <PlayerInfo>
                <PlayerAvatar>
                  <PlayerImage src={player.image} alt={player.name} />
                </PlayerAvatar>
                <PlayerName>{player.name}</PlayerName>
              </PlayerInfo>
            </PlayerRow>
          ))}
        </PlayersList>
      </PlayersCardContainer>
    </CardContainer>
  );
};

export default PlayerTeam;