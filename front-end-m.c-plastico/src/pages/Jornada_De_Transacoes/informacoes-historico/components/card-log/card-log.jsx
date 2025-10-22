import React from 'react';
import './card-log.css';

function CardLog({ logData }) {
  return (
    <div className="card-log">
      <div className="info-linha">
        <span className="label-log">Autor:</span>
        <span className="valor">{logData.autor}</span>
      </div>
      <div className="info-linha">
        <span className="label-log">CF:</span>
        <span className="valor">{logData.cf}</span>
      </div>
      <div className="info-linha">
        <span className="label-log">Criação:</span>
        <span className="valor">{logData.criacao}</span>
      </div>
      <div className="info-linha">
        <span className="label-log">Última Alteração:</span>
        <span className="valor">{logData.ultimaAlteracao}</span>
      </div>
      <div className="info-linha">
        <span className="label-log">Responsável pela Alteração:</span>
        <span className="valor">{logData.responsavelAlteracao}</span>
      </div>
    </div>
  );
}

export default CardLog;