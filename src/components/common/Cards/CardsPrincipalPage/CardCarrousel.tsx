import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGold from '../../Buttons/ButtonGreen'; 

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2F4553;
  color: white;
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const CarouselContent = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  box-sizing: border-box;
`;

const Title = styled.h2`
    font-family: "Funnel Display", sans-serif;
    font-weight: 700;
  font-style: normal;
  font-size: 32px;
  margin-bottom: 24px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const Subtitle = styled.p`
  font-family: "Funnel Display", sans-serif;
  font-size: 18px;
  margin-bottom: 24px;
  font-weight: normal;
  width: 100%;
  text-align: center;
`;

const BenefitsList = styled.div`
  font-family: "Funnel Display", sans-serif;
  width: 80%;
  margin: 0 auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  text-align: left;
  font-size: 18px;
`;

const Bullet = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px; 
  width: 240px;
  display: flex;
  justify-content: center;
`;

const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }

  ${({ direction }) => (direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
`;

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const slides = [
    {
      title: 'CAMBIA AL PLAN PREMIUM',
      subtitle: 'Pasate al plan premium para disfrutar de mejores beneficios:',
      benefits: [
        'Chat de IA para predicciones mas precisas',
        'Fin a los anuncios'
      ]
    },
    {
      title: 'Datos del partido',
      subtitle: 'Real Madrid vs Manchester city',
      benefits: []
    }
  ];

  return (
    <CarouselContainer>
      <ArrowButton direction="left" onClick={handlePrev}>
        &#8592;
      </ArrowButton>
      <CarouselContent currentIndex={currentIndex}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <Title>{slide.title}</Title>
            <Subtitle>{slide.subtitle}</Subtitle>
            
            {slide.benefits.length > 0 && (
              <BenefitsList>
                {slide.benefits.map((benefit, i) => (
                  <BenefitItem key={i}>
                    <Bullet>•</Bullet>
                    {benefit}
                  </BenefitItem>
                ))}
              </BenefitsList>
            )}
            
            {index === 0 && (
              <ButtonContainer>
                <ButtonGold text="OBTENER PLAN" onClick={() => console.log('Plan Premium seleccionado')} />
              </ButtonContainer>
            )}
          </Slide>
        ))}
      </CarouselContent>
      <ArrowButton direction="right" onClick={handleNext}>
        &#8594;
      </ArrowButton>
    </CarouselContainer>
  );
};

export default Carousel;