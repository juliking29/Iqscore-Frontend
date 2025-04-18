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

interface PartidosDelDiaProps {
  date: string;
  leagues: League[];
}

const defaultData: PartidosDelDiaProps = {
  date: "29/03/2025",
  leagues: [
    {
      name: "Liga Betplay Dimayor",
      logo: "https://a.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F1543.png",
      matches: [
        {
          homeTeam: { name: "América de Cali", logo: "/logos/america-cali.png" },
          awayTeam: { name: "Atlético Bucaramanga", logo: "/logos/bucaramanga.png" },
          time: "18:05",
          odds: { home: "1.85", draw: "3.20", away: "4.10" }
        },
        {
          homeTeam: { name: "Atlético Nacional", logo: "/logos/nacional.png" },
          awayTeam: { name: "Millonarios", logo: "/logos/millonarios.png" },
          time: "20:10",
          odds: { home: "2.00", draw: "3.00", away: "3.50" }
        }
      ]
    },
    {
      name: "Premier League",
      logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/23.png",
      matches: [
        {
          homeTeam: { name: "Manchester United", logo: "/logos/man-united.png" },
          awayTeam: { name: "Chelsea", logo: "/logos/chelsea.png" },
          time: "13:30",
          odds: { home: "2.10", draw: "3.30", away: "3.10" }
        },
        {
          homeTeam: { name: "Liverpool", logo: "/logos/liverpool.png" },
          awayTeam: { name: "Arsenal", logo: "/logos/arsenal.png" },
          time: "16:00",
          odds: { home: "1.95", draw: "3.25", away: "3.60" }
        }
      ]
    }
  ]
};

const PartidosDelDia: React.FC<Partial<PartidosDelDiaProps>> = (props) => {
  const { date, leagues } = { ...defaultData, ...props };

  return (
    <div className="max-w-[1240px] mx-auto text-black dark:text-white font-nunito">
      <h1 className="text-[18px] font-bold uppercase mb-4">
        PARTIDOS DEL {date}
      </h1>

      {leagues.map((league, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1c1f22] dark:shadow-[0_10px_20px_#111517,0_0_0px_#BEBEBE] dark:border-[#333] mb-8"
        >
          <div className="flex items-center px-4 py-3 border-b border-[#ddd] dark:border-[#333]">
            <img src={league.logo} alt={league.name} className="w-6 h-6 mr-2" />
            <span className="text-[#333] dark:text-[#ccc] text-[18px] font-medium">{league.name}</span>
          </div>

          <div className="p-2">
            {league.matches.map((match, matchIndex) => (
              <div
                key={matchIndex}
                className="grid grid-cols-[32%_12%_32%_18%] items-center gap-2 py-2 mb-2"
              >
                <div className="flex items-center">
                  <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-6 h-6 mr-2" />
                  <span className="text-sm truncate text-black dark:text-white">{match.homeTeam.name}</span>
                </div>

                <div className="text-center text-sm text-black dark:text-white">
                  {match.time}
                </div>

                <div className="flex items-center">
                  <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-6 h-6 mr-2" />
                  <span className="text-sm truncate text-black dark:text-white">{match.awayTeam.name}</span>
                </div>

                <div className="flex gap-1">
                  <button className="text-xs bg-[#2d3035] text-white rounded px-2 py-1 flex-1 hover:bg-[#3d4045]">
                    {match.odds.home}
                  </button>
                  <button className="text-xs bg-[#2d3035] text-white rounded px-2 py-1 flex-1 hover:bg-[#3d4045]">
                    {match.odds.draw}
                  </button>
                  <button className="text-xs bg-[#8400FF] text-white rounded px-2 py-1 flex-1 hover:bg-[#8400FF]">
                    {match.odds.away}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartidosDelDia;
