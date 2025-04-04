import React from 'react';
import styled from 'styled-components';

const AdContainer = styled.div`
  background-color: #1e2124;
  color: #fff;
  padding: 20px;
  width: 850px;
  height: 30px;
  text-align: center;
`;

const AdText = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.7);
`;

const AD1: React.FC = () => {
  return (
    <AdContainer>
      <AdText>ANUNCIO</AdText>
    </AdContainer>
  );
};

export default AD1;