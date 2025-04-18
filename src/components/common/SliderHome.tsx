import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: #BEBEBE;
`;

const SliderContent = styled.div`
  display: inline-block;
  animation: slide 30s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Image = styled.img`
  width: 150px; /* Adjust as needed */
  height: auto;
  margin: 0 20px; /* Space between images */
  vertical-align: middle;
`;

const SliderHome: React.FC = () => {
  const images = [
"https://upload.wikimedia.org/wikipedia/commons/0/00/BetPlay-logo.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Stake_logo.svg/2560px-Stake_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/0/05/Wplay-logo.png",
"https://theaffiliatemonkey.com/wp-content/uploads/2020/07/bwin.png",
"https://betes.bet/wp-content/uploads/2021/03/rushbet-bonos.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Codere_Logo.svg/1024px-Codere_Logo.svg.png",
];

  return (
    <SliderContainer>
      <SliderContent>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
        {images.map((src, index) => (
          <Image key={index + images.length} src={src} alt={`Image ${index + 1}`} />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default SliderHome;