import React from 'react';
import InfoItem from '../info-item/info-item';
import './card-info.css';

function CardInfo({ historicoData }) {
  return (
    <div className="card-info">
      <InfoItem label="Produto" value={historicoData.produto} />
      <InfoItem label="Peso" value={historicoData.peso} />
      <InfoItem label="Preço" value={historicoData.preco} />
      <InfoItem label="Tipo da operação" value={historicoData.tipoOperacao} />
      <InfoItem label="Categoria" value={historicoData.categoria} />
      <InfoItem label="Fornecedor" value={historicoData.fornecedor} showDivider={false} />
    </div>
  );
}

export default CardInfo;