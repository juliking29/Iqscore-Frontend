import PageWithLayout from '../components/PageWithLayout';
import Info from '../components/common/Cards/CardTeamPage/CardInfoTeam'
import CardPrincipalTeam from '../components/common/Cards/CardTeamPage/CardPrincipalTeam';
import Plantilla from '../components/common/Cards/CardTeamPage/CardPlantilla';
import TooInterest from '../components/common/Cards/TooInterest';

const Team = () => {
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