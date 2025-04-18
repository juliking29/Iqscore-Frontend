import React from "react";

const TopJugadores: React.FC = () => {
  const playersData = [
    {
      id: 1,
      name: "Mbappe",
      rating: "10",
      image: "https://cdn.givemesport.com/wp-content/uploads/2023/10/cropped-vini-mbappe-real-madrid.jpg",
    },
    {
      id: 2,
      name: "Raphina",
      rating: "10",
      image: "https://cdn.vox-cdn.com/thumbor/XDYMPnMZBrv-QPZDuEtUL9lrrhQ=/0x0:3000x2143/1200x800/filters:focal(1239x219:1719x699)/cdn.vox-cdn.com/uploads/chorus_image/image/72731224/1258904944.0.jpg",
    },
    {
      id: 3,
      name: "Harry Kane",
      rating: "9.8",
      image: "https://cdn.vox-cdn.com/thumbor/wOGHKVneuI9RsQvXXy-Jjq48-io=/0x0:3500x2333/1200x800/filters:focal(1470x887:2030x1447)/cdn.vox-cdn.com/uploads/chorus_image/image/73071979/1917152036.0.jpg",
    },
    {
      id: 4,
      name: "Juan Fernando Quintero",
      rating: "9.2",
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/7QWJYZRXUJDNLDXQEHT6IIZHG4.jpeg",
    },
    {
      id: 5,
      name: "Marino Hinestroza",
      rating: "8.4",
      image: "https://bolavip.com/__export/1681145044186/sites/bolavip/img/2023/04/10/marino_hinestroza_cali_crop1681144869953.jpg_1159711837.jpg",
    },
    {
      id: 6,
      name: "Jhay",
      rating: "8.4",
      image: "https://s.hs-data.com/bilder/spieler/gross/553304.jpg",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto text-black dark:text-white font-nunito">
      <h2 className="text-[18px] font-bold uppercase mb-4">TOP JUGADORES</h2>
      <div className="relative bg-white p-6 rounded-lg shadow-lg border border-[#ccc] dark:bg-[#1B1D20] dark:border-[#333]">
        <div className="space-y-4">
          {playersData.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between py-3 px-6 bg-gray-100 dark:bg-[#1A1C20] rounded-lg hover:bg-gray-200 dark:hover:bg-[#2A2D31] transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 dark:bg-[#2a2a2a]">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{player.name}</h3>
              </div>
              <div className="bg-purple-600 text-white font-semibold px-3 py-1 rounded-md min-w-[40px] text-center">
                {player.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopJugadores;
