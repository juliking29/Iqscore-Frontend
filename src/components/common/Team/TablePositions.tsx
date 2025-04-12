import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const TableCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  max-width: 1240px;
`;

const CardTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 18px;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
  margin: 0 0 1rem 0;
  color: white;
  text-transform: uppercase;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr 1fr;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #8400FF;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr 1fr;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #222;
  font-size: 14px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const HeaderCell = styled.div`
  text-align: ${props => props.align || "left"};
`;

const Cell = styled.div`
  text-align: ${props => props.align || "left"};
`;

const PositionNumber = styled.div`
  font-weight: 500;
  color: #aaa;
`;

const TablePositions: React.FC = () => {
  const tablaData = [
    { pos: 1, equipo: "America de Cali", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 2, equipo: "Nacional", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 3, equipo: "Junior", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 4, equipo: "Bucaramanga", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 5, equipo: "Millonarios", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 6, equipo: "Santa Fe", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 7, equipo: "America de Cali", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 8, equipo: "Nacional", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 9, equipo: "Junior", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 10, equipo: "Bucaramanga", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 11, equipo: "Millonarios", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 12, equipo: "Santa Fe", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 13, equipo: "America de Cali", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 14, equipo: "Nacional", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 15, equipo: "Junior", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 16, equipo: "Bucaramanga", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 17, equipo: "Millonarios", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 18, equipo: "Santa Fe", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 19, equipo: "Millonarios", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
    { pos: 20, equipo: "Santa Fe", pj: 12, g: 12, e: 12, p: 12, gfgc: "12:15", pts: 12 },
  ];

  return (
    <CardContainer>
        <CardTitle>Tabla de posiciones</CardTitle>
      <TableCardContainer>
        <TableHeader>
          <HeaderCell>#</HeaderCell>
          <HeaderCell>Equipo</HeaderCell>
          <HeaderCell align="center">PJ</HeaderCell>
          <HeaderCell align="center">G</HeaderCell>
          <HeaderCell align="center">E</HeaderCell>
          <HeaderCell align="center">P</HeaderCell>
          <HeaderCell align="center">GF:GC</HeaderCell>
          <HeaderCell align="center">PTS</HeaderCell>
        </TableHeader>
          {tablaData.map((team) => (
            <TableRow key={team.pos}>
              <Cell>
                <PositionNumber>{team.pos}</PositionNumber>
              </Cell>
              <Cell>{team.equipo}</Cell>
              <Cell align="center">{team.pj}</Cell>
              <Cell align="center">{team.g}</Cell>
              <Cell align="center">{team.e}</Cell>
              <Cell align="center">{team.p}</Cell>
              <Cell align="center">{team.gfgc}</Cell>
              <Cell align="center">{team.pts}</Cell>
            </TableRow>
          ))}
      </TableCardContainer>
    </CardContainer>
  );
};

export default TablePositions;