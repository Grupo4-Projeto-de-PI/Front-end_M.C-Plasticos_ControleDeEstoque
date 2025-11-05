import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import CardListarParceiro from "../components/cardParceiro/CardListarParceiro";
import '../css/listar-parceiro.css';
import EditarParceiroController from '../controller/editar-parceiro.controller';
import React, { useState } from 'react';

function ListarParceiro({ listaParceiros }) {
  const [parceiroSelecionado, setParceiroSelecionado] = useState(null);

  const handleClick = (parceiros) => {
    setParceiroSelecionado(parceiros);
    console.log(parceiros)
  };

  const fecharHandleClick = () => {
    setParceiroSelecionado(false);
  }

  return (
    <div className="parceiros-page">

      <Header text="Parceiros" showFilter />
      {parceiroSelecionado && (
        <EditarParceiroController
          parceiro={parceiroSelecionado}
          fecharModal={fecharHandleClick}
        />
      )}

      <div className="parceiros-content">

        <SearchBar placeholder="Buscar parceiro" />
        <div className="parceiros-lista">

          {listaParceiros.map((parceiros) => (
            <CardListarParceiro
              key={parceiros.id}
              nome={parceiros.nome}
              papelComercial={parceiros.papelComercial}
              handleClick={() => handleClick(parceiros)}
            />

          ))}
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default ListarParceiro