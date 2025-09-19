import React from "react";
import "./CardParceiro.css";

export default function CardParceiro({ nome, telefone, tipo, papel, onClose }) {
  return (
    <div className="card-editar-informacoes">
      <div className="titulo-card">
        <h2>Informações do Parceiro</h2>
        <img
          src="/src/assets/icons/icon_fechar.svg"
          alt="Fechar"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
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

      <div className="card-input" style={{ borderBottom: "none" }}>
        <p>Papel Comercial do Parceiro</p>
        <h5>{papel}</h5>
      </div>
    </div>
  );
}
