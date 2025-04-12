import React from "react";

const InfoTeam: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <h3 className="text-white text-[18px] font-sans uppercase mb-4">
        América de Cali
      </h3>
      
      <div className="bg-[#111517] rounded-xl overflow-hidden text-white font-sans shadow-[0_10px_20px_#111517,0_0_0_#BEBEBE] px-6 py-4 flex items-center justify-between max-w-[1240px]">
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 overflow-hidden bg-transparent">
            <img
              src="https://a.espncdn.com/i/teamlogos/soccer/500/8109.png"
              alt="América de Cali logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
                alt="Colombia flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base font-normal">Colombia</span>
          </div>
          <div className="text-[18px] font-semibold mt-1">$ 24 M</div>
        </div>

      </div>
    </div>
  );
};

export default InfoTeam;
