import React from 'react';
import './card-product-information.css';

function CardProductInformation({nomeProduto, tipoMaterial, prioridadeEstoque, fornecedorProduto}) {
    return (
        <div className="card">
            <h2>Informações do Produto</h2>
            <hr />
            <div className="info-item">
                <p className="label">Nome do Produto</p>
            <p className="valor">{nomeProduto}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Tipo do Material</p>
            <p className="valor">{tipoMaterial}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Prioridade de Estoque</p>
            <p className="valor-red">{prioridadeEstoque || "Não informado"}</p>
        </div>
        <hr />
        <div className="info-item">
            <p className="label">Fornecedor do Produto</p>
            <p className="valor">{fornecedorProduto || "Não informado"}</p>
        </div>
    </div>
);
}   

export default CardProductInformation;