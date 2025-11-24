import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import CardListarParceiro from "../components/cardParceiro/CardListarParceiro";
import '../css/listar-parceiro.css';
import EditarParceiroController from '../controller/editar-parceiro.controller';
import React, { useState } from 'react';
import { ListarInformacoesParceiro } from '../../listar-informacao-parceiro';

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
              onInfoParceiro={() => onClickInfoParceiro(parceiros.id)}
            />

          ))}
        </div>

      </div>
      <Footer />

      {mostrarModalCadastro && (
        <CadastroParceiroComercialController onClose={onFecharModalCadastro} />
      )}

      {mostrarModalInformacoesParceiro && (
        <ListarInformacoesParceiro
          idParceiro={idParceiro}
          onClose={onFecharModalInfoParceiro}
        />
      )}

    </div>
  );
}

export default ListarParceiro