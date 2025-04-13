import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PartidosTop: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-black dark:text-white font-nunito">
      <h2 className="text-[18px] font-bold uppercase mb-4">
        PARTIDOS TOP DE LA SEMANA
      </h2>

      <div className="relative bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1B1D20] dark:border-[#333]">
        <button className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black dark:text-white text-xl opacity-70 hover:opacity-100">
          <FaChevronLeft />
        </button>

        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex flex-col items-center gap-4 text-center w-[250px]">
            <img
              src="https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/08/real-madrid-logo-resized.png"
              alt="Real Madrid Logo"
              className="w-[120px] h-[120px] object-contain"
            />
            <h3 className="text-[14px] uppercase">REAL MADRID</h3>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="text-[#555] dark:text-[#aaaaaa] text-[20px]">31/03/2025</div>
            <div className="flex items-center gap-4 text-[18px]">
              <span className="text-[2.5rem] font-extrabold">1</span>
              <span className="text-[2rem] text-[#555] dark:text-[#aaaaaa]">x</span>
              <span className="text-[2.5rem] font-extrabold">2</span>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="bg-[#8400FF] text-white px-3 py-1 text-center rounded-sm text-[16px] w-[60px]">
                2.15
              </div>
              <div className="bg-[#8400FF] text-white px-3 py-1 text-center rounded-sm text-[16px] w-[60px]">
                4.4
              </div>
              <div className="bg-[#8400FF] text-white px-3 py-1 text-center rounded-sm text-[16px] w-[60px]">
                3.52
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center w-[250px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
              alt="Manchester City Logo"
              className="w-[120px] h-[120px] object-contain"
            />
            <h3 className="text-[14px] uppercase">MANCHESTER CITY</h3>
          </div>
        </div>

        <button className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black dark:text-white text-xl opacity-70 hover:opacity-100">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PartidosTop;
