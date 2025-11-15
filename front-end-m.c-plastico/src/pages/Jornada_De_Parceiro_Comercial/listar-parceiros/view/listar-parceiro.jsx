import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import CardListarParceiro from "../components/cardParceiro/CardListarParceiro";
import '../css/listar-parceiro.css';
import CardEditarParceiro from '../components/cardEditarParceiro/Card-Editar-Parceiro';
import { CadastroParceiroComercialController } from '../../cadastro-parceiro-comercial/index.js';
import React, { useState } from 'react';

function ListarParceiro({ listaParceiros, onClickAdd, mostrarModalCadastro, onFecharModalCadastro }) {
  const [parceiroSelecionado, setParceiroSelecionado] = useState(null);

  const handleClick = (parceiros) => {
    setParceiroSelecionado(parceiros);
  };

  const fecharHandleClick = () => {
    setParceiroSelecionado(false);
  }

  return (
    <div className="page-with-header">
       
      <Header text="Parceiros" showAdd onClickAdd={onClickAdd} />
      {parceiroSelecionado && (
        <CardEditarParceiro
          key={parceiroSelecionado.id}
          nome={parceiroSelecionado.nome}
          telefone={parceiroSelecionado.telefone}
          tipo={parceiroSelecionado.tipo}
          papel={parceiroSelecionado.papelComercial}
          handleclick={fecharHandleClick}
        />
      )}



      <div className="parceiros-content scrollable-content">

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

      {mostrarModalCadastro && (
        <CadastroParceiroComercialController onClose={onFecharModalCadastro} />
      )}

    </div>
  );
}

export default ListarParceiro