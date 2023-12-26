import React from "react";
import "../styles/Testimonio.css"

function TestimonioComponent({perfil}){

  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../images/${perfil.image}`)}
        alt="Perfil 2"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{perfil.nombre}</strong> en {perfil.pais}
        </p>
        <p className="cargo-testimonio">
          {perfil.puesto} en <strong>{perfil.company}</strong> 
        </p>
        <p className="texto-testimonio">
          {perfil.descripcion}
        </p>
      </div>
    </div>
  );
}

export default TestimonioComponent;