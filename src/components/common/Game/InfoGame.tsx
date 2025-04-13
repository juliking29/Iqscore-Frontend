import React from "react";

const MatchInfoCard: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-black dark:text-white font-nunito">
      <h2 className="text-[18px] font-bold uppercase mb-4">
        INFORMACION DEL PARTIDO
      </h2>
      <div className="relative bg-white dark:bg-[#1B1D20] p-6 rounded-lg shadow-lg border border-[#ccc] dark:border-[#333]">
        <div className="flex items-center justify-between p-6">
          {/* Team A */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img
                src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png"
                alt="Real Madrid Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <p className="text-sm uppercase text-black dark:text-white tracking-[0.5px] mb-1">
              REAL MADRID
            </p>
            <p className="text-2xl font-bold">1</p>
          </div>

          {/* Match Info */}
          <div className="flex flex-col items-center text-center">
            <p className="text-black dark:text-white mb-1">
              Santiago Bernabeu
            </p>
            <p className="text-sm text-black dark:text-white mb-1">
              31/03/2025
            </p>
            <p className="text-sm text-black dark:text-white mb-4">
              18:00
            </p>
            <p className="text-2xl font-bold">×</p>
          </div>

          {/* Team B */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img
                src="https://a.espncdn.com/i/teamlogos/soccer/500-dark/382.png"
                alt="Manchester City Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <p className="text-sm uppercase text-black dark:text-white tracking-[0.5px] mb-1">
              MANCHESTER CITY
            </p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfoCard;
