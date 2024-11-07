import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    color: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let regexEspacioEnBlanco = /^\S.{2,}$/;
    if (
      persona.nombre.length >= 3 &&
      regexEspacioEnBlanco.test(persona.nombre) &&
      persona.color.length >= 6
    ) {
      setMostrar(true);
    } else setError(true);
  };

  return (
    <div>
      {mostrar ? (
        <Card nombre={persona.nombre} color={persona.color} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input style={{ width: '260px' }}
            type="text"
            onChange={(event) =>
              setPersona({ ...persona, nombre: event.target.value })
            }
            placeholder="Ingresa tu nombre"
          />
          <br />
          <input style={{ width: '260px' }}
            type="text"
            onChange={(event) =>
              setPersona({ ...persona, color: event.target.value })
            }
            placeholder="Ingresa tu color favorito (FORMATO HEX)"
          />
          <br />
          <button style={{ width: '260px' }}>Enviar</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información se correcta.
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
