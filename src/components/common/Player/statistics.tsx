import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PlayerData {
  idJugador: number;
  nombre: string;
  edad: number;
  fecha_nacimiento: string;
  nacionalidad: string;
  nacionalidad_logo: string | null;
  altura: string;
  peso: string;
  pierna_habil: string;
  posicion: string;
  posicion_ideal: string;
  valor_mercado: string;
  partidos_jugados: number;
  goles: number;
  asistencias: number;
  tarjetas_rojas: number;
  tarjetas_amarillas: number;
  pases_completados: number;
  tiros_totales: number;
  tiros_al_arco: number;
  corners: number;
  faltas: number;
  habilidades: string;
  caracteristicas: string | null;
  atributos: string | null;
  numero_camiseta: number | null;
}

const Statistics: React.FC = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/jugadores/${playerId}`);
        if (!res.ok) throw new Error("Error al obtener los datos del jugador");
        const data = await res.json();
        setPlayer(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayer();
  }, [playerId]);

  if (loading) return <div className="text-center">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!player) return null;

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 text-black dark:text-white font-nunito">
      <h2 className="text-lg font-semibold mb-4">DATOS DEL JUGADOR</h2>

      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1B1D20] dark:border-[#333]">
        
        {/* Lado izquierdo - Datos personales y estadísticas */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-600 pr-4 pb-4 md:pb-0 space-y-2 text-sm md:text-base">
          <p><strong>Edad:</strong> {player.edad}</p>
          <p><strong>Fecha de Nacimiento:</strong> {new Date(player.fecha_nacimiento).toLocaleDateString()}</p>
          <p><strong>Nacionalidad:</strong> {player.nacionalidad}</p>
          <p><strong>Estatura:</strong> {player.altura} m</p>
          <p><strong>Peso:</strong> {player.peso} kg</p>
          <p><strong>Pierna Hábil:</strong> {player.pierna_habil}</p>
          <p><strong>Posición:</strong> {player.posicion}</p>
          <p><strong>Posición Ideal:</strong> {player.posicion_ideal}</p>
          <p><strong>Partidos:</strong> {player.partidos_jugados}</p>
          <p><strong>Goles:</strong> {player.goles}</p>
          <p><strong>Asistencias:</strong> {player.asistencias}</p>
          <p><strong>Tarjetas Amarillas:</strong> {player.tarjetas_amarillas}</p>
          <p><strong>Tarjetas Rojas:</strong> {player.tarjetas_rojas}</p>
          <p><strong>Pases Completados:</strong> {player.pases_completados}</p>
          <p><strong>Tiros Totales:</strong> {player.tiros_totales}</p>
          <p><strong>Tiros a Puerta:</strong> {player.tiros_al_arco}</p>
          <p><strong>Tiros de esquina:</strong> {player.corners}</p>
          <p><strong>Faltas Cometidas:</strong> {player.faltas}</p>
          <p><strong>Habilidades:</strong> {player.habilidades}</p>
          <p><strong>Características:</strong> {player.caracteristicas ?? "N/A"}</p>
          <p><strong>Atributos:</strong> {player.atributos ?? "N/A"}</p>
          <p><strong>Número de camiseta:</strong> {player.numero_camiseta ?? "N/A"}</p>
        </div>

        {/* Lado derecho - Estadísticas por equipos anteriores */}
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
