import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const CardContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const Title = styled.h2`
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

const PremiumBanner = styled.div`
  background-color: #354AED;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BannerText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 18px;
  color: white;
  font-weight: 500;
`;

const ArrowButton = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3949ab;
`;

const PlanPremium: React.FC = () => {
    return (
    <CardContainer>
      <Title>Plan Premium</Title>
      <PremiumBanner>
        <ContentSection>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2095/2095163.png" 
            alt="Goal" 
            style={{ width: '80px', height: '70px', objectFit: 'contain' }} 
          />
          <BannerText>
            Disfruta de los beneficios del plan premium
          </BannerText>
        </ContentSection>
        <ArrowButton>
          <FaArrowRight />
        </ArrowButton>
      </PremiumBanner>
    </CardContainer>
  );
};

export default PlanPremium;