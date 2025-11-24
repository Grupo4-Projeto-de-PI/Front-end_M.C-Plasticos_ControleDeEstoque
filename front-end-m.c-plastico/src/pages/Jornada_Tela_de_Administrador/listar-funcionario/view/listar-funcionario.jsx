import "../css/listar-funcionario.css";
import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import FuncionarioCard from "../components/principal-card/principal-card";
import SearchBar from "../../../../components/search-bar/search-bar";
import { EditarHierarquiaController } from "../../editar-hierarquia/index.js";
import CriarFuncionarioController from "../../criar-funcionario/index";
import React, { useState } from "react";

function ListarFuncionario({ funcionarios }) {
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  // NOVO → controla o modal de cadastro
  const [showModalCadastrar, setShowModalCadastrar] = useState(false);

  const handleCloseModal = () => {
    setFuncionarioSelecionado(null);
  };

  return (
    <div className="page-with-header">
      <Header
        text="Funcionários"
        showAdd={true}
        showFilter={false}
        onClickAdd={() => setShowModalCadastrar(true)} // ← aqui abre o modal
      />

      <SearchBar placeholder={"Buscar Funcionário"} />

      <main className="container scrollable-content">
        <section className="lista-funcionarios">
          {funcionarios.map((funcionario, index) => (
            <FuncionarioCard
              key={index}
              nome={funcionario.nome}
              rf={funcionario.codigoFuncionario}
              onEdit={() => setFuncionarioSelecionado(funcionario)}
            />
          ))}
        </section>

        {funcionarioSelecionado && (
          <EditarHierarquiaController
            funcionario={funcionarioSelecionado}
            onClose={handleCloseModal}
          />
        )}

        {/* NOVO — modal de cadastro */}
        {showModalCadastrar && (
          <CriarFuncionarioController
            onClose={() => setShowModalCadastrar(false)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ListarFuncionario;
