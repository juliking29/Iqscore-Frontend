import React from "react";

const BettingOdds: React.FC = () => {
  const bookmakers = [
    {
      id: 1,
      name: "Stake",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVt1rF_cNMl_8f2VnubtCpB918Y1C5xzxLQA&s",
      odds: ["2.15", "4.4", "3.52"],
    },
    {
      id: 2,
      name: "BetPlay",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiduMQLVQcYYQwDlrygk_ZqiNzz9QmE-UVg&s",
      odds: ["2.15", "4.4", "3.52"],
    },
    {
      id: 3,
      name: "RushBet",
      logo: "https://www.valoraanalitik.com/wp-content/uploads/2022/10/Rushbet-apuestas.jpg",
      odds: ["2.15", "4.4", "3.52"],
    },
    {
      id: 4,
      name: "WPlay",
      logo: "https://yt3.googleusercontent.com/f19l64EqqaUqg_I2_T7X8aO94T6DH5_l_4RLRDqPvoo5fvHH1FuEfJ9E_5kdPfjMoHPs1y2R=s900-c-k-c0x00ffffff-no-rj",
      odds: ["2.15", "4.4", "3.52"],
    },
  ];

  const labels = ["1", "X", "2"]; // Local, Empate, Visitante

  return (
    <div className="max-w-[1240px] mx-auto font-nunito text-black dark:text-white">
      <h3 className="text-[18px] font-bold uppercase mb-4">CUOTAS</h3>
      <div className="relative bg-white dark:bg-[#1B1D20] p-6 rounded-lg shadow-lg border border-[#ccc] dark:border-[#333]">
        {bookmakers.map((bookmaker) => (
          <div
            key={bookmaker.id}
            className="flex items-center mb-6 last:mb-0"
          >
            <div className="w-[60px] h-[60px] rounded-lg overflow-hidden flex items-center justify-center bg-white dark:bg-[#222] mr-8">
              <img
                src={bookmaker.logo}
                alt={bookmaker.name}
                className="max-w-full max-h-full"
              />
            </div>
            <div className="flex justify-between flex-grow max-w-[300px] gap-4">
              {bookmaker.odds.map((odd, index) => (
                <div key={index} className="flex flex-col items-center text-center w-[90px]">
                  <div className="bg-purple-700 text-white font-semibold px-4 py-2 rounded w-full">
                    {odd}
                  </div>
                  <span className="text-xs text-black dark:text-gray-300 mt-1 font-semibold">
                    {labels[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingOdds;
