import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
    width: 230px;
    background-color: #181818;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
`;

const SectionTitle = styled.h3`
    font-family: "Funnel Display", sans-serif;
    font-weight: 400;  
    font-style: normal;
    border-bottom: 2px solid #ffcc00;
    padding-bottom: 10px;
`;

const ListItem = styled.li`
    font-family: "Funnel Display", sans-serif;
    list-style: none;
    margin: 10px 0;
`;

const Favorite: React.FC = () => {
    return (
        <NavContainer>
            <SectionTitle>Favoritos</SectionTitle>
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
                <ListItem>America de cali</ListItem>
                <ListItem>Bucaramanga fc</ListItem>

            </ul>
        </NavContainer>
    );
};

export default Favorite;

