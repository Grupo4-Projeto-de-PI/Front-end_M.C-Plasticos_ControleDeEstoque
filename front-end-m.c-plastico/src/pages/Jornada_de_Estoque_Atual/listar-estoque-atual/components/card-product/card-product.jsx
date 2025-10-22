import React from 'react';
import './card-product.css';

function CardEstoqueAtual({ img, nome, categoria, quantidade, cor }) {
  return (
    <div className="card-historico">
      <div className="imagem-e-texto">
        <div className="imagem-card">
          <img src={img} alt={`Imagem de ${nome}`} />
        </div>
        <div className="info-card">
          <h3>{nome}</h3>
          {categoria && <h5>{categoria}</h5>}
          <h5 style={{ color: cor }}>{quantidade}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardEstoqueAtual;