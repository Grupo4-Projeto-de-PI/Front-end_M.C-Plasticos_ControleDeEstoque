import React from 'react';
import './card-lista-parceiro.css';
import icon_pencil from '../../../../../assets/icons/icon_pencil.svg';


function CardListarParceiro({nome, papelComercial, handleClick}) {
  var papelComercialLocal = ''
  if(papelComercial == 'FN'){
    papelComercialLocal = 'Fornecedor'
  }else if(papelComercial == 'CL'){
    papelComercialLocal = 'Cliente'
  }else{
    papelComercialLocal = 'Cliente e Fornecedor'
  }
  
  return (
    <div className="card-historico">
        <div className="info-card">
          <h3>{nome}</h3>
          <h5>{papelComercialLocal}</h5>
        </div>
        <div className='imagem'>
          <img src={icon_pencil} alt={`Imagem de Lápis`} onClick={handleClick}/>
        </div>
    </div>
  );
}

export default CardListarParceiro;