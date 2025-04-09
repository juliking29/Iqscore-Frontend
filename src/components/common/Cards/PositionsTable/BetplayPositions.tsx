import React from "react";
import styled from "styled-components";

const StandingsContainer = styled.div`
  width: 255px;
  max-width: 500px;
  background-color: #111517;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
`;

const StandingsHeader = styled.div`
  background-color: #111517;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #2a2d30;
`;

const StandingsTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr 40px 60px;
  padding: 0.5rem 1rem;
  font-size: 12px;
  font-weight: 600;
  color: #8f9092;
  background-color: #111517;
  border-bottom: 1px solid #2a2d30;
`;

const StandingsTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamRow = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr 40px 60px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  align-items: center;
  border-bottom: 1px solid #2a2d30;

  &:last-child {
    border-bottom: none;
  }
`;

const Position = styled.div`
  font-weight: ${props => props.highlighted ? '700' : '400'};
  color: ${props => props.highlighted ? '#ffffff' : '#c0c0c0'};
`;

const TeamLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Logo = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color || '#ffffff'};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Points = styled.div`
  font-weight: ${props => props.highlighted ? '700' : '400'};
  color: ${props => props.highlighted ? '#ffffff' : '#c0c0c0'};
`;

const Record = styled.div`
  font-size: 12px;
  color: #8f9092;
`;

const BetplayPositions: React.FC = () => {
  const teamsData = [
    { id: 1, name: "Santa Fe", points: 21, record: "19:3", color: "#FF0000", logo: "🔴" },
    { id: 2, name: "Nacional", points: 21, record: "19:3", color: "#009639", logo: "🟢" },
    { id: 3, name: "Medellín", points: 20, record: "19:3", color: "#CC0000", logo: "🔴" },
    { id: 4, name: "Santa Fe", points: 19, record: "19:3", color: "#FF0000", logo: "🔴" },
    { id: 5, name: "Junior", points: 18, record: "19:3", color: "#0038A8", logo: "🔵" },
    { id: 6, name: "Millonarios", points: 16, record: "19:3", color: "#0038A8", logo: "🔵" },
    { id: 7, name: "Bucaramanga", points: 16, record: "19:3", color: "#FFD700", logo: "🟡" },
    { id: 8, name: "Once Caldas", points: 14, record: "19:3", color: "#228B22", logo: "🟢" },
  ];

  return (
    <StandingsContainer>
      <StandingsHeader>
        <StandingsTitle>LIGA BETPLAY</StandingsTitle>
      </StandingsHeader>
      <TableHeader>
        <div>POS</div>
        <div>TEAM</div>
        <div>PTS</div>
        <div>GF:GC</div>
      </TableHeader>
      <StandingsTable>
        {teamsData.map((team) => (
          <TeamRow key={team.id}>
            <Position highlighted={team.id <= 4}>{team.id}</Position>
            <TeamLogo>
              <Logo color={team.color}>{team.logo}</Logo>
            </TeamLogo>
            <Points highlighted={team.id <= 4}>{team.points}</Points>
            <Record>{team.record}</Record>
          </TeamRow>
        ))}
      </StandingsTable>
    </StandingsContainer>
  );
};

export default BetplayPositions;