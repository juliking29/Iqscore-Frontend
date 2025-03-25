import React from 'react';

const Plantilla: React.FC = () => {
    const styles = {
        card: {
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '1200px',
            margin: '20px auto',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            textAlign: 'left' as const,
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse' as const,
        },
        header: {
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'left' as const,
            padding: '10px',
        },
        row: {
            borderBottom: '1px solid #181818',
        },
        cell: {
            padding: '10px',
            textAlign: 'left' as const,
        },
    };

    return (
        <div style={styles.card}>
            <div style={styles.title}>PLANTILLA</div>
            <div style={styles.grid}>
                <div>
                    <div style={styles.title}>Porteros</div>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.header}>#</th>
                                <th style={styles.header}>Nombre</th>
                                <th style={styles.header}>Edad</th>
                                <th style={styles.header}>Nac.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={styles.row}>
                                <td style={styles.cell}>1</td>
                                <td style={styles.cell}>Alisson Becker</td>
                                <td style={styles.cell}>30</td>
                                <td style={styles.cell}>Bra</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>2</td>
                                <td style={styles.cell}>Caoimhín Kelleher</td>
                                <td style={styles.cell}>24</td>
                                <td style={styles.cell}>Ir</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div style={styles.title}>Defensores</div>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.header}>#</th>
                                <th style={styles.header}>Nombre</th>
                                <th style={styles.header}>Edad</th>
                                <th style={styles.header}>Nac.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={styles.row}>
                                <td style={styles.cell}>3</td>
                                <td style={styles.cell}>Virgil van Dijk</td>
                                <td style={styles.cell}>31</td>
                                <td style={styles.cell}>Ned</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>4</td>
                                <td style={styles.cell}>Andrew Robertson</td>
                                <td style={styles.cell}>29</td>
                                <td style={styles.cell}>Esc</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>5</td>
                                <td style={styles.cell}>Trent Alexander-Arnold</td>
                                <td style={styles.cell}>24</td>
                                <td style={styles.cell}>Ing</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>6</td>
                                <td style={styles.cell}>Joel Matip</td>
                                <td style={styles.cell}>31</td>
                                <td style={styles.cell}>Cmr</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>7</td>
                                <td style={styles.cell}>Joe Gomez</td>
                                <td style={styles.cell}>25</td>
                                <td style={styles.cell}>Ing</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>8</td>
                                <td style={styles.cell}>Ibrahima Konaté</td>
                                <td style={styles.cell}>24</td>
                                <td style={styles.cell}>Fra</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div style={styles.title}>Mediocampistas</div>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.header}>#</th>
                                <th style={styles.header}>Nombre</th>
                                <th style={styles.header}>Edad</th>
                                <th style={styles.header}>Nac.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={styles.row}>
                                <td style={styles.cell}>9</td>
                                <td style={styles.cell}>Fabinho</td>
                                <td style={styles.cell}>28</td>
                                <td style={styles.cell}>Bra</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>10</td>
                                <td style={styles.cell}>Thiago Alcántara</td>
                                <td style={styles.cell}>31</td>
                                <td style={styles.cell}>Esp</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>11</td>
                                <td style={styles.cell}>Jordan Henderson</td>
                                <td style={styles.cell}>31</td>
                                <td style={styles.cell}>Ing</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>12</td>
                                <td style={styles.cell}>Naby Keïta</td>
                                <td style={styles.cell}>28</td>
                                <td style={styles.cell}>Gu</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>13</td>
                                <td style={styles.cell}>James Milner</td>
                                <td style={styles.cell}>37</td>
                                <td style={styles.cell}>Ing</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>14</td>
                                <td style={styles.cell}>Alex Oxlade-Chamberlain</td>
                                <td style={styles.cell}>29</td>
                                <td style={styles.cell}>Ing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div style={styles.title}>Delanteros</div>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.header}>#</th>
                                <th style={styles.header}>Nombre</th>
                                <th style={styles.header}>Edad</th>
                                <th style={styles.header}>Nac.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={styles.row}>
                                <td style={styles.cell}>15</td>
                                <td style={styles.cell}>Mohamed Salah</td>
                                <td style={styles.cell}>29</td>
                                <td style={styles.cell}>Egipto</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>16</td>
                                <td style={styles.cell}>Sadio Mané</td>
                                <td style={styles.cell}>30</td>
                                <td style={styles.cell}>Sen</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>17</td>
                                <td style={styles.cell}>Roberto Firmino</td>
                                <td style={styles.cell}>30</td>
                                <td style={styles.cell}>Bra</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>18</td>
                                <td style={styles.cell}>Diogo Jota</td>
                                <td style={styles.cell}>26</td>
                                <td style={styles.cell}>Por</td>
                            </tr>
                            <tr style={styles.row}>
                                <td style={styles.cell}>19</td>
                                <td style={styles.cell}>Luis Díaz</td>
                                <td style={styles.cell}>26</td>
                                <td style={styles.cell}>Col</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Plantilla;