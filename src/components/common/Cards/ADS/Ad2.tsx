import React from "react";
import styled from "styled-components";

const StandingsContainer = styled.div`
  
  width: 255px;
  background-color: #111517;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
`;

const Ad2: React.FC = () => {

  return (
    <StandingsContainer>
        <h1>Anuncio 2</h1>
    </StandingsContainer>
  );
};

export default Ad2;