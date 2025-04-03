import React from 'react';
import styled from 'styled-components';
import PageWithLayout from '../components/PageWithLayout';
import PartidosTop from '../components/common/Cards/TOPS/PartidosTop';
import LeagueTops from '../components/common/Cards/TOPS/LeaguesTop';
import PlanPremium from '../components/common/Cards/ADS/PlanPremim';
import PartidosDelDia from '../components/common/PrincipalPage/GameDay';

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 58%;
  width: 100%;
  gap: 2rem;
  padding: 30px 0;
  max-width: 1240px;
  margin: 0 auto;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  height: 100%;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const Home: React.FC = () => {
  return (
    <PageWithLayout>
      <Container>
        {/* Columna izquierda */}
        <LeftColumn>
          <Section>
            <PlanPremium />
          </Section>
          
          <Section>
            <LeagueTops />
          </Section>
        </LeftColumn>
        
        {/* Columna derecha */}
        <RightColumn>
          <Section>
            <PartidosTop />
          </Section>
          
          <Section>
            <PartidosDelDia />
          </Section>
        </RightColumn>
      </Container>
    </PageWithLayout>
  );
};

export default Home;