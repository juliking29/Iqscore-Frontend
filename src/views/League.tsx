import PageWithLayout from '../components/PageWithLayout';
import styled from 'styled-components';
import React from 'react';
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
  grid-template-columns: 35% 63%;
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

const League: React.FC = () => {
    return (
        <PageWithLayout>
            <Container>
                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>

                <TwoColumnContainer>
                    <LeftColumn>
                        <div>
                        </div>

                    </LeftColumn>

                    <RightColumn>

                    </RightColumn>
                </TwoColumnContainer>
            </Container>
        </PageWithLayout>
    )
}

export default League;