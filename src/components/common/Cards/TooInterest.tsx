import React from 'react';

const TooInterest: React.FC = () => {
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'left' as const,
            borderRadius: '10px',
            margin: '20px auto',
            maxWidth: '1300px',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        logoContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        logo: {
            width: '80px',
            height: 'auto',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>También te puede interesar</div>
            <div style={styles.logoContainer}>
                <img src="https://assets.laliga.com/squad/2024/t186/p37055/1024x1024/p37055_t186_2024_1_003_000.png" alt="Real Madrid" style={styles.logo} />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png" alt="FC Barcelona" style={styles.logo} />
                <img src="https://logolook.net/wp-content/uploads/2024/01/LaLiga-Logo.png" alt="La Liga" style={styles.logo} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BetPlay-Dimayor_logo.svg/1200px-BetPlay-Dimayor_logo.svg.png" alt="Dimayor" style={styles.logo} />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png" alt="Manchester City" style={styles.logo} />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" alt="Real Madrid" style={styles.logo} />
            </div>
        </div>
    );
};

export default TooInterest;
