import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #111517;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.footer`
  font-family: "Nunito Sans", sans-serif;
  background-color: #111517;
  color: white;
  padding: 40px 60px;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    gap: 30px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 1px solid #333;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #333;
    padding-left: 0;
    padding-top: 20px;
  }
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Copyright = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 10px;
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
  margin: 0 5px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeagueLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const LeagueLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LeftSection>
          <Logo>logo (EN PROCESO)</Logo>
          <Copyright>
            2025 IQ-Score | Todos los derechos reservados
          </Copyright>
          <ContactLinks>
            <ContactLink href="mailto:Soportesoporte@IQ-Score.com.co">
              Soportesoporte@IQ-Score.com.co
            </ContactLink>
            <Divider>|</Divider>
            <ContactLink href="mailto:Sociospartners@IQ-Score.com.co">
              Sociospartners@IQ-Score.com.co
            </ContactLink>
            <Divider>|</Divider>
            <ContactLink href="mailto:Prensapress@IQ-Score.com.co">
              Prensapress@IQ-Score.com.co
            </ContactLink>
          </ContactLinks>
        </LeftSection>
        
        <RightSection>
          <LeagueLinks>
            <LeagueLink href="#">Liga betplay</LeagueLink>
            <LeagueLink href="#">Champions League</LeagueLink>
            <LeagueLink href="#">Premier League</LeagueLink>
          </LeagueLinks>
          
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>
          </SocialIcons>
        </RightSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;