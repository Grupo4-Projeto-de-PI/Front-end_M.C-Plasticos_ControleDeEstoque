import React from "react";
import "./card-parceiro.css";

export default function CardParceiro() {
  return (
    <div className="card-editar-informacoes">
          <div className="titulo-card">
            <h2>Informações do Parceiro</h2>
            <img src="../../assets/icons/icon_fechar.svg" alt="Fechar Tela de Editar Informações do Parceiro" />
          </div>
          <div className="card-input">
            <p>Nome do Parceiro</p>
            <h5>Roberto</h5>
          </div>
          <div className="card-input">
            <p>Telefone do Parceiro</p>
            <h5>(11) 91234-5678</h5>
          </div>
          <div className="card-input">
            <p>Tipo do Parceiro</p>
            <h5>Pessoa Física</h5>
          </div>
          <div className="card-input">
            <p>Papel Comercial do Parceiro</p>
            <h5>Fornecedor</h5>
          </div>
        </div>
  );
}
