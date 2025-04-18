import React from "react";

const PlayerProfile: React.FC = () => {
  return (
    <div className="max-w-[1250px] mx-auto">
      <div className="bg-white dark:bg-[#111517] rounded-lg overflow-hidden text-black dark:text-white font-nunito p-6 shadow-lg border border-[#ccc] dark:border-[#333] flex items-center">
        {/* Player Avatar */}
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-[#f0f0f0] dark:bg-[#111517] mr-6 flex-shrink-0">
          <img
            src="https://assets.laliga.com/squad/2024/t186/p220160/2048x2048/p220160_t186_2024_1_002_000.jpg"
            alt="Kylian Mbappé"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Player Info */}
        <div className="flex-grow">
          {/* Player Name and Value */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[20px] font-semibold m-0 text-black dark:text-white">Kylian Mbappé</h3>
            <span className="text-[18px] font-semibold text-black dark:text-white">$ 46M</span>
          </div>

          {/* Player Details */}
          <div className="flex items-center mb-4">
            {/* Nationality */}
            <span className="text-[16px] text-[#555] dark:text-[#aaa] mr-8">Nacionalidad</span>
            <div className="w-[32px] h-[24px] rounded-[4px] overflow-hidden mr-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/330px-Flag_of_France.svg.png"
                alt="France Flag"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Current Team */}
            <span className="text-[16px] text-[#555] dark:text-[#aaa] mr-8">Equipo Actual</span>
            <div className="w-[32px] h-[32px]">
              <img
                src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png"
                alt="Real Madrid Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
