import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  color: #fff;
`;

const Title = styled.h1`
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
  width: 32px;
  height: 32px;
  margin-right: 0.75rem;
`;

const LeagueName = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
  color: #ccc;
`;

const MatchList = styled.div`
  padding: 0.75rem;
`;

const MatchCard = styled.div`
  display: grid;
  grid-template-columns: 35% 12% 35% 18%;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.isAway ? 'flex-start' : 'flex-end'};
  flex-direction: ${props => props.isAway ? 'row' : 'row-reverse'};
`;

const TeamLogo = styled.img`
  width: 36px;
  height: 36px;
  margin: ${props => props.isAway ? '0 0.75rem 0 0' : '0 0 0 0.75rem'};
`;

const TeamName = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 14px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MatchTime = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 14px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
  color: #fff;
  text-align: center;
`;

const OddsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
`;

const OddRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
`;

const OddButton = styled.button`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 12px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
  background-color: #8400FF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  flex: 1;
  cursor: pointer;
  
  &:hover {
    background-color: #9B30FF;
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

interface ProximosPartidosProps {
  leagues: League[];
}

const defaultData: ProximosPartidosProps = {
  leagues: [
    {
      name: "Liga Betplay Dimayor",
      logo: "https://a.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F1543.png",
      matches: [
        {
          homeTeam: { name: "America de cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          awayTeam: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          awayTeam: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          awayTeam: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        }
      ]
    },
    {
      name: "Conmebol sudamericana",
      logo: "https://cdn.conmebol.com/wp-content/uploads/2021/10/logo_conmebol_sudamericana.png",
      matches: [
        {
          homeTeam: { name: "America de cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          awayTeam: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          awayTeam: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        },
        {
          homeTeam: { name: "America de cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          awayTeam: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" },
          time: "18:05",
          odds: { home: "1.24", draw: "2.5", away: "4.45" }
        }
      ]
    }
  ]
};

const TeamGames: React.FC<Partial<ProximosPartidosProps>> = (props) => {
  const { leagues } = { ...defaultData, ...props };
  
  return (
    <Container>
      <Title>PRÓXIMOS PARTIDOS</Title>
      
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
                  <TeamName>{match.homeTeam.name}</TeamName>
                  <TeamLogo src={match.homeTeam.logo} alt={match.homeTeam.name} />
                </TeamContainer>
                
                <MatchTime>{match.time}</MatchTime>
                
                <TeamContainer isAway>
                  <TeamLogo isAway src={match.awayTeam.logo} alt={match.awayTeam.name} />
                  <TeamName>{match.awayTeam.name}</TeamName>
                </TeamContainer>
                
                <OddsContainer>
                  <OddRow>
                    <OddButton>{match.odds.home}</OddButton>
                    <OddButton>{match.odds.draw}</OddButton>
                    <OddButton>{match.odds.away}</OddButton>
                  </OddRow>
                </OddsContainer>
              </MatchCard>
            ))}
          </MatchList>
        </LeagueContainer>
      ))}
    </Container>
  );
};

export default TeamGames;