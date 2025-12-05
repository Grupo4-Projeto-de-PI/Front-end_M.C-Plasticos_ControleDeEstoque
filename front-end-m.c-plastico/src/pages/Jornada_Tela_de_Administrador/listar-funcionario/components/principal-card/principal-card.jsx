import React from "react";
import "./principal-card.css";
import iconPencil from "../../../../../assets/icons/icon_pencil.svg";


function PrincipalCard({ nome, rf, onEdit}) {
  return (
    <div className="card-funcionario card-hover">
      <div className="info">
        <p className="nome">{nome}</p>
        <p className="rf">RF: {rf}</p>
      </div>
      <div className="acoes">
        <div className="btn-edit" onClick={onEdit}>
          <img className="edit-icon" src={iconPencil} alt="Editar" />
        </div>
      </div>
    </div>
  );
}

export default PrincipalCard;
