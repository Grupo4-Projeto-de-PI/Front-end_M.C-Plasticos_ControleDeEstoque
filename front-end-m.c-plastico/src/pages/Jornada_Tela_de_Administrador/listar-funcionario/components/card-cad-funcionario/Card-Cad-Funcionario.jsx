import React from "react";
import "./card-cad-funcionario.css";
import iconeX from "../../../../../assets/icons/icon_fechar.svg";

export default function CardCadFuncionario() {
  console.log(`Dados da Pessoa 
    ${nome} 
    ${telefone}
    ${tipo}
    ${papel}`)
  return (
    <div className="filtro-preto">
      <div className="card-cad-informacoes">
        <div className="titulo-card">
          <h2>Informações do funcionario</h2>
          <img src={iconeX} alt="Fechar Tela de cad Informações do funcionario" onClick={handleclick} />
        </div>
        <div className="card-input">
          <p>Nome do funcionario</p>
          <input placeholder={nome}></input>
        </div>
        <div className="card-input">
          <p>Senha do funcionario</p>
          <input placeholder={telefone}></input>
        </div>
        <div className="card-input">
          <p>Hierarquia do Funcionario</p>
          <select className="selectModal">

            <option defaultValue>{tipo}</option>
            <option value="">Pessoa Jurídica</option>
            <option value="">Pessoa Física</option>

          </select>
        </div>
        <button className="botaoMargem">Confirmar Cadastro </button>
      </div>
    </div>
  );
}
