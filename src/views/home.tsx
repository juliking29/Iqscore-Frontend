import React from 'react';
import styled from 'styled-components';
import PageWithLayout from '../components/PageWithLayout';
import PartidosTop from '../components/common/Cards/TOPS/PartidosTop';
import LeagueTops from '../components/common/Cards/TOPS/LeaguesTop';
import PlanPremium from '../components/common/Cards/ADS/PlanPremim';
import PartidosDelDia from '../components/common/PrincipalPage/GameDay';
import AD1 from '../components/common/Cards/ADS/Ad1';
import BetplayPositions from '../components/common/Cards/PositionsTable/BetplayPositions';
import Ad2 from '../components/common/Cards/ADS/Ad2';
import TopJugadores from '../components/common/Cards/TOPS/PlayersTops';
import Ad3 from '../components/common/Cards/ADS/Ad3';
import AD4 from '../components/common/Cards/ADS/Ad4';

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0;
`;

const PositionAdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;


const FullWidthSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 42% 58%;
  width: 100%;
  gap: 2rem;
  margin: 30px 0;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Home: React.FC = () => {
  return (
    <PageWithLayout>
      <Container>
        <FullWidthSection>
          <AD1 />
        </FullWidthSection>
        
        <TwoColumnContainer>
          <LeftColumn>
            <div>
              <PlanPremium />
            </div>
            
            <div>
              <LeagueTops />
            </div>

            <PositionAdWrapper>
              <BetplayPositions />
              <Ad2 />
            </PositionAdWrapper>

            <div>
              <TopJugadores />
            </div>

            <div>
              <Ad3 />
            </div>

          </LeftColumn>
          
          <RightColumn>
            <div>
              <PartidosTop />
            </div>
            
            <div>
              <PartidosDelDia />
            </div>
          </RightColumn>
        </TwoColumnContainer>
        <FullWidthSection>
          <AD4 />
        </FullWidthSection>
      </Container>
    </PageWithLayout>
  );
};

export default Home;