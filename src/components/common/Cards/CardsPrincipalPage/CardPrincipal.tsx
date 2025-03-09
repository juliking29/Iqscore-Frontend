import React, { useState } from 'react';
import ButtonRed from '../../Buttons/ButtonRed10px';

const CardPrincipal = () => {
    const [activeTab, setActiveTab] = useState('PRINCIPALES CUOTAS');
    
    const matches = [
        {
            date: '10/02/2025',
            team1: { name: 'Liverpool', logo: 'https://brandlogos.net/wp-content/uploads/2025/02/liverpool_f.c.-logo_brandlogos.net_vr9dx-300x548.png' },
            team2: { name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png' },
            league: 'Premier League',
            time: '15:00',
            odds: { team1: '4.56', team2: '2.10' }
        },
        {
            team1: { name: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png' },
            team2: { name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png' },
            league: 'La Liga',
            time: '12:00',
            odds: { team1: '2.10', team2: '4.56' }
        },
        {
            team1: { name: 'Juventus', logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Juventus-logo.png' },
            team2: { name: 'America de Cali', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Am%C3%A9rica_de_Cali.png' },
            league: 'Mundial de Clubes',
            time: '10:00',
            odds: { team1: '2.10', team2: '4.56' }
        },
        {
            team1: { name: 'Barranquilla FC', logo: 'https://barranquillafc.com/wp-content/uploads/2020/04/EscudoBquillaFC-1.png' },
            team2: { name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png' },
            league: 'Mundial de Clubes',
            time: '18:00',
            odds: { team1: '4.56', team2: '2.10' }
        },
        {
            team1: { name: 'Paris SG', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
            team2: { name: 'Bucaramanga FC', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Atl%C3%A9ticoBucaramanga.png' },
            league: 'Mundial de Clubes',
            time: '14:00',
            odds: { team1: '4.56', team2: '2.10' }
        }
    ];

    const favorites = [
        { logo: 'https://image-service.onefootball.com/transform?w=256&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/9.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BetPlay-Dimayor_logo.svg/1200px-BetPlay-Dimayor_logo.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
        { logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    ];

    const styles = {
        cardPrincipal: {
            backgroundColor: '#1a1a1a',
            borderRadius: '10px',
            overflow: 'hidden',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1000px',
            margin: '0 auto'
        },
        tabButtons: {
            display: 'flex',
            gap: '100px',
            padding: '10px',
            backgroundColor: 'transparent',
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
        oddsBorder: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            overflow: 'hidden',
        },
        odds: {
            width: '45px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            backgroundColor: '#28a745',
        },
        oddsYellow: {
            backgroundColor: '#EFB810',
        },
        favoritesContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px',
            flexWrap: 'wrap'
        },
        favorite: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10px'
        },
        favoriteLogo: {
            width: '150px',
            height: '150px',
            objectFit: 'contain'
        }
    };

    return (
        <div style={styles.cardPrincipal}>
            <div style={styles.tabButtons}>
                <ButtonRed 
                    text="PRINCIPALES CUOTAS" 
                    onClick={() => setActiveTab('PRINCIPALES CUOTAS')}
                    isActive={activeTab === 'PRINCIPALES CUOTAS'}
                />
                <ButtonRed 
                    text="FAVORITOS" 
                    onClick={() => setActiveTab('FAVORITOS')}
                    isActive={activeTab === 'FAVORITOS'}
                />
            </div>
            
            <div style={styles.matchesContainer}>
                {activeTab === 'PRINCIPALES CUOTAS' ? (
                    <>
                        <div style={styles.date}>{matches[0].date}</div>
                        {matches.map((match, index) => {
                            const isOdds1Higher = parseFloat(match.odds.team1) > parseFloat(match.odds.team2);
                            return (
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
                                    
                                    <div style={styles.oddsBorder}>
                                        <div style={{...styles.odds, ...(isOdds1Higher ? styles.oddsYellow : {})}}>
                                            {match.odds.team1}
                                        </div>
                                        <div style={{...styles.odds, ...(isOdds1Higher ? {} : styles.oddsYellow)}}>
                                            {match.odds.team2}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <div style={styles.favoritesContainer}>
                        {favorites.map((favorite, index) => (
                            <div style={styles.favorite} key={index}>
                                <img src={favorite.logo} alt={favorite.name} style={styles.favoriteLogo} />
                                <span>{favorite.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardPrincipal;