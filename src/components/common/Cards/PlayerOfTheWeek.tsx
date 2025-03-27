import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #213743;
  color: #fff;
  padding: 20px;
  width: 230px;
  margin-top: 20px;
  border-radius: 8px;
`;

const SectionTitle = styled.h3`
    font-family: "Funnel Display", sans-serif;
    font-weight: 700; 
  font-style: normal;
  border-bottom: 2px solid #ffcc00;
  padding-bottom: 10px;
  margin: 0;
`;

const PlayerName = styled.h4`
  font-family: "Funnel Display", sans-serif;
  margin: 10px 0;
`;

const PlayerStats = styled.p`
  font-family: "Funnel Display", sans-serif;
  margin: 5px 0;
`;

const HeatmapImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const PlayerOfTheWeek: React.FC = () => {
  return (
    <SidebarContainer>
      <SectionTitle>JUGADOR DE LA SEMANA</SectionTitle>
      <PlayerName>Kylian Mbappé</PlayerName>
      <HeatmapImage src="https://pbs.twimg.com/media/FNWEf8oXsAEiHzx.png" alt="Heatmap" />
      <PlayerStats>Estadísticas 24/25:</PlayerStats>
      <PlayerStats>Goles: 24</PlayerStats>
      <PlayerStats>Asistencias: 12</PlayerStats>
      <PlayerStats>ASR: 8.25</PlayerStats>
    </SidebarContainer>
  );
};

export default PlayerOfTheWeek;