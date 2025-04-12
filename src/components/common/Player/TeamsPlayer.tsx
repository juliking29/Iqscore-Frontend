import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const TrajectoryCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 1.25rem 0;
  color: white;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.span`
  margin-left: 0.5rem;
`;

const ClubsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ClubLogo = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClubImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const PlayerTrajectory: React.FC = () => {
  const clubs = [
    { id: 1, name: "AS Monaco", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/1200px-LogoASMonacoFC2021.svg.png" },
    { id: 2, name: "Paris Saint-Germain", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" },
    { id: 3, name: "Real Madrid", logo: "https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png" },
  ];

  return (
    <CardContainer>
      <TrajectoryCardContainer>
        <CardTitle>
          Trayectoria
          <ArrowIcon>→</ArrowIcon>
        </CardTitle>
        
        <ClubsContainer>
          {clubs.map((club) => (
            <ClubLogo key={club.id}>
              <ClubImage src={club.logo} alt={club.name} />
            </ClubLogo>
          ))}
        </ClubsContainer>
      </TrajectoryCardContainer>
    </CardContainer>
  );
};

export default PlayerTrajectory;