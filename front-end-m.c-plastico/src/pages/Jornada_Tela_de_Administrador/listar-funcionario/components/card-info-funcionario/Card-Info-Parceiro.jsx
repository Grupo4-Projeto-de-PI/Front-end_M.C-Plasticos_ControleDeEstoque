

import React from "react";
import "./card-info-funcionario.css";
import iconeX from "../../../../../assets/icons/icon_fechar.svg";

export default function CardInfoFuncionario({ nome, hierarquia, criacaoFunc, handleclick}) {
  console.log(`Dados da Pessoa 
    ${nome} 
    ${hierarquia}
    ${criacaoFunc}
    `)
  return (
    <div className="filtro-preto">
      <div className="card-info-informacoes">
        <div className="titulo-card">
          <h2>Informações do Funcionário</h2>
          <img src={iconeX} alt="Fechar Tela de info Informações do Parceiro" onClick={handleclick} />
        </div>
        <div className="card-input">
          <p>Nome do funcionario</p>
          <input placeholder={nome}></input>
        </div>
        <div className="card-input">
          <p>Hierarquia do funcionario</p>
          <input placeholder={hierarquia}></input>
        </div> 
        <div className="card-input">
          <p>Data de criação do funcionario</p>
          <input placeholder={criacaoFunc}></input>
        </div>      
      </div>
    </div>
  );
}
