const Info  = () => {
  const styles = {
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
      flexDirection: 'column' as const,
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
          src="https://brandlogos.net/wp-content/uploads/2025/02/liverpool_f.c.-logo_brandlogos.net_vr9dx-300x548.png"
          alt="Liverpool FC Logo"
          style={styles.logoImage}
        />
      </div>
      <div style={styles.info}>
        <h2 style={styles.title}>LIVERPOOL FC</h2>
        <div style={styles.infoRow}>
          <span style={styles.label}>Estadio:</span>
          <span style={styles.label}>Anfield (Liverpool)</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Capacidad:</span>
          <span style={styles.label}>61 276</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Entrenador:</span>
          <span style={styles.label}>Jhay</span>
        </div>
      </div>
    </div>
  );
};

export default Info;