import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonGold: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "#EFB810",
        color: "white",
        fontWeight: "bold",
        padding: "10px 16px",
        borderRadius: "10px",
        border: "none",
        textTransform: "uppercase",
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonGold;