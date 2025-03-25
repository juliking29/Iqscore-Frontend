function CardLeague() {
    const imageLinks = [
      "https://image-service.onefootball.com/transform?w=256&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/9.png",
      "https://logolook.net/wp-content/uploads/2024/01/LaLiga-Logo.png",
      "https://www.sportmonks.com/wp-content/uploads/2023/07/Serie-A-Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BetPlay-Dimayor_logo.svg/1200px-BetPlay-Dimayor_logo.svg.png",
    ];
  
    return (
      <div className="flex flex-col items-center" style={{ backgroundColor: "#BEBEBE", padding: "16px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "80px" }}>
        {imageLinks.map((link, index) => (
          <div key={index} style={{ marginBottom: "16px" }}>
            <img
              src={link}
              alt={`League ${index + 1}`}
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    );
  }

  export default CardLeague;