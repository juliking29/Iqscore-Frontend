import React from "react";

const PlayerTrajectory: React.FC = () => {
  const clubs = [
    { id: 1, name: "AS Monaco", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/1200px-LogoASMonacoFC2021.svg.png" },
    { id: 2, name: "Paris Saint-Germain", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" },
    { id: 3, name: "Real Madrid", logo: "https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png" },
  ];

  return (
    <div className="max-w-[1250px] mx-auto">
      <div className="bg-white dark:bg-[#111517] rounded-lg overflow-hidden text-black dark:text-white font-nunito p-6 shadow-lg border border-[#ccc] dark:border-[#333]">
        <h3 className="text-[18px] font-semibold mb-5 flex items-center">
          Trayectoria
          <span className="ml-2">→</span>
        </h3>

        <div className="flex items-center gap-x-6">
          {clubs.map((club) => (
            <div key={club.id} className="w-[64px] h-[64px] flex items-center justify-center">
              <img src={club.logo} alt={club.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerTrajectory;
