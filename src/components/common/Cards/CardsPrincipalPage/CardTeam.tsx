function CardTeam() {
    const imageLinks = [
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png",
      "https://radiodiezdemarzo.com/wp-content/uploads/2022/05/Juventus.png",
      "https://a.espncdn.com/i/teamlogos/soccer/500/83.png",
    ];
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "16px",
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{
            backgroundColor: "#BEBEBE",
            padding: "16px",
            borderRadius: "25px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "80px",
          }}
        >
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
      </div>
    );
  }
  
  export default CardTeam;