import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const TopPlayersContainer = styled.div`
  max-width: 1250px;
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
`;

const TopPlayersTitle = styled.h2`
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
  padding: 0.5rem 0;
`;

const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PlayerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #2a2a2a;
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayerName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: white;
`;

const PlayerRating = styled.div`
  background-color: #8400FF;
  color: white;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  min-width: 40px;
  text-align: center;
`;

const TopJugadores: React.FC = () => {
  const playersData = [
    {
      id: 1,
      name: "Mbappe",
      rating: "10",
      image: "https://cdn.givemesport.com/wp-content/uploads/2023/10/cropped-vini-mbappe-real-madrid.jpg",
    },
    {
      id: 2,
      name: "Raphina",
      rating: "10",
      image: "https://cdn.vox-cdn.com/thumbor/XDYMPnMZBrv-QPZDuEtUL9lrrhQ=/0x0:3000x2143/1200x800/filters:focal(1239x219:1719x699)/cdn.vox-cdn.com/uploads/chorus_image/image/72731224/1258904944.0.jpg",
    },
    {
      id: 3,
      name: "Harry Kane",
      rating: "9.8",
      image: "https://cdn.vox-cdn.com/thumbor/wOGHKVneuI9RsQvXXy-Jjq48-io=/0x0:3500x2333/1200x800/filters:focal(1470x887:2030x1447)/cdn.vox-cdn.com/uploads/chorus_image/image/73071979/1917152036.0.jpg",
    },
    {
      id: 4,
      name: "Juan Fernando Quintero",
      rating: "9.2",
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/7QWJYZRXUJDNLDXQEHT6IIZHG4.jpeg",
    },
    {
      id: 5,
      name: "Marino Hinestroza",
      rating: "8.4",
      image: "https://bolavip.com/__export/1681145044186/sites/bolavip/img/2023/04/10/marino_hinestroza_cali_crop1681144869953.jpg_1159711837.jpg",
    },
    {
      id: 6,
      name: "Jhay",
      rating: "8.4",
      image: "https://s.hs-data.com/bilder/spieler/gross/553304.jpg",
    },
  ];

  return (
    <CardContainer>
        <TopPlayersTitle>TOP JUGADORES</TopPlayersTitle>
    <TopPlayersContainer>
      <PlayersList>
        {playersData.map((player) => (
          <PlayerRow key={player.id}>
            <PlayerInfo>
              <PlayerAvatar>
                <PlayerImage src={player.image} alt={player.name} />
              </PlayerAvatar>
              <PlayerName>{player.name}</PlayerName>
            </PlayerInfo>
            <PlayerRating>{player.rating}</PlayerRating>
          </PlayerRow>
        ))}
      </PlayersList>
    </TopPlayersContainer>
    </CardContainer>
  );
};

export default TopJugadores;