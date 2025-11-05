  import React from "react";
  import "./card-editar-parceiro.css";
  import iconeX from "../../../../../assets/icons/icon_fechar.svg";

export default function CardEditarParceiro({
  nome,
  telefone,
  tipo,
  papel,
  handleclick,
  handleChange,
  handleSubmit
}) {
  return (
    <div className="filtro-preto">
      <div className="card-editar-informacoes">
        <div className="titulo-card">
          <h2>Editar Parceiro</h2>
          <img src={iconeX} alt="Fechar" onClick={handleclick} />
        </div>
        <div className="card-input">
          <p>Nome do Parceiro</p>
          <input name="nome" value={nome} onChange={handleChange} />
        </div>
        <div className="card-input">
          <p>Telefone do Parceiro</p>
          <input name="telefone" value={telefone} onChange={handleChange} />
        </div>
        <div className="card-input">
          <p>Tipo do Parceiro</p>
          <select name="tipo" value={tipo} onChange={handleChange} className="selectModal">
            <option value={0}>Pessoa Jurídica</option>
            <option value={1}>Pessoa Física</option>
            <option value={2}>Pessoa Física/Jurídica</option>
          </select>
        </div>
        <div className="card-input">
          <p>Papel Comercial do Parceiro</p>
          <select name="papel" value={papel} onChange={handleChange} className="selectModal">
            <option value={0}>Cliente</option>
            <option value={1}>Fornecedor</option>
            <option value={2}>Cliente/Fornecedor</option>
          </select>
        </div>
        <button className="botaoMargem" onClick={handleSubmit}>
          Confirmar Edição
        </button>
      </div>
    </div>
  );
}
