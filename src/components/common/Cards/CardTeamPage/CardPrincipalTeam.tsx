import React, { useState } from 'react';
import ButtonRed from "../../Buttons/ButtonRed10px";

const CardPrincipalTeam: React.FC = () => {
    const [activeTab, setActiveTab] = useState('PROXIMOS PARTIDOS');

    const matches = [
        { team1: "Liverpool", team2: "Manchester City", time: "15:00", odds1: 4.56, odds2: 2.10, result: 'G' },
        { team1: "Liverpool", team2: "Real Madrid", time: "17:00", odds1: 2.10, odds2: 4.56, result: 'P' },
        { team1: "Juventus", team2: "Liverpool", time: "14:00", odds1: 2.10, odds2: 4.56, result: 'E' },
        { team1: "Barranquilla FC", team2: "Liverpool", time: "18:00", odds1: 4.56, odds2: 2.10, result: 'G' },
        { team1: "Liverpool", team2: "Bucaramanga FC", time: "20:00", odds1: 4.56, odds2: 2.10, result: 'G' },
    ];

    const standings = [
        { position: 1, team: "Liverpool", points: 23, gamesPlayed: 23, wins: 7, draws: 2, losses: 1, goalsFor: 23, goalsAgainst: 19, goalDifference: 4, results: ['G', 'P', 'G', 'G', 'G'] },
        { position: 2, team: "Arsenal", points: 21, gamesPlayed: 21, wins: 6, draws: 3, losses: 2, goalsFor: 21, goalsAgainst: 10, goalDifference: 11, results: ['G', 'E', 'G', 'E', 'P'] },
        { position: 3, team: "Chelsea", points: 21, gamesPlayed: 21, wins: 6, draws: 3, losses: 2, goalsFor: 21, goalsAgainst: 32, goalDifference: -11, results: ['G', 'G', 'E', 'E', 'G'] },
        { position: 4, team: "Aston Villa", points: 20, gamesPlayed: 20, wins: 6, draws: 2, losses: 2, goalsFor: 20, goalsAgainst: 21, goalDifference: -1, results: ['G', 'G', 'E', 'P', 'G'] },
        { position: 5, team: "Manchester City", points: 19, gamesPlayed: 19, wins: 5, draws: 4, losses: 2, goalsFor: 19, goalsAgainst: 12, goalDifference: 7, results: ['G', 'P', 'G', 'G', 'E'] },
        { position: 6, team: "Nottingham Forest", points: 17, gamesPlayed: 17, wins: 4, draws: 5, losses: 8, goalsFor: 17, goalsAgainst: 10, goalDifference: 7, results: ['G', 'G', 'E', 'E', 'G'] },
        { position: 7, team: "Fulham", points: 13, gamesPlayed: 13, wins: 3, draws: 4, losses: 6, goalsFor: 13, goalsAgainst: 20, goalDifference: -7, results: ['E', 'E', 'P', 'G', 'G'] },
    ];

    return (
        <div style={styles.container}>
            <div className="card-principal-team__button" style={styles.buttonContainer}>
                <div style={styles.buttonWrapper}>
                    <ButtonRed 
                        text="PROXIMOS PARTIDOS" 
                        onClick={() => setActiveTab('PROXIMOS PARTIDOS')}
                        isActive={activeTab === 'PROXIMOS PARTIDOS'}
                    />
                </div>
                <div style={styles.buttonWrapper}>
                    <ButtonRed 
                        text="TABLA DE POSICIONES" 
                        onClick={() => setActiveTab('TABLA DE POSICIONES')}
                        isActive={activeTab === 'TABLA DE POSICIONES'}
                    />
                </div>
            </div>
            <div className="card-principal-team" style={styles.card}>
                <div className="card-principal-team__matches" style={styles.matches}>
                    {activeTab === 'PROXIMOS PARTIDOS' ? (
                        <>
                            <h3 style={styles.date}>10/02/2025</h3>
                            {matches.map((match, index) => {
                                const { team1, team2, time, odds1, odds2 } = match;
                                const isOdds1Higher = odds1 > odds2;

                                return (
                                    <div key={index} style={styles.match}>
                                        <div style={styles.teamContainer}>
                                            <span style={styles.team}>{team1}</span>
                                            <span style={styles.team}>{team2}</span>
                                        </div>
                                        <div style={styles.timeOddsContainer}>
                                            <span style={styles.time}>{time}</span>
                                            <div style={styles.oddsContainer}>
                                                <div style={styles.oddsWrapper}>
                                                    <div style={styles.oddsBorder}>
                                                        <span style={isOdds1Higher ? styles.oddsYellow : styles.odds}>{odds1}</span>
                                                        <span style={isOdds1Higher ? styles.odds : styles.oddsYellow}>{odds2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    ) : (
                        <div style={styles.standings}>
                            <table style={styles.table}>
                                <thead>
                                    <tr>
                                        <th style={styles.tableHeader}>#</th>
                                        <th style={styles.tableHeader}>Equipo</th>
                                        <th style={styles.tableHeader}>Pts</th>
                                        <th style={styles.tableHeader}>G</th>
                                        <th style={styles.tableHeader}>E</th>
                                        <th style={styles.tableHeader}>P</th>
                                        <th style={styles.tableHeader}>DG</th>
                                        <th style={styles.tableHeader}>Resultados</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {standings.map((team) => (
                                        <tr key={team.position}>
                                            <td style={getPositionStyle(team.position)}>{team.position}</td>
                                            <td>{team.team}</td>
                                            <td>{team.points}</td>
                                            <td>{team.wins}</td>
                                            <td>{team.draws}</td>
                                            <td>{team.losses}</td>
                                            <td>{team.goalDifference}</td>
                                            <td style={styles.resultsCell}>
                                                {team.results.map((result, index) => {
                                                    const resultStyle = result === 'G' ? styles.resultWin : result === 'P' ? styles.resultLoss : styles.resultDraw;
                                                    return (
                                                        <div key={index} style={{ ...styles.resultBox, ...resultStyle }}>
                                                            <span style={styles.resultText}>{result}</span>
                                                        </div>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const getPositionStyle = (position: number) => {
    if (position === 1) {
        return {
            backgroundColor: '#EFB810',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            width: '15px',
            height: '20px',
            textAlign: 'center' as const,
        };
    }
    if (position === 2) {
        return {
            backgroundColor: '#7F0029',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            width: '15px',
            height: '20px',
            textAlign: 'center' as const,
        };
    }
    return {
        backgroundColor: '#0071E3',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
        width: '15px',
        height: '0px',
        textAlign: 'center' as const,
    };
};

const styles = {
    container: {
        width: '75%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    buttonWrapper: {
        margin: '0 35px',
    },
    card: {
        justifyContent: 'center',
        width: '100%',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(24, 24, 24, 0.7)',  
        color: 'white',
    },
    matches: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    date: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    match: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        margin: '5px 0',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    teamContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        flex: 1,
    },
    team: {
        textAlign: 'left' as const,
    },
    timeOddsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    time: {
        fontWeight: 'bold',
        marginRight: '10px',
    },
    oddsContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-end',
    },
    oddsWrapper: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
    },
    oddsBorder: {
        display: 'flex',
        flexDirection: 'column' as const,
        borderRadius: '10px',
        overflow: 'hidden',
    },
    odds: {
        backgroundColor: '#28a745',
        fontWeight: 'bold',
        padding: '5px',
        width: '40px',
        textAlign: 'center' as const,
    },
    oddsYellow: {
        backgroundColor: '#EFB810',
        fontWeight: 'bold',
        padding: '5px',
        width: '40px',
        textAlign: 'center' as const,
    },
    standings: {
        marginTop: '20px',
    },
    table: {
        width: '100%',
    },
    tableHeader: {
        color: 'white',
    },
    resultsCell: {
        display: 'flex',
        justifyContent: 'right',
        padding: '5px',
    },
    resultBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        padding: '5px',
        margin: '0 2px',
        width: '20px',
        height: '20px',
    },
    resultWin: {
        backgroundColor: '#EFB810',
    },
    resultLoss: {
        backgroundColor: '#7F0029',
    },
    resultDraw: {
        backgroundColor: '#0071E3',
    },
    resultText: {
        color: 'white',
        fontWeight: 'bold',
    },
};

export default CardPrincipalTeam;