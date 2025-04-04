import React from 'react';
import styled from 'styled-components';
import PageWithLayout from '../components/PageWithLayout';
import PartidosTop from '../components/common/Cards/TOPS/PartidosTop';
import LeagueTops from '../components/common/Cards/TOPS/LeaguesTop';
import PlanPremium from '../components/common/Cards/ADS/PlanPremim';
import PartidosDelDia from '../components/common/PrincipalPage/GameDay';
import AD1 from '../components/common/Cards/ADS/Ad1';

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0;
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
        {/* Ad section - full width */}
        <FullWidthSection>
          <AD1 />
        </FullWidthSection>
        
        {/* Two column layout */}
        <TwoColumnContainer>
          {/* Left column */}
          <LeftColumn>
            <div>
              <PlanPremium />
            </div>
            
            <div>
              <LeagueTops />
            </div>
          </LeftColumn>
          
          {/* Right column */}
          <RightColumn>
            <div>
              <PartidosTop />
            </div>
            
            <div>
              <PartidosDelDia />
            </div>
          </RightColumn>
        </TwoColumnContainer>
      </Container>
    </PageWithLayout>
  );
};

export default Home;