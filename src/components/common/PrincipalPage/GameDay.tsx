import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  color: #fff;
`;

const Title = styled.h1`
  font-family: "Boldonse", system-ui;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 1rem 0;
  color: white;
  text-transform: uppercase;
`;

const LeagueContainer = styled.div`
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  margin-bottom: 1.5rem;
  background-color: #1c1f22;
  border-radius: 8px;
  overflow: hidden;
`;

const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #1e2226;
  border-bottom: 1px solid #333;
`;

const LeagueLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

const LeagueName = styled.span`
  font-family: "Boldonse", system-ui;
  font-size: 12px;
  color: #ccc;
`;

const MatchList = styled.div`
  padding: 0.5rem;
`;

const MatchCard = styled.div`
  display: grid;
  grid-template-columns: 35% 12% 35% 18%;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TeamLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

const TeamName = styled.span`
  font-family: "Boldonse", system-ui;
  font-size: 10px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MatchTime = styled.div`
  font-family: "Boldonse", system-ui;
  font-size: 9px;
  color: #fff;
  text-align: center;
`;

const OddsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
`;

const OddButton = styled.button<{ isActive?: boolean }>`
  font-family: "Boldonse", system-ui;
  font-size: 8px;
  background-color: ${props => props.isActive ? '#6a1b9a' : '#2d3035'};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  flex: 1;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.isActive ? '#6a1b9a' : '#3d4045'};
  }
`;

interface Team {
  name: string;
  logo: string;
}

interface Match {
  homeTeam: Team;
  awayTeam: Team;
  time: string;
  odds: {
    home: string;
    draw: string;
    away: string;
  };
}

interface League {
  name: string;
  logo: string;
  matches: Match[];
}

interface PartidosDelDiaProps {
  date: string;
  leagues: League[];
}

const defaultData: PartidosDelDiaProps = {
  date: "29/03/2025",
  leagues: [
    {
      name: "Liga Betplay Dimayor",
      logo: "/logos/liga-betplay.png",
      matches: [
        {
          homeTeam: { name: "America de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        }
      ]
    },
    {
      name: "Serie A",
      logo: "/logos/serie-a.png",
      matches: [
        {
          homeTeam: { name: "America de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        }
      ]
    }
  ]
};

const PartidosDelDia: React.FC<Partial<PartidosDelDiaProps>> = (props) => {
  // Merge provided props with default data
  const { date, leagues } = { ...defaultData, ...props };
  
  return (
    <Container>
      <Title>PARTIDOS DEL {date}</Title>
      
      {leagues.map((league, index) => (
        <LeagueContainer key={index}>
          <LeagueHeader>
            <LeagueLogo src={league.logo} alt={league.name} />
            <LeagueName>{league.name}</LeagueName>
          </LeagueHeader>
          
          <MatchList>
            {league.matches.map((match, matchIndex) => (
              <MatchCard key={matchIndex}>
                <TeamContainer>
                  <TeamLogo src={match.homeTeam.logo} alt={match.homeTeam.name} />
                  <TeamName>{match.homeTeam.name}</TeamName>
                </TeamContainer>
                
                <MatchTime>{match.time}</MatchTime>
                
                <TeamContainer>
                  <TeamLogo src={match.awayTeam.logo} alt={match.awayTeam.name} />
                  <TeamName>{match.awayTeam.name}</TeamName>
                </TeamContainer>
                
                <OddsContainer>
                  <OddButton>{match.odds.home}</OddButton>
                  <OddButton>{match.odds.draw}</OddButton>
                  <OddButton isActive={true}>{match.odds.away}</OddButton>
                </OddsContainer>
              </MatchCard>
            ))}
          </MatchList>
        </LeagueContainer>
      ))}
    </Container>
  );
};

// Usage example
const App = () => {
  return <PartidosDelDia />; // Now works without props
};

export default PartidosDelDia;