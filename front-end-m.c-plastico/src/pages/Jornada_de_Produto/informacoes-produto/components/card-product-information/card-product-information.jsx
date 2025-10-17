import React from 'react';
import './card-product-information.css';

function CardProductInformation({ produto }) {
    return (
        <div className="card">
            <h2>Informações do Produto</h2>
            <hr />
            <div className="info-item">
                <p className="label">Nome do Produto</p>
            <p className="valor">bosta</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Tipo do Material</p>
            <p className="valor">bosta</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Preço Máximo de Compra do Produto</p>
            <p className="valor">bosta</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Preço Mínimo de Compra do Produto</p>
            <p className="valor">bosta</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Prioridade de Estoque</p>
            <p className="valor-red">bosta</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Saúde do Produto Dentro do Estoque</p>
            <p className="valor-red">bosta</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Fornecedor do Produto</p>
            <p className="valor">bosta</p>
        </div>
    </div>
);
}   

export default CardProductInformation;