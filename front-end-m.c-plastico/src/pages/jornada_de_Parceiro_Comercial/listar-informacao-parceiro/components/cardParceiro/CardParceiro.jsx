import React from "react";
import "./card-parceiro.css";
import iconeX from "../../../../../assets/icons/icon_fechar.svg";

export default function CardParceiro({nome, telefone, tipo, papel, onClose}) {
  return (
    <div className="card-editar-informacoes">
          <div className="titulo-card">
            <h2>Informações do Parceiro</h2>
            <img src={iconeX} alt="Fechar Tela de Editar Informações do Parceiro" onClick={onClose} />
          </div>
          <div className="card-input">
            <p>Nome do Parceiro</p>
            <h5>{nome}</h5>
          </div>
          <div className="card-input">
            <p>Telefone do Parceiro</p>
            <h5>{telefone}</h5>
          </div>
          <div className="card-input">
            <p>Tipo do Parceiro</p>
            <h5>{tipo}</h5>
          </div>
          <div className="card-input">
            <p>Papel Comercial do Parceiro</p>
            <h5>{papel}</h5>
          </div>
        </div>
  );
}
