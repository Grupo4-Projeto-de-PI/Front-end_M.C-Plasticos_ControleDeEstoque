import React from "react";
import "./ImagemProdutoCard.css";

function ImagemProdutoCard({ imagem, handleImageChange, onClickAddFoto }) {
    return (
        <div className="card upload-card">
            <p className="label-produto">Imagem do Produto</p>
            <hr />
            <div className="upload-area">
                <div className="camera-icon">
                    <img src="/src/assets/icons/icon_photo.svg" alt="Camera" />
                </div>
                <p className="upload-text">Adicione uma nova<br />imagem para o produto</p>
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="imagem-produto"
                    onChange={handleImageChange}
                />
            </div>
            <button
                className="btn-primario"
                type="button"
                onClick={onClickAddFoto}
            >
                Adicionar Foto
            </button>
        </div>
    );
}

export default ImagemProdutoCard;