import React from "react";
import "./Contactos.css";

const Contactos = () => (
  <div className="info-container">
    <h1>Contactos</h1>
    <p>
      <h2><strong>Email</strong></h2> <li>contactos@gmail.com</li> 
    </p>
    <p>
      <h2><strong>Número de Teléfono</strong></h2> <li>7947-9373</li> <li>8276-9383</li>
    </p>
    <p>
      <h2><strong>Comentarios</strong></h2> <input className="inputComment" type="text" placeholder="Escribe tu comentario" />
      <br />
      <br />
      <button>Enviar</button>
    </p>
   
  </div>
);

export default Contactos;