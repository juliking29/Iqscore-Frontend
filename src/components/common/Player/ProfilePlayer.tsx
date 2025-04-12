import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const PlayerCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

const PlayerAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayerInfoContainer = styled.div`
  flex-grow: 1;
`;

const PlayerNameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const PlayerName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const PlayerValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const PlayerDetailsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const DetailLabel = styled.span`
  font-size: 16px;
  color: #aaa;
  margin-right: 2rem;
`;

const FlagContainer = styled.div`
  width: 32px;
  height: 24px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 2rem;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TeamLogoContainer = styled.div`
  width: 32px;
  height: 32px;
`;

const TeamLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PlayerProfile: React.FC = () => {
  return (
    <CardContainer>
      <PlayerCardContainer>
        <PlayerAvatar>
          <PlayerImage src="https://assets.laliga.com/squad/2024/t186/p220160/2048x2048/p220160_t186_2024_1_002_000.jpg" alt="Kylian Mbappé" />
        </PlayerAvatar>
        
        <PlayerInfoContainer>
          <PlayerNameRow>
            <PlayerName>Kylian Mbappé</PlayerName>
            <PlayerValue>$ 46M</PlayerValue>
          </PlayerNameRow>
          
          <PlayerDetailsRow>
            <DetailLabel>Nacionalidad</DetailLabel>
            <FlagContainer>
              <FlagImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/330px-Flag_of_France.svg.png" alt="France Flag" />
            </FlagContainer>
            
            <DetailLabel>Equipo Actual</DetailLabel>
            <TeamLogoContainer>
              <TeamLogo src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png" alt="Real Madrid Logo" />
            </TeamLogoContainer>
          </PlayerDetailsRow>
        </PlayerInfoContainer>
      </PlayerCardContainer>
    </CardContainer>
  );
};

export default PlayerProfile;