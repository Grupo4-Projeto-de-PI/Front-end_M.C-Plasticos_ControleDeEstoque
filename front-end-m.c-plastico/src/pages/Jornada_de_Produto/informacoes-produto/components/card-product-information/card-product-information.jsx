import React from 'react';
import './card-product-information.css';

const CardProductInformation = ({ produto }) => (
    <div className="card">
        <h2>Informações do Produto</h2>
        <hr />
        <div className="info-item">
            <p className="label">Nome do Produto</p>
            <p className="valor">{produto.nome || ''}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Tipo do Material</p>
            <p className="valor">{produto.tipoMaterial || ''}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Preço Máximo de Compra do Produto</p>
            <p className="valor">{produto.precoMaximo || ''}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Preço Mínimo de Compra do Produto</p>
            <p className="valor">{produto.precoMinimo || ''}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Prioridade de Estoque</p>
            <p className="valor-red">{produto.prioridade || ''}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Saúde do Produto Dentro do Estoque</p>
            <p className="valor-red">{produto.saudeEstoque || ''}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Fornecedor do Produto</p>
            <p className="valor">{produto.fornecedor || ''}</p>
        </div>
    </div>
);

export default CardProductInformation;