import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const CardTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MatchCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
`;

const MatchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TeamLogo = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const TeamName = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  color: #dddddd;
  letter-spacing: 0.5px;
`;

const Score = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Stadium = styled.p`
  margin: 0 0 0.25rem 0;
  color: #dddddd;
`;

const MatchDate = styled.p`
  font-size: 14px;
  margin: 0 0 0.25rem 0;
  color: #aaaaaa;
`;

const MatchTime = styled.p`
  font-size: 14px;
  margin: 0 0 1rem 0;
  color: #aaaaaa;
`;

const Separator = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const MatchInfoCard: React.FC = () => {
  return (
    <CardContainer>
      <CardTitle>INFORMACION DEL PARTIDO</CardTitle>
      <MatchCardContainer>
        <MatchContent>
          <TeamSection>
            <TeamLogo>
              <TeamImage 
                src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png" 
                alt="Real Madrid Logo" 
              />
            </TeamLogo>
            <TeamName>REAL MADRID</TeamName>
            <Score>1</Score>
          </TeamSection>

          <MatchInfo>
            <Stadium>Santiago Bernabeu</Stadium>
            <MatchDate>31/03/2025</MatchDate>
            <MatchTime>18:00</MatchTime>
            <Separator>×</Separator>
          </MatchInfo>

          <TeamSection>
            <TeamLogo>
              <TeamImage 
                src="https://a.espncdn.com/i/teamlogos/soccer/500-dark/382.png" 
                alt="Manchester City Logo" 
              />
            </TeamLogo>
            <TeamName>MANCHESTER CITY</TeamName>
            <Score>2</Score>
          </TeamSection>
        </MatchContent>
      </MatchCardContainer>
    </CardContainer>
  );
};

export default MatchInfoCard;