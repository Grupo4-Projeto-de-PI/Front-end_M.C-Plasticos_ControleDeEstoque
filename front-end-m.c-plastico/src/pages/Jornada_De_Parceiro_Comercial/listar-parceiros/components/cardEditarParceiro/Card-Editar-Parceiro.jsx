import React from "react";
import "./card-editar-parceiro.css";
import Button from '../../../../../components/button/button';
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
          <select name="tipo" onChange={handleChange} className="selectModal">
            <option defaultValue={tipo}>Selecione um tipo de parceiro</option>            
            <option value="PJ">Pessoa Jurídica</option>
            <option value="PF">Pessoa Física</option>
            <option value="PFJ">Pessoa Física/Jurídica</option>
          </select>
        </div>
        <div className="card-input">
          <p>Papel Comercial do Parceiro</p>
          <select name="papel" value={papel} onChange={handleChange} className="selectModal">
            <option defaultValue={papel}>Selecione um papel de parceiro</option>            
            <option value="CL">Cliente</option> 
            <option value="FN">Fornecedor</option>
            <option value="CLFN">Cliente/Fornecedor</option>
          </select>
        </div>
        <div className="card-input">
        <Button text='Editar Parceiro' onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
}