import React from "react";
import styled from "styled-components";

const TopPlayersContainer = styled.div`
  max-width: 1250px;
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
`;


const Ad3: React.FC = () => {
  return (
    <TopPlayersContainer>
    <h1>Anuncio</h1>
    </TopPlayersContainer>
  );
};

export default Ad3;