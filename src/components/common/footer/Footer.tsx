import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    font-family: "Funnel Display", sans-serif;
  background-color: #192E36;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const Copyright = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 14px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  display: inline-block;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>
        2025 IQ-Score | Todos los derechos reservados
      </Copyright>
      
      <ContactLinks>
        <ContactLink href="mailto:soporte@IQ-Score.com.co">
          Soporte: soporte@IQ-Score.com.co
        </ContactLink>
        <Divider>|</Divider>
        <ContactLink href="mailto:partners@IQ-Score.com.co">
          Socios: partners@IQ-Score.com.co
        </ContactLink>
        <Divider>|</Divider>
        <ContactLink href="mailto:press@IQ-Score.com.co">
          Prensa: press@IQ-Score.com.co
        </ContactLink>
      </ContactLinks>
    </FooterContainer>
  );
};

export default Footer;