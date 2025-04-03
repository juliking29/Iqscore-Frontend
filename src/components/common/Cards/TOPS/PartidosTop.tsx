import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CardContainerP = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  color: #fff;
`;

const CardContainer = styled.div`
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  background-color: #1c1f22;
  border-radius: 12px;
  padding: 2rem;
  color: white;
  max-width: 750px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-family: "Boldonse", system-ui;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 1rem 0;
  color: white;
  text-transform: uppercase;
`;

const MatchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  width: 250px;
`;

const TeamLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const TeamName = styled.h3`
  font-family: "Boldonse", system-ui;
  font-size: 15px;
  margin: 0;
  text-transform: uppercase;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const MatchDate = styled.div`
  font-family: "Boldonse", system-ui;
  color: #aaaaaa;
  font-size: 1.25rem;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

const Score = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
`;

const DrawX = styled.span`
  font-size: 2rem;
  color: #aaaaaa;
`;

const OddsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const OddBox = styled.div`
  font-family: "Boldonse", system-ui;
  font-size: 10px;
  background-color: #8400FF;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 1px;
  font-weight: 400;
  width: 60px;
  text-align: center;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
  }
  
  &.left {
    left: 20px;
  }
  
  &.right {
    right: 20px;
  }
`;

const PartidosTop: React.FC = () => {
  return (
    <>
    <CardContainerP >
      <Title>PARTIDOS TOP DE LA SEMANA</Title>
      <CardContainer>
        <NavigationButton className="left">
          <FaChevronLeft />
        </NavigationButton>
        
        <MatchContent>
          <TeamSection>
            <TeamLogo src="https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/08/real-madrid-logo-resized.png" alt="Real Madrid Logo" />
            <TeamName>REAL MADRID</TeamName>
          </TeamSection>
          
          <MiddleSection>
            <MatchDate>31/03/2025</MatchDate>
            <ScoreContainer>
              <Score>1</Score>
              <DrawX>x</DrawX>
              <Score>2</Score>
            </ScoreContainer>
            <OddsContainer>
              <OddBox>2.15</OddBox>
              <OddBox>4.4</OddBox>
              <OddBox>3.52</OddBox>
            </OddsContainer>
          </MiddleSection>
          
          <TeamSection>
            <TeamLogo src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt="Manchester City Logo" />
            <TeamName>MANCHESTER CITY</TeamName>
          </TeamSection>
        </MatchContent>
        
        <NavigationButton className="right">
          <FaChevronRight />
        </NavigationButton>
      </CardContainer>
      </CardContainerP>
    </>
  );
};

export default PartidosTop;