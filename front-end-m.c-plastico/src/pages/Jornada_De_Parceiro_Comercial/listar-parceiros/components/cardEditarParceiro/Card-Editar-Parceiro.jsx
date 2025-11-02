  import React from "react";
  import "./card-editar-parceiro.css";
  import iconeX from "../../../../../assets/icons/icon_fechar.svg";

  export default function CardEditarParceiro({ nome, telefone, tipo, papel, handleclick}) {
    console.log(`Dados da Pessoa 
      ${nome} 
      ${telefone}
      ${tipo}
      ${papel}`)
    return (
      <div className="filtro-preto">
        <div className="card-editar-informacoes">
          <div className="titulo-card">
            <h2>Informações do Parceiro</h2>
            <img src={iconeX} alt="Fechar Tela de Editar Informações do Parceiro" onClick={handleclick} />
          </div>
          <div className="card-input">
            <p>Nome do Parceiro</p>
            <input placeholder={nome}></input>
          </div>
          <div className="card-input">
            <p>Telefone do Parceiro</p>
            <input placeholder={telefone}></input>
          </div>
          <div className="card-input">
            <p>Tipo do Parceiro</p>
            <select className="selectModal">

              <option defaultValue>{tipo}</option>
              <option value="">Pessoa Jurídica</option>
              <option value="">Pessoa Física</option>

            </select>
          </div>
          <div className="card-input">
            <p>Papel Comercial do Parceiro</p>
            <select className="selectModal">

              <option defaultValue>{papel}</option>
              <option value="">Cliente</option>
              <option value="">Fornecedor</option>
              <option value="">Cliente/Fornecedor</option>

            </select>
          </div>
          <button className="botaoMargem">Confirmar Edição </button>
        </div>
      </div>
    );
  }
