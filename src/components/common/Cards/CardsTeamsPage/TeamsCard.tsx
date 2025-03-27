import React from 'react';

const TeamsCard: React.FC = () => {
    
    const teams = [
        {
            name: 'Real Madrid',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'
        },
        {
            name: 'Barcelona',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png'
        },
        {
            name: 'Manchester United',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png'
        },
        {
            name: 'Liverpool',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png'
        },
        {
            name: 'Bayern Munich',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png'
        },
        {
            name: 'Paris Saint-Germain',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png'
        },
        {
            name: 'Juventus',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon.svg/800px-Juventus_FC_2017_icon.svg.png'
        },
        {
            name: 'Manchester City',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png'
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
        teamsContainer: {
            padding: '20px'
        },
        title: {
            padding: '10px',
            fontSize: '22px',
            color: '#ccc',
            fontFamily: '"Funnel Display", sans-serif',
            fontWeight: 700
        },
        teamRow: {
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
        teamLogo: {
            width: '40px',
            height: '40px',
            objectFit: 'contain' as const,
            marginRight: '20px',
            transition: 'transform 0.3s ease'
        },
        teamName: {
            fontSize: '16px',
            fontFamily: '"Funnel Display", sans-serif',
            letterSpacing: '0.5px',
            transition: 'transform 0.3s ease'
        }
    };

    return (
        <div style={styles.cardPrincipal}>
            <div style={styles.teamsContainer}>
                <div style={styles.title}>EQUIPOS</div>
                {teams.map((team, index) => (
                    <div 
                        style={styles.teamRow} 
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
                            src={team.logo} 
                            alt={team.name} 
                            style={styles.teamLogo} 
                        />
                        <span style={styles.teamName}>{team.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamsCard;