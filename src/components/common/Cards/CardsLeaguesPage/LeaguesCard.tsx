import React from 'react';

const LeaguesCard: React.FC = () => {
    
    const leagues = [
        {
            name: 'Premier League',
            logo: 'https://logodownload.org/wp-content/uploads/2016/03/premier-league-1-logo.png'
        },
        {
            name: 'La Liga',
            logo: 'https://assets.laliga.com/assets/logos/laliga-v/laliga-v-300x300.png'
        },
        {
            name: 'Serie A',
            logo: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Serie_A_logo.png'
        },
        {
            name: 'Bundesliga',
            logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg'
        },
        {
            name: 'Ligue 1',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ligue1.svg/1200px-Ligue1.svg.png'
        }
    ];

    const styles = {
        cardPrincipal: {
            backgroundColor: '#2F4553',  
            borderRadius: '10px',
            overflow: 'hidden',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '850px',
            margin: '0 auto'
        },
        leaguesContainer: {
            padding: '20px'
        },
        title: {
            padding: '10px',
            fontSize: '22px',
            color: '#ccc',
            fontFamily: '"Funnel Display", sans-serif',
            fontWeight: 700
        },
        leagueRow: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px 10px',
            borderBottom: '1px solid #333',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#3a5466'
            }
        },
        leagueLogo: {
            width: '40px',
            height: '40px',
            objectFit: 'contain' as const,
            marginRight: '20px',
            transition: 'transform 0.3s ease'
        },
        leagueName: {
            fontSize: '16px',
            fontFamily: '"Funnel Display", sans-serif',
            transition: 'transform 0.3s ease'
        }
    };

    return (
        <div style={styles.cardPrincipal}>
            <div style={styles.leaguesContainer}>
                <div style={styles.title}>LIGAS</div>
                {leagues.map((league, index) => (
                    <div 
                        style={styles.leagueRow} 
                        key={index}
                        onMouseOver={(e) => {
                            const img = e.currentTarget.querySelector('img');
                            const text = e.currentTarget.querySelector('span');
                            if (img) img.style.transform = 'scale(1.1)';
                            if (text) text.style.transform = 'translateX(10px)';
                            e.currentTarget.style.backgroundColor = '#3a5466';
                        }}
                        onMouseOut={(e) => {
                            const img = e.currentTarget.querySelector('img');
                            const text = e.currentTarget.querySelector('span');
                            if (img) img.style.transform = 'scale(1)';
                            if (text) text.style.transform = 'translateX(0)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <img 
                            src={league.logo} 
                            alt={league.name} 
                            style={styles.leagueLogo} 
                        />
                        <span style={styles.leagueName}>{league.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaguesCard;