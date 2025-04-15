import React from 'react';
import PageWithLayout from '../components/PageWithLayout';
import styled from 'styled-components';
import AD1 from '../components/common/Cards/ADS/Ad1';
import PlayerProfile from '../components/common/Player/ProfilePlayer';
import PlayerTrajectory from '../components/common/Player/TeamsPlayer';
import Statistics from '../components/common/Player/statistics';
import NationalTeam from '../components/common/Player/NationalTeam';

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0;
  margin-top: 100px; /* Esto da espacio para el navbar fijo */
`;

const FullWidthSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
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

const Player: React.FC = () => {
    return (
        <PageWithLayout>
            <Container>
                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>

                <TwoColumnContainer>
                    <LeftColumn>
                        <div>
                            <PlayerProfile />
                        </div>  
                    </LeftColumn>


                    <RightColumn>
                      <div>
                        <PlayerTrajectory />
                      </div>

                    </RightColumn>
                </TwoColumnContainer>

                <FullWidthSection>
                  <Statistics />
                </FullWidthSection>

                <TwoColumnContainer>
                <LeftColumn>
                    <div>
                  <NationalTeam />
                  </div>
                </LeftColumn>
                </TwoColumnContainer>


                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>
                
            </Container>
        </PageWithLayout>
    )
}

export default Player;