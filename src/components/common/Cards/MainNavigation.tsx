import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
    width: 230px;
    background-color: #192E36;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
`;

const SectionTitle = styled.h3`
    font-family: "Funnel Display", sans-serif;
    font-weight: 700;
    font-style: normal;
    border-bottom: 2px solid #FDDDFC;
    padding-bottom: 10px;
`;

const ListItem = styled.li`
    font-family: "Funnel Display", sans-serif;
    list-style: none;
    margin: 10px 0;
`;

const Navigation: React.FC = () => {
    return (
        <NavContainer>
            {/* Sección de Populares */}
            <SectionTitle>POPULARES</SectionTitle>
            <ul>
                <ListItem>Premier League</ListItem>
                <ListItem>La Liga</ListItem>
                <ListItem>Serie A</ListItem>
                <ListItem>Champions League</ListItem>
                <ListItem>Europa League</ListItem>
                <ListItem>Bundesliga</ListItem>
                <ListItem>Conmebol Libertadores</ListItem>
                <ListItem>Copa Sudamericana</ListItem>
            </ul>

            {/* Sección de Equipos Principales */}
            <SectionTitle>EQUIPOS PRINCIPALES</SectionTitle>
            <ul>
                <ListItem>Real Madrid</ListItem>
                <ListItem>Liverpool</ListItem>
                <ListItem>Barcelona</ListItem>
                <ListItem>Juventus</ListItem>
                <ListItem>America De Cali</ListItem>
                <ListItem>Bucaramanga FC</ListItem>
                <ListItem>Manchester City</ListItem>
                <ListItem>Paris SG</ListItem>
                <ListItem>Arsenal</ListItem>
            </ul>

            {/* Sección de Favoritos */}
            <SectionTitle>FAVORITOS</SectionTitle>
            <ul>
                <ListItem>Premier League</ListItem>
                <ListItem>La Liga</ListItem>
                <ListItem>Serie A</ListItem>
                <ListItem>Champions League</ListItem>
                <ListItem>Europa League</ListItem>
                <ListItem>Bundesliga</ListItem>
                <ListItem>Conmebol Libertadores</ListItem>
                <ListItem>Real Madrid</ListItem>
                <ListItem>Juventus</ListItem>
                <ListItem>America de Cali</ListItem>
                <ListItem>Bucaramanga FC</ListItem>
            </ul>

            {/* Sección Principal */}
            <SectionTitle>PRINCIPAL</SectionTitle>
            <ul>
                <ListItem>EQUIPOS</ListItem>
                <ListItem>LIGAS</ListItem>
            </ul>
        </NavContainer>
    );
};

export default Navigation;