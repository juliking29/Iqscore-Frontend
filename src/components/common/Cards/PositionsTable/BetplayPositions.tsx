import React from "react";

const BetplayPositions: React.FC = () => {
  const teamsData = [
    {
      id: 1,
      name: "Santa Fe",
      points: 21,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Independiente_Santa_Fe_logo.svg/1200px-Independiente_Santa_Fe_logo.svg.png",
    },
    {
      id: 2,
      name: "Nacional",
      points: 21,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Atl%C3%A9tico_Nacional_2016_logo.svg/800px-Atl%C3%A9tico_Nacional_2016_logo.svg.png",
    },
    {
      id: 3,
      name: "Medellín",
      points: 20,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Deportivo_Independiente_Medell%C3%ADn_logo.svg/1200px-Deportivo_Independiente_Medell%C3%ADn_logo.svg.png",
    },
    {
      id: 4,
      name: "Junior",
      points: 19,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Atl%C3%A9tico_Junior_logo.svg/1200px-Atl%C3%A9tico_Junior_logo.svg.png",
    },
    {
      id: 5,
      name: "Millonarios",
      points: 18,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Millonarios_FC_logo.svg/1200px-Millonarios_FC_logo.svg.png",
    },
    {
      id: 6,
      name: "Bucaramanga",
      points: 16,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Atl%C3%A9tico_Bucaramanga_logo.png",
    },
    {
      id: 7,
      name: "Once Caldas",
      points: 16,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Once_Caldas_logo.svg/800px-Once_Caldas_logo.svg.png",
    },
    {
      id: 8,
      name: "Pereira",
      points: 14,
      record: "19:3",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f3/Deportivo_Pereira_logo.png",
    },
  ];

  return (
    <div className="w-[255px] max-w-[500px] bg-white dark:bg-[#1B1D20] text-gray-800 dark:text-white rounded-lg shadow-lg border border-gray-300 dark:border-[#333] overflow-hidden">
      <div className="bg-gray-100 dark:bg-[#1B1D20] px-4 py-3 border-b border-gray-300 dark:border-[#2a2d30]">
        <h2 className="text-sm font-bold uppercase tracking-wider">
          LIGA BETPLAY
        </h2>
      </div>

      <div className="grid grid-cols-[36px_1fr_40px_60px] px-4 py-2 text-xs font-semibold text-gray-500 dark:text-[#8f9092] border-b border-gray-300 dark:border-[#2a2d30] bg-gray-50 dark:bg-[#1B1D20]">
        <div>POS</div>
        <div>TEAM</div>
        <div>PTS</div>
        <div>GF:GC</div>
      </div>

      <div className="flex flex-col">
        {teamsData.map((team) => (
          <div
            key={team.id}
            className="grid grid-cols-[36px_1fr_40px_60px] items-center px-4 py-2 text-sm border-b border-gray-200 dark:border-[#2a2d30]"
          >
            <div className={team.id <= 4 ? "font-bold text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}>
              {team.id}
            </div>
            <div className="flex items-center gap-3">
              <img
                src={team.logo}
                alt={`${team.name} Logo`}
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className={team.id <= 4 ? "font-bold text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}>
              {team.points}
            </div>
            <div className="text-xs text-gray-500 dark:text-[#8f9092]">{team.record}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetplayPositions;
