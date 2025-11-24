import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import CardListarParceiro from "../components/cardParceiro/CardListarParceiro";
import '../css/listar-parceiro.css';
import CardEditarParceiro from '../components/cardEditarParceiro/Card-Editar-Parceiro';
import { CadastroParceiroComercialController } from '../../cadastro-parceiro-comercial/index.js';
import React, { useState } from 'react';

function ListarParceiro({ listaParceiros, onClickAdd, mostrarModalCadastro, onFecharModalCadastro, onEdited, busca, handleBuscaChange, handleBuscaSubmit }) {
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
          id={parceiroSelecionado.id}
          nome={parceiroSelecionado.nome}
          telefone={parceiroSelecionado.telefone}
          tipo={parceiroSelecionado.tipo}
          papel={parceiroSelecionado.papelComercial}
          handleclick={fecharHandleClick}
          onEdited={() => { if (onEdited) onEdited(); setParceiroSelecionado(false); }}
        />
      )}



      <div className="parceiros-content scrollable-content">

        <form onSubmit={handleBuscaSubmit}>
          <SearchBar placeholder="Buscar parceiro" value={busca} onChange={handleBuscaChange} />
        </form>
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