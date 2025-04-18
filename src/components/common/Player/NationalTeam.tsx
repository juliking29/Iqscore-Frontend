import React from "react";

const NationalTeam: React.FC = () => {
  return (
    <div className="max-w-[1250px] mx-auto text-white font-nunito">
      <h2 className="text-[18px] font-bold uppercase mb-2 text-black dark:text-white">
        Equipo Nacional
      </h2>

      <div className="bg-[#8400FF] rounded-lg px-4 py-3 flex items-center shadow-md">
        {/* Bandera */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          alt="Bandera Francia"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Estadísticas alineadas a la derecha */}
        <div className="flex gap-8 text-center ml-auto">
          <div>
            <p className="text-xs font-semibold uppercase">Partidos</p>
            <p className="text-sm font-bold">17</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase">Goles</p>
            <p className="text-sm font-bold">9</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase">Asistencias</p>
            <p className="text-sm font-bold">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalTeam;
