import React from "react";

const StartingLineup: React.FC = () => {
  const teams = [
    {
      id: 1,
      name: "REAL MADRID",
      logo: "https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png",
      players: [
        { id: 1, name: "Mbappe", avatar: "/api/placeholder/48/48" },
        { id: 2, name: "Raphina", avatar: "/api/placeholder/48/48" },
        { id: 3, name: "Harry Kane", avatar: "/api/placeholder/48/48" },
        { id: 4, name: "Juan Fernando Quintero", avatar: "/api/placeholder/48/48" },
        { id: 5, name: "Marino Hinestroza", avatar: "/api/placeholder/48/48" },
        { id: 6, name: "Jhay", avatar: "/api/placeholder/48/48" }
      ]
    },
    {
      id: 2,
      name: "MANCHESTER CITY",
      logo: "https://a.espncdn.com/i/teamlogos/soccer/500-dark/382.png",
      players: [
        { id: 1, name: "Mbappe", avatar: "/api/placeholder/48/48" },
        { id: 2, name: "Raphina", avatar: "/api/placeholder/48/48" },
        { id: 3, name: "Harry Kane", avatar: "/api/placeholder/48/48" },
        { id: 4, name: "Juan Fernando Quintero", avatar: "/api/placeholder/48/48" },
        { id: 5, name: "Marino Hinestroza", avatar: "/api/placeholder/48/48" },
        { id: 6, name: "Jhay", avatar: "/api/placeholder/48/48" }
      ]
    }
  ];

  return (
    <div className="max-w-[1250px] mx-auto text-black dark:text-white font-nunito">
      <h3 className="text-[18px] font-bold uppercase mb-4 text-black dark:text-white">
        Titulares
      </h3>
      <div className="grid grid-cols-2 gap-6 bg-white dark:bg-[#111517] rounded-xl p-6 shadow-lg border border-[#ccc] dark:border-[#333]">
        {teams.map((team) => (
          <div key={team.id} className="p-6 first:border-r first:border-[#222]">
            <div className="flex items-center mb-6">
              <div className="w-[36px] h-[36px] mr-4 flex items-center justify-center">
                <img src={team.logo} alt={team.name} className="max-w-full max-h-full" />
              </div>
              <h4 className="text-[16px] font-semibold text-black dark:text-white uppercase tracking-[0.5px]">
                {team.name}
              </h4>
            </div>

            {team.players.map((player) => (
              <div key={player.id} className="flex items-center mb-5 last:mb-0">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden mr-4 bg-[#222]">
                  <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[16px] text-black dark:text-white">{player.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartingLineup;
