  import React from "react";
  import "./card-editar-parceiro.css";
  import iconeX from "../../../../../assets/icons/icon_fechar.svg";

  export default function CardInfoParceiro({ nome, telefone, tipo, papel, handleclick}) {
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
            <span>{telefone}</span>
          </div>
          <div className="card-input">
            <p>Tipo do Parceiro</p>
            <span> {tipo}</span>
          </div>
          <div className="card-input">
            <p>Papel Comercial do Parceiro</p>
              <span>{papel}</span>
          </div>
        </div>
      </div>
    );
  }
