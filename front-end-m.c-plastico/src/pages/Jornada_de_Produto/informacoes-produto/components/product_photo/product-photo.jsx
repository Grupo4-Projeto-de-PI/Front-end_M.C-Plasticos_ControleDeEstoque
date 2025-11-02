import React from 'react';
import './product-photo.css';
import iconImage from '../../../../../assets/icons/icon-image.svg';

const ProductPhoto = ({ imagemUrl }) => (
    <div className="card upload-card">
        <p className="label-produto">Imagem do Produto</p>
        <hr />
        <div className="upload-area">
            {imagemUrl ? (
                <div className="product-image-preview">
                    <img 
                        src={imagemUrl}
                        alt="Imagem do Produto" 
                        style={{ 
                            maxWidth: '150px', 
                            maxHeight: '150px', 
                            objectFit: 'contain' 
                        }} 
                    />
                </div>
            ) : (
                <div className="camera-icon">
                    <img src={iconImage} alt="Imagem do Produto" />
                </div>
            )}
        </div>
    </div>
);

export default ProductPhoto;