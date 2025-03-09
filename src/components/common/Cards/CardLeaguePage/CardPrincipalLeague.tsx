import ButtonRed from "../../Buttons/ButtonRed10px";

const matches = [
    { team1: "Liverpool", team2: "Manchester City", time: "15:00", odds1: 4.56, odds2: 2.10 },
    { team1: "Liverpool", team2: "Real Madrid", time: "17:00", odds1: 2.10, odds2: 4.56 },
    { team1: "Juventus", team2: "Liverpool", time: "14:00", odds1: 2.10, odds2: 4.56 },
    { team1: "Barranquilla FC", team2: "Liverpool", time: "18:00", odds1: 4.56, odds2: 2.10 },
    { team1: "Liverpool", team2: "Bucaramanga FC", time: "20:00", odds1: 4.56, odds2: 2.10 },
];

const CardPrincipalLeague = () => {
    return (
        <div className="card-principal-team" style={styles.card}>
            <div className="card-principal-team__button" style={styles.buttonContainer}>
                <div style={styles.buttonWrapper}>
                    <ButtonRed text="PARTIDOS DE LA FECHA" />
                </div>
                <div style={styles.buttonWrapper}>
                    <ButtonRed text="TABLA DE POSICIONES" />
                </div>
                <div style={styles.buttonWrapper}>
                    <ButtonRed text="ARCHIVOS" />
                </div>
            </div>
            <div className="card-principal-team__matches" style={styles.matches}>
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
            </div>
        </div>    
  );
};

const styles = {
    card: {
        justifyContent: 'center',
        width: '75%',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        backgroundColor: 'rgba(24, 24, 24, 0.7)',  
        color: 'white',
    },
    
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    buttonWrapper: {
        margin: '0 35px',
    },
    matches: {
        display: 'flex',
        flexDirection: 'column',
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
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
    },
    team: {
        textAlign: 'left',
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
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    oddsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    oddsBorder: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    odds: {
        backgroundColor: '#28a745',
        fontWeight: 'bold',
        padding: '5px',
        width: '40px',
        textAlign: 'center',
    },
    oddsYellow: {
        backgroundColor: '#EFB810',
        fontWeight: 'bold',
        padding: '5px',
        width: '40px',
        textAlign: 'center',
    },
};

export default CardPrincipalLeague;