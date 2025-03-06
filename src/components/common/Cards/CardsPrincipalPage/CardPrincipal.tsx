import React, { useState } from 'react';
import ButtonRed from '../../Buttons/ButtonRed10px';

const CardPrincipal = () => {
    const [activeTab, setActiveTab] = useState('PRINCIPALES CUOTAS');
    
    const matches = [
        {
            date: '10/02/2025',
            team1: { name: 'Liverpool', logo: '/logos/liverpool.png' },
            team2: { name: 'Manchester city', logo: '/logos/mancity.png' },
            league: 'Premier League',
            time: '15:00',
            odds: { team1: '4.56', team2: '2.10' }
        },
        {
            team1: { name: 'Barcelona', logo: '/logos/barcelona.png' },
            team2: { name: 'Real Madrid', logo: '/logos/realmadrid.png' },
            league: 'La Liga',
            time: '12:00',
            odds: { team1: '2.10', team2: '4.56' }
        },
        {
            team1: { name: 'Juventus', logo: '/logos/juventus.png' },
            team2: { name: 'America de Cali', logo: '/logos/americadecali.png' },
            league: 'Mundial de Clubes',
            time: '10:00',
            odds: { team1: '2.10', team2: '4.56' }
        },
        {
            team1: { name: 'Barranquilla FC', logo: '/logos/barranquilla.png' },
            team2: { name: 'Arsenal', logo: '/logos/arsenal.png' },
            league: 'Mundial de Clubes',
            time: '18:00',
            odds: { team1: '4.56', team2: '2.10' }
        },
        {
            team1: { name: 'Paris SG', logo: '/logos/psg.png' },
            team2: { name: 'Bucaramanga fc', logo: '/logos/bucaramanga.png' },
            league: 'Mundial de Clubes',
            time: '14:00',
            odds: { team1: '4.56', team2: '2.10' }
        }
    ];

    const styles = {
        cardPrincipal: {
            backgroundColor: '#1a1a1a',
            borderRadius: '10px',
            overflow: 'hidden',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '700px',
            margin: '0 auto'
        },
        tabButtons: {
            display: 'flex',
            gap: '30px',
            padding: '10px',
            backgroundColor: '#282829',
            justifyContent: 'center'
        },
        activeButton: {
            borderBottom: '3px solid #ffc107'
        },
        matchesContainer: {
            padding: '10px'
        },
        date: {
            padding: '10px',
            fontSize: '14px',
            color: '#ccc'
        },
        matchRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 10px',
            borderBottom: '1px solid #333'
        },
        teams: {
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        team: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        teamLogo: {
            width: '24px',
            height: '24px',
            objectFit: 'contain'
        },
        matchInfo: {
            flex: 1,
            textAlign: 'center'
        },
        league: {
            fontSize: '14px',
            marginBottom: '5px'
        },
        time: {
            fontWeight: 'bold'
        },
        odds: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        odd: {
            width: '40px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            fontWeight: 'bold'
        },
        oddTeam1: {
            backgroundColor: '#ffc107',
            color: 'black'
        },
        oddTeam2: {
            backgroundColor: '#00c853',
            color: 'black'
        }
    };

    return (
        <div style={styles.cardPrincipal}>
            <div style={styles.tabButtons}>
                <ButtonRed 
                    text="PRINCIPALES CUOTAS" 
                    onClick={() => setActiveTab('PRINCIPALES CUOTAS')}
                    style={activeTab === 'PRINCIPALES CUOTAS' ? styles.activeButton : {}}
                />
                <ButtonRed 
                    text="FAVORITOS" 
                    onClick={() => setActiveTab('FAVORITOS')}
                    style={activeTab === 'FAVORITOS' ? styles.activeButton : {}}
                />
            </div>
            
            <div style={styles.matchesContainer}>
                <div style={styles.date}>{matches[0].date}</div>
                
                {matches.map((match, index) => (
                    <div style={styles.matchRow} key={index}>
                        <div style={styles.teams}>
                            <div style={styles.team}>
                                <img 
                                    src={match.team1.logo} 
                                    alt={match.team1.name} 
                                    style={styles.teamLogo} 
                                />
                                <span>{match.team1.name}</span>
                            </div>
                            <div style={styles.team}>
                                <img 
                                    src={match.team2.logo} 
                                    alt={match.team2.name} 
                                    style={styles.teamLogo} 
                                />
                                <span>{match.team2.name}</span>
                            </div>
                        </div>
                        
                        <div style={styles.matchInfo}>
                            <div style={styles.league}>{match.league}</div>
                            <div style={styles.time}>{match.time}</div>
                        </div>
                        
                        <div style={styles.odds}>
                            <div style={{...styles.odd, ...styles.oddTeam1}}>{match.odds.team1}</div>
                            <div style={{...styles.odd, ...styles.oddTeam2}}>{match.odds.team2}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPrincipal;