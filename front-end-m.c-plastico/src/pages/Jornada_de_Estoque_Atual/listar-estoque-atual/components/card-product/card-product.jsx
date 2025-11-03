import React from 'react';
import './card-product.css';
import noContentImage from '../../../../../assets/img/no-content-image.png';

function CardEstoqueAtual({ img, nome, categoria, quantidade, cor }) {
  const getImageSrc = () => {
    if (!img || img.trim() === '' || img === null || img === undefined) {
      return noContentImage;
    }
    return img;
  };

  const handleImageError = (e) => {
    e.target.src = noContentImage;
  };

  return (
    <div className="card-historico">
      <div className="imagem-e-texto">
        <div className="imagem-card">
          <img 
            src={getImageSrc()} 
            alt={`Imagem de ${nome}`}
            onError={handleImageError}
          />
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