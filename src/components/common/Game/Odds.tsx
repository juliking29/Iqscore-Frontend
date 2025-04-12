import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const BettingCardContainer = styled.div`
  background-color: #111517;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 10px 20px #111517, 0 0 0px #BEBEBE;
  max-width: 1250px;
  padding: 1.5rem;
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

const BookmakerRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BookmakerLogo = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background || 'transparent'};
  border-radius: 8px;
  overflow: hidden;
`;

const BookmakerImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const OddsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 300px;
`;

const OddButton = styled.div`
  background-color: #8400FF;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-align: center;
  width: 50px;
`;

const BettingOdds: React.FC = () => {
  const bookmakers = [
    { 
      id: 1, 
      name: "Stake", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVt1rF_cNMl_8f2VnubtCpB918Y1C5xzxLQA&s", 
      odds: ["2.15", "4.4", "3.52"] 
    },
    { 
      id: 2, 
      name: "BetPlay", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiduMQLVQcYYQwDlrygk_ZqiNzz9QmE-UVg&s", 
      odds: ["2.15", "4.4", "3.52"] 
    },
    { 
      id: 3, 
      name: "RushBet", 
      logo: "https://www.valoraanalitik.com/wp-content/uploads/2022/10/Rushbet-apuestas.jpg", 
      odds: ["2.15", "4.4", "3.52"] 
    },
    { 
      id: 4, 
      name: "WPlay", 
      logo: "https://yt3.googleusercontent.com/f19l64EqqaUqg_I2_T7X8aO94T6DH5_l_4RLRDqPvoo5fvHH1FuEfJ9E_5kdPfjMoHPs1y2R=s900-c-k-c0x00ffffff-no-rj ", 
      odds: ["2.15", "4.4", "3.52"] 
    }
  ];

  return (
    <CardContainer>
      <CardTitle>CUOTAS</CardTitle>
      <BettingCardContainer>
        {bookmakers.map((bookmaker) => (
          <BookmakerRow key={bookmaker.id}>
            <BookmakerLogo background={bookmaker.background}>
              <BookmakerImage src={bookmaker.logo} alt={bookmaker.name} />
            </BookmakerLogo>
            <OddsContainer>
              {bookmaker.odds.map((odd, index) => (
                <OddButton key={index}>{odd}</OddButton>
              ))}
            </OddsContainer>
          </BookmakerRow>
        ))}
      </BettingCardContainer>
    </CardContainer>
  );
};

export default BettingOdds;