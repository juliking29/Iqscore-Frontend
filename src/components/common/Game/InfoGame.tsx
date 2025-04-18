import React from "react";

const MatchInfoCard: React.FC = () => {
  // Puedes ajustar estos valores
  const probRealMadrid = 35;
  const probEmpate = 25;
  const probManCity = 40;

  return (
    <div className="max-w-[1240px] mx-auto text-black dark:text-white font-nunito">
      <h2 className="text-[18px] font-bold uppercase mb-4">
        INFORMACIÓN DEL PARTIDO
      </h2>

      <div className="relative bg-white dark:bg-[#1B1D20] p-6 rounded-lg shadow-lg border border-[#ccc] dark:border-[#333]">
        <div className="flex items-center justify-between p-6">
          {/* Real Madrid */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img
                src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png"
                alt="Real Madrid Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.5px] mb-1">
              REAL MADRID
            </p>
            <p className="text-2xl font-bold">1</p>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center text-center">
            <p className="mb-1">Santiago Bernabéu</p>
            <p className="text-sm mb-1">31/03/2025</p>
            <p className="text-sm mb-4">18:00</p>
            <p className="text-2xl font-bold">×</p>
          </div>

          {/* Manchester City */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img
                src="https://a.espncdn.com/i/teamlogos/soccer/500-dark/382.png"
                alt="Manchester City Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.5px] mb-1">
              MAN. CITY
            </p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>

        {/* Barra de Probabilidades */}
        <div className="mt-6">
          <div className="text-xs flex justify-between mb-1 px-1">
            <span>Real Madrid {probRealMadrid}%</span>
            <span>Empate {probEmpate}%</span>
            <span>Man. City {probManCity}%</span>
          </div>
          <div className="h-4 w-full rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden shadow-inner flex">
            <div
              className="h-full bg-purple-500 dark:bg-purple-600"
              style={{ width: `${probRealMadrid}%` }}
            ></div>
            <div
              className="h-full bg-yellow-400 dark:bg-yellow-500"
              style={{ width: `${probEmpate}%` }}
            ></div>
            <div
              className="h-full bg-blue-500 dark:bg-blue-400"
              style={{ width: `${probManCity}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfoCard;
