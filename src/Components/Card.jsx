import React from "react";
import "../styles/color.css";
const Card = ({ nombre, color }) => {
  return (
    <div>
      <h3>Hola, {nombre}!</h3>
      {/* <div className="color-box"></div> */}
      <h3>Sabemos que tu color favorito es: {color}</h3>
      <input 
        type="color" 
        value={color} 
        onChange={color} 
        style={{ marginBottom: '20px' }}
      />
    </div>
  );
};

export default Card;
