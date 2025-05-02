
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation


interface Player {
  id: number;
  number: number;
  name: string;
  image: string;
  position: string;
  age: number;
  nationality: string;
  marketValue: string;
}

interface PlayersTeamProps {
  idEquipo: number;
}

// Function to format market value
function formatMarketValue(value: string | number): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "-";
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(2).replace(/\.00$/, "")}K`;
  return num.toString();
}

const PlayerTeam: React.FC<PlayersTeamProps> =  ({ idEquipo })  => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:3001/api/equipo/jugadores/${idEquipo}`);
        if (!response.ok) {
          throw new Error("Error fetching players");
        }
        const data = await response.json();
        console.log("Respuesta cruda del backend:", data);
        
        // Mapear los datos del backend al modelo Player del frontend
        const mappedPlayers: Player[] = data.map((item: any, idx: number) => ({
          id: item.ID_Jugador ?? idx + 1, // Si el backend no da un id, usamos el índice
          name: item.Nombre,
          image: item.Foto ?? "/default-player.png", // Imagen por defecto si no hay
          position: item.Posicion,
          age: item.Edad,
          marketValue: item.Valor_Mercado,
        }));
        console.log("Jugadores mapeados:", mappedPlayers);
        
        setPlayers(mappedPlayers);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
  
      } finally {
        setLoading(false);
      }
    };
    if (idEquipo) {
      fetchPlayers();
    }
  }, [idEquipo]);
  const navigate = useNavigate(); // Initialize useNavigate hook

    // Navigate to team page
  const handleTeamClick = (playerId: string) => {
    navigate(`/player/${playerId}`); // Navigate to the team page with the team ID
  };

  return (
    <div className="max-w-[1240px] mx-auto mb-2 text-black dark:text-white">
      <h3 className="text-[18px] font-bold uppercase mb-2 text-black dark:text-white">JUGADORES</h3>
      <div className="relative bg-white dark:bg-[#1B1D20] p-6 rounded-lg shadow-lg border border-[#ccc] dark:border-[#333]">
        {loading ? (
          <div className="py-4 text-center">Cargando...</div>
        ) : error ? (
          <div className="py-4 text-red-500 text-center">{error}</div>
        ) : (
          <>
            <div className="flex items-center py-3 px-6 border-b border-[#222]">
              <div className="w-6 mr-4 text-sm text-gray-400">#</div>
              <span className="text-sm font-medium text-gray-400 flex-1 px-2">Jugador</span>
              <span className="text-sm font-medium text-gray-400 w-24 px-2">Posición</span>
              <span className="text-sm font-medium text-gray-400 w-16 px-2">Edad</span>
              <span className="text-sm font-medium text-gray-400 w-24 px-2">Valor</span>
            </div>
            <div className="flex flex-col">
              {players.map((player) => (
                <div key={player.id} className="flex items-center py-3 px-6" onClick={() => handleTeamClick(player.id.toString())}>
                  <div className="w-6 mr-4 text-sm mb-2 text-black dark:text-white">{player.number}</div>
                  <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                  </div>
                    <span className="text-sm font-medium mb-2 text-black dark:text-white px-2">{player.name}</span>
                  </div>
                  <span className="text-sm mb-2 text-black dark:text-white w-24 px-1">{player.position}</span>
                  <span className="text-sm mb-2 text-black dark:text-white w-16 px-3">{player.age}</span>
                  <span className="text-sm mb-2 text-black dark:text-white w-24 px-1">€ {formatMarketValue(player.marketValue)}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerTeam;
