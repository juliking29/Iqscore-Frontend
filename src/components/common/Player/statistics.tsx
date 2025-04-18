import React from "react";

const Statistics: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 text-black dark:text-white font-nunito">
      <h2 className="text-lg font-semibold mb-4">DATOS DEL JUGADOR</h2>

      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1B1D20] dark:border-[#333]">
        
        {/* Lado izquierdo */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-600 pr-4 pb-4 md:pb-0 space-y-2 text-sm md:text-base">
          <p className="font-semibold">Edad</p>
          <p className="font-semibold">Estatura</p>
          <p className="font-semibold">Partidos</p>
          <p className="font-semibold">Goles</p>
          <p className="font-semibold">Asistencias</p>
          <p className="font-semibold">Tarjetas Amarillas</p>
          <p className="font-semibold">Tarjetas Rojas</p>
        </div>

        {/* Estadísticas por equipo */}
        <div className="flex-1 pl-0 md:pl-4 grid grid-cols-3 gap-4 mt-4 md:mt-0 text-sm md:text-base">
          
          <div className="flex flex-col items-start space-y-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/1200px-LogoASMonacoFC2021.svg.png"
              alt="Monaco"
              className="w-10 h-10 object-contain"
            />
            <p className="font-semibold">P:</p>
            <p className="font-semibold">G:</p>
            <p className="font-semibold">A:</p>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png"
              alt="PSG"
              className="w-10 h-10 object-contain"
            />
            <p className="font-semibold">P:</p>
            <p className="font-semibold">G:</p>
            <p className="font-semibold">A:</p>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <img
              src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png"
              alt="Real Madrid"
              className="w-10 h-10 object-contain"
            />
            <p className="font-semibold">P:</p>
            <p className="font-semibold">G:</p>
            <p className="font-semibold">A:</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Statistics;
