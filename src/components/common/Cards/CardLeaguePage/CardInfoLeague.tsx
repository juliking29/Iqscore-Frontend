import React from 'react';

const InfoLeague = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    card: {
      backgroundColor: 'transparent',
      width: '100%',
      maxWidth: '400px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: 'none',
    },
    logo: {
      marginRight: '16px',
    },
    logoImage: {
      height: '200px',
      width: 'auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
    },
    infoRow: {
      display: 'flex',
      marginBottom: '10px',
    },
    label: {
      fontWeight: 'medium',
      width: '130px',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.logo}>
        <img
          src="https://image-service.onefootball.com/transform?w=256&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/9.png"
          alt="Premier League"
          style={styles.logoImage}
        />
      </div>
      <div style={styles.info}>
        <h2 style={styles.title}>Premier League</h2>
        <div style={styles.infoRow}>
          <span style={styles.label}>2024/2025</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Lider actual:</span>
          <span style={styles.label}>Liverpool</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Ultimo campeon:</span>
          <span style={styles.label}>Manchester City</span>
        </div>
      </div>
    </div>
  );
};

export default InfoLeague;