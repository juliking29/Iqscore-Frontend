import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const AllLeague = () => {
  const [favorites, setFavorites] = React.useState({
    "Liga Betplay Dimayor 1": false,
    "Serie A 1": false,
    "Premier League 1": false,
    "Liga Betplay Dimayor 2": false,
    "Serie A 2": false,
    "Premier League 2": false,
  });

  const toggleFavorite = (competition: string) => {
    setFavorites({
      ...favorites,
      [competition]: !favorites[competition],
    });
  };

  const competitions = [
    { id: "Liga Betplay Dimayor 1", name: "Liga Betplay Dimayor", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm5vx7uEL8qvmLdtsszzL2v7ixiq0zzV2aUrowvo7m-YzGrVz1g90p1XfoMoy_ecYE43cjxOtcfDzcD62TloUNMpyAAXjzKVUBa0XcP9HM9X9RGMh8xBUxtN8zYZfGMgNml6An2EI4g6U/s512/Liga+BetPlay.png" },
    { id: "Serie A 1", name: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1200px-Serie_A_logo_2022.svg.png" },
    { id: "Premier League 1", name: "Premier League", logo: "/api/placeholder/36/36" },
    { id: "Liga Betplay Dimayor 2", name: "Liga Betplay Dimayor", logo: "/api/placeholder/36/36" },
    { id: "Serie A 2", name: "Serie A", logo: "/api/placeholder/36/36" },
    { id: "Premier League 2", name: "Premier League", logo: "/api/placeholder/36/36" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="font-nunito text-black text-[18px] font-semibold not-italic uppercase mb-4 dark:text-white">Ligas</h2>
      <div className="relative bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1B1D20] dark:border-[#333]">
        <div className="flex flex-col gap-5">
          {competitions.map((competition) => (
            <div key={competition.id} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <img src={competition.logo} alt={`${competition.name} Logo`} className="w-9 h-9 object-contain" />
                <span className="text-black dark:text-white text-lg">{competition.name}</span>
              </div>
              <button
                className="text-black dark:text-white text-xl opacity-80 hover:opacity-100 cursor-pointer"
                onClick={() => toggleFavorite(competition.id)}
              >
                {favorites[competition.id] ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllLeague;
