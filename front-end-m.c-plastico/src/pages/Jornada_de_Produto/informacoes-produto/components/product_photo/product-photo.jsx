import React from 'react';
import './product-photo.css';
import iconImage from '../../../../../assets/icons/icon-image.svg';

const ProductPhoto = ({ imagemUrl }) => (
    <div className="card upload-card">
        <p className="label-produto">Imagem do Produto</p>
        <hr />
        <div className="upload-area">
            <div className="camera-icon">
                <img src={imagemUrl || iconImage} alt="Imagem do Produto" />
            </div>
        </div>
    </div>
);

export default ProductPhoto;