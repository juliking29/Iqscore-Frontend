import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface LigaInfoType {
  idLiga: number;
  nombre: string;
  pais: string;
  nivel: string;
  año_inicio: number;
  año_fin: number;
  imagen_logo: string;
  imagen_trofeo: string;
  descripcion_historica: string;
}

const LeagueInfo: React.FC = () => {
  const location = useLocation();
  const { idLiga } = location.state as { idLiga: number };
  const [liga, setLiga] = useState<LigaInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiga = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/liga/${idLiga}`);
        const data = await response.json();
        setLiga(data[0]); // recuerda que tu API devuelve un array
      } catch (error) {
        console.error("Error al cargar la liga:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiga();
  }, [idLiga]);

  if (loading) {
    return (
      <div className="text-center text-black dark:text-white mt-10 font-nunito">
        Cargando información de la liga...
      </div>
    );
  }

  if (!liga) {
    return (
      <div className="text-center text-red-500 dark:text-red-400 mt-10 font-nunito">
        No se encontró información de la liga.
      </div>
    );
  }

  return (
    <div className="max-w-[1250px] mx-auto text-black dark:text-white font-nunito">
      <h2 className="text-[18px] font-bold uppercase mb-4">{liga.nombre}</h2>
      <div className="bg-white rounded-lg overflow-hidden text-black dark:text-white font-nunito p-6 shadow-lg border border-[#ccc] dark:bg-[#1c1f22] dark:shadow-[0_10px_20px_#111517,0_0_0px_#BEBEBE] dark:border-[#333] flex items-center gap-6">
        {/* Liga Logo */}
        <div className="w-[80px] h-[100px] flex-shrink-0">
          <img
            src={liga.imagen_logo}
            alt={`${liga.nombre} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Liga Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-1">{liga.nivel} ({liga.año_inicio} - {liga.año_fin})</h3>
          <div className="flex items-center text-base text-gray-600 dark:text-gray-300 mb-2">
            <img
              src={`https://flagcdn.com/w40/${liga.pais.toLowerCase().slice(0, 2)}.png`}
              alt={`${liga.pais} Flag`}
              className="w-6 h-4 rounded-sm mr-2 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg";
              }}
            />
            {liga.pais}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{liga.descripcion_historica}</p>
        </div>
      </div>
    </div>
  );
};

export default LeagueInfo;
