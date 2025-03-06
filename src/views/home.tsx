import React from 'react';
import PageWithLayout from '../components/PageWithLayout';
import CardLeague from '../components/common/Cards/CardsPrincipalPage/CardLeague';
import CardTeam from '../components/common/Cards/CardsPrincipalPage/CardTeam';
import CardCarrousel from '../components/common/Cards/CardsPrincipalPage/CardCarrousel';
import CardPrincipal from '../components/common/Cards/CardsPrincipalPage/CardPrincipal'

const Home = () => {
  return (
    <PageWithLayout>
      <div style={styles.cardsContainer}>
        <div style={styles.leftColumn}>
          <CardLeague />
        </div>
        <div style={styles.centerColumn}>
          <CardCarrousel />
        </div>
        <div style={styles.rightColumn}>
          <CardTeam />
        </div>
      </div>
      <div>
        <CardPrincipal />
      </div>
    </PageWithLayout>
  );
};

const styles = {
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '20px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column' as 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  centerColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: '10px',
    padding: '20px',
  },
};

export default Home;