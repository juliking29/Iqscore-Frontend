import React from 'react';

const Info: React.FC = () => {
  const styles = {
    card: {
      backgroundColor: 'transparent',
      color: 'white',
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
      marginBottom: '4px',
    },
    label: {
      fontWeight: 'medium',
      width: '120px',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.logo}>
        <img
          src="https://brandlogos.net/wp-content/uploads/2025/02/liverpool_f.c.-logo_brandlogos.net_vr9dx-300x548.png"
          alt="Liverpool FC Logo"
          style={styles.logoImage}
        />
      </div>
      <div style={styles.info}>
        <h2 style={styles.title}>LIVERPOOL FC</h2>
        <div style={styles.infoRow}>
          <span style={styles.label}>Estadio:</span>
          <span>Anfield (Liverpool)</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Capacidad:</span>
          <span>61 276</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Entrenador:</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Info;