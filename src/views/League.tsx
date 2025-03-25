import React from 'react';
import PageWithLayout from '../components/PageWithLayout';
import CardInfoLeague from '../components/common/Cards/CardLeaguePage/CardInfoLeague';
import CardPrincipal from '../components/common/Cards/CardLeaguePage/CardPrincipalLeague';
import TooInterest from '../components/common/Cards/TooInterest';

const League: React.FC = () => {
    return (
        <PageWithLayout>
            <CardInfoLeague />
            <CardPrincipal />
            <TooInterest />
        </PageWithLayout>
    )
}

export default League;