import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

const ButtonRed: React.FC<ButtonProps> = ({ text, onClick, isActive }) => {
  return (
    <div style={{ position: 'relative', width: '225px' }}>
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
          width: "100%",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={onClick}
      >
        {text}
      </button>
      {isActive && (
        <div
          style={{
            height: '3px',
            backgroundColor: '#ffc107',
            position: 'absolute',
            bottom: '0px',
            left: '0',
            right: '0',
            margin: '0 auto',
            width: '100%', 
          }}
        />
      )}
    </div>
  );
};

export default ButtonRed;