import "../css/listar-funcionario.css";
import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import FuncionarioCard from "../components/principal-card/principal-card";
import SearchBar from "../../../../components/search-bar/search-bar";
import { EditarHierarquiaController } from "../../editar-hierarquia/index.js";
import React, { useState } from "react";

function ListarFuncionario({ funcionarios }) {
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  const handleCloseModal = () => {
    setFuncionarioSelecionado(null);
  };

  return (
    <main className="container">
      <Header text="Funcionários" showAdd={true} showFilter={false} />
      <SearchBar placeholder={"Buscar Funcionário"} />

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

      <Footer />
    </main>
  );
}

export default ListarFuncionario;
