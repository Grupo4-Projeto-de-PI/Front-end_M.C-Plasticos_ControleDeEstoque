import React from 'react';
import './card-log.css';

function CardLog({ logData }) {
  return (
    <div className="card-log">
      <div className="info-linha">
        <span className="label-log">Autor:</span>
        <span className="valor">{logData.Autor}</span>
      </div>
      <div className="info-linha">
        <span className="label-log">Código Funcionário:</span>
        <span className="valor">{logData.codigoFuncionario}</span>
      </div>
    </div>
  );
}

export default CardLog;