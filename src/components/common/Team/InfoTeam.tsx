import React from "react";

interface InfoTeamProps {
  name: string;
  logo: string;
  city: string;
  marketValue: string;
  coach: string;
  president: string;
  stadiumName: string;
  stadiumLocation: string;
  teamHistory: string;
  leagueName: string;
  leagueLogo: string;
}

const InfoTeam: React.FC<InfoTeamProps> = ({
  name,
  logo,
  city,
  marketValue,
  coach,
  president,
  stadiumName,
  stadiumLocation,
  teamHistory,
  leagueName,
  leagueLogo,
}) => {
  console.log("PROPS EN INFOTEAM:", {
    name,
    logo,
    city,
    marketValue,
    coach,
    president,
    stadiumName,
    stadiumLocation,
    teamHistory,
    leagueName,
    leagueLogo,
  });
return(
  <div className="max-w-full mx-auto text-black dark:text-white font-nunito">
      <h2 className="font-bold text-lg uppercase mb-4">{name}</h2>
  <div className="bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1B1D20] dark:border-[#333]">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt={`${name} Logo`}
          className="w-24 h-24 object-contain mb-2"
        />
        <h2 className="text-[20px] font-bold text-black dark:text-white text-center">{name}</h2>
        <p className="text-[16px] text-gray-600 dark:text-gray-300 text-center">{city}</p>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-[18px] font-semibold text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1">Team Information</h3>
          <p className="text-[16px] text-black dark:text-white"><span className="font-medium">Coach:</span> {coach}</p>
          <p className="text-[16px] text-black dark:text-white"><span className="font-medium">President:</span> {president}</p>
          <p className="text-[16px] text-black dark:text-white"><span className="font-medium">Value:</span> {marketValue}</p>

        </div>
        
        <div className="space-y-2">
          <h3 className="text-[18px] font-semibold text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1">Stadium</h3>
          <p className="text-[16px] text-black dark:text-white"><span className="font-medium">Name:</span> {stadiumName}</p>
          <p className="text-[16px] text-black dark:text-white"><span className="font-medium">Location:</span> {stadiumLocation}</p>
        </div>
        
        <div className="md:col-span-2 space-y-2">
          <h3 className="text-[18px] font-semibold text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1">History</h3>
          <p className="text-[16px] text-black dark:text-white">{teamHistory}</p>
        </div>
        
        <div className="md:col-span-2 flex items-center gap-3 mt-2">
          <div>
            <h3 className="text-[18px] font-semibold text-black dark:text-white">League</h3>
            <p className="text-[16px] text-black dark:text-white">{leagueName}</p>
          </div>
          <img
            src={leagueLogo}
            alt={`${leagueName} Logo`}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
);
}

export default InfoTeam;
