import PageWithLayout from '../components/PageWithLayout';
import Info from '../components/common/Cards/CardTeamPage/CardInfoTeam'
import CardPrincipalTeam from '../components/common/Cards/CardTeamPage/CardPrincipalTeam';
import Plantilla from '../components/common/Cards/CardTeamPage/CardPlantilla';
import TooInterest from '../components/common/Cards/TooInterest';
import React from 'react';

const Team: React.FC = () => {
    return (
        <PageWithLayout>
            <Info />
            <CardPrincipalTeam />
            <Plantilla />
            <TooInterest />
        </PageWithLayout>
    )
}

export default Team;