import React from 'react';

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
    <div className="max-w-[1240px] mx-auto text-white">
      <h1 className="font-['Nunito_Sans'] text-lg m-0 mb-4 text-white uppercase">PRÓXIMOS PARTIDOS</h1>
      
      {leagues.map((league) => (
        <div key={league.name} className="shadow-[0_10px_20px_#111517,0_0_0px_#BEBEBE] mb-6 bg-[#1c1f22] rounded-lg overflow-hidden">
          <div className="flex items-center p-3 bg-[#1e2226] border-b border-[#333]">
            <img 
              src={league.logo} 
              alt={league.name} 
              className="w-8 h-8 mr-3"
            />
            <span className="font-['Nunito_Sans'] text-base text-[#ccc]">{league.name}</span>
          </div>
          
          <div className="p-3">
            {league.matches.map((match) => (
              <div key={match.homeTeam.name} className="grid grid-cols-[35%_12%_35%_18%] items-center p-2 mb-3">
                <div className="flex items-center justify-end flex-row-reverse">
                  <span className="font-['Nunito_Sans'] text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis">{match.homeTeam.name}</span>
                  <img 
                    src={match.homeTeam.logo} 
                    alt={match.homeTeam.name} 
                    className="w-9 h-9 ml-3"
                  />
                </div>
                
                <div className="font-['Nunito_Sans'] text-sm text-white text-center">{match.time}</div>
                
                <div className="flex items-center justify-start">
                  <img 
                    src={match.awayTeam.logo} 
                    alt={match.awayTeam.name} 
                    className="w-9 h-9 mr-3"
                  />
                  <span className="font-['Nunito_Sans'] text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis">{match.awayTeam.name}</span>
                </div>
                
                <div className="flex justify-center flex-col gap-1">
                  <div className="flex justify-between gap-1">
                    <button className="font-['Nunito_Sans'] text-xs bg-[#8400FF] text-white border-none rounded px-2 py-0.5 flex-1 cursor-pointer hover:bg-[#9B30FF]">
                      {match.odds.home}
                    </button>
                    <button className="font-['Nunito_Sans'] text-xs bg-[#8400FF] text-white border-none rounded px-2 py-0.5 flex-1 cursor-pointer hover:bg-[#9B30FF]">
                      {match.odds.draw}
                    </button>
                    <button className="font-['Nunito_Sans'] text-xs bg-[#8400FF] text-white border-none rounded px-2 py-0.5 flex-1 cursor-pointer hover:bg-[#9B30FF]">
                      {match.odds.away}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGames;
