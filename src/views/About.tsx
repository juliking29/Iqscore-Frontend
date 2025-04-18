import React from 'react';
import PageWithLayout from '../components/PageWithLayout';
import styled from 'styled-components';
import AD1 from '../components/common/Cards/ADS/Ad1';
import AboutUsCard from '../components/common/Cards/About/AboutUs';

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

const AboutUs: React.FC = () => {
    return (
        <PageWithLayout>
            <Container>
                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>

                <FullWidthSection>
                    <AboutUsCard />
                </FullWidthSection>

                <FullWidthSection>
                    <AD1 />
                </FullWidthSection>
                
            </Container>
        </PageWithLayout>
    )
}

export default AboutUs;