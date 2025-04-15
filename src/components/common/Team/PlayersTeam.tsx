
import React from "react";

const PlayerTeam: React.FC = () => {
  const playersData = [
    {
      id: 1,
      number: 1,
      name: "Adrián Ramos",
      image: "https://cdn.sofifa.net/players/163/607/16_120.png",
    },
    {
      id: 2,
      number: 2,
      name: "Cristian Barrios",
      image: "https://cdn.sofifa.net/players/247/085/22_120.png",
    },
    {
      id: 3,
      number: 3,
      name: "Rodrigo Holgado",
      image: "https://cdn.sofifa.net/players/226/757/22_120.png",
    },
    {
      id: 4,
      number: 4,
      name: "Edwin Cardona",
      image: "https://cdn.sofifa.net/players/204/725/22_120.png",
    },
    {
      id: 5,
      number: 5,
      name: "Harold Rivera",
      image: "https://cdn.sofifa.net/players/245/399/22_120.png",
    },
    {
      id: 6,
      number: 6,
      name: "Daniel Bocanegra",
      image: "https://cdn.sofifa.net/players/237/702/19_120.png",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto text-black dark:text-white font-nunito">
      <h3 className="text-[18px] font-bold uppercase mb-2 text-black dark:text-white">JUGADORES</h3>
      <div className="relative bg-white dark:bg-[#1B1D20] p-6 rounded-lg shadow-lg border border-[#ccc] dark:border-[#333]">
        <div className="flex items-center py-3 px-6 border-b border-[#222]">
          <div className="w-6 mr-4 text-sm text-gray-400">#</div>
          <span className="text-sm font-medium text-gray-400">Jugador</span>
        </div>
        <div className="flex flex-col">
          {playersData.map((player) => (
            <div key={player.id} className="flex items-center py-3 px-6">
              <div className="w-6 mr-4 text-sm text-gray-400">{player.number}</div>
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-[#2a2a2a]">
                  <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">{player.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerTeam;
