import React from 'react';
import styled from 'styled-components';
import PageWithLayout from '../components/PageWithLayout';
import AD1 from '../components/common/Cards/ADS/Ad1';
import MatchInfo from '../components/common/Game/InfoGame';
import BettingOdds from '../components/common/Game/Odds';
import StartingLineup from '../components/common/Game/Headlines';
import Ad3 from '../components/common/Cards/ADS/Ad3';

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0;
  margin-top: 100px;

`;

const FullWidthSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 38%;
  width: 100%;
  gap: 1rem;
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

const Game: React.FC = () => {
    return (
        <PageWithLayout>
            <Container>
                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>

                <TwoColumnContainer>
                    <LeftColumn>
                        <div>
                            <MatchInfo />
                        </div>
                        <div>
                            <StartingLineup />
                        </div>

                    </LeftColumn>

                    <RightColumn>
                        <div>
                            <BettingOdds />
                        </div>
                        <div>
                            <Ad3 />
                        </div>
                    </RightColumn>
                </TwoColumnContainer>
                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>
            </Container>
        </PageWithLayout>
    )
}

export default Game;