import "../css/listar-funcionario.css";
import Header  from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import FuncionarioCard from "../components/principal-card/principal-card";

 function ListarFuncionario() {
 return (
     <main className="container">
      <Header text="Funcionários" showAdd={true} showFilter={false} />

      <div className="search-box">
        <div className="icon-search">
          <img src="/assets/icons/icon_search.svg" alt="Buscar" />
        </div>
        <input
          type="text"
          placeholder="Buscar Funcionário"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <section className="lista-funcionarios">
        {filtrados.map((func) => (
          <FuncionarioCard
            key={func.id}
            nome={func.nome}
            rf={func.rf}
            onEdit={() => alert("Editar " + func.nome)}
            onDelete={() => handleDelete(func.id)}
          />
        ))}
      </section>

      <Footer />
    </main>
  );

}

export default ListarFuncionario;