import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonRed: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "#7F0029",
        color: "white",
        fontWeight: "bold",
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        textTransform: "uppercase",
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        width: "225px",
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonRed;