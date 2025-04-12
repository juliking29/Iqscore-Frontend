import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const TeamCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TeamLogo = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  background-color: transparent;
`;

const TeamLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TeamName = styled.h3`
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

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const CountryFlag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FlagIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CountryName = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const TeamValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 0.25rem;
`;

const InfoTeam: React.FC = () => {
  return (
    <CardContainer>
        <TeamName>América de Cali</TeamName>
            <TeamCardContainer>
                <TeamInfo>
                <TeamLogo>
                    <TeamLogoImage 
                    src="https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" 
                    alt="América de Cali logo" 
                    />
                </TeamLogo>
                </TeamInfo>
                <CountryInfo>
                <CountryFlag>
                    <FlagIcon>
                    <FlagImage 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" 
                        alt="Colombia flag" 
                    />
                    </FlagIcon>
                    <CountryName>Colombia</CountryName>
                </CountryFlag>
                <TeamValue>$ 24 M</TeamValue>
                </CountryInfo>
            </TeamCardContainer>
            </CardContainer>
  );
};

export default InfoTeam;