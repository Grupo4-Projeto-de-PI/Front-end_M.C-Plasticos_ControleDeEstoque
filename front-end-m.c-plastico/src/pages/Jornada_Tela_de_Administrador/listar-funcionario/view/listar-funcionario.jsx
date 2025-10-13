import "../css/listar-funcionario.css";
import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import FuncionarioCard from "../components/principal-card/principal-card";
import SearchBar from "../../../../components/search-bar/search-bar";

function ListarFuncionario({funcionarios}) {
  console.log("funcionarios:", funcionarios);
  return (
    <main className="container">
      <Header text="Funcionários" showAdd={true} showFilter={false} />
      <SearchBar placeholder={"Buscar Funcionário"}></SearchBar>
    
      <section className="lista-funcionarios">
        {funcionarios.map((funcionario, index) => (
        <FuncionarioCard
          key={index}
          nome={funcionario.nome}
          rf={funcionario.codigoFuncionario}
          onEdit={() => alert("Editar " + funcionario.nome)}
          onDelete={() => alert("Excluir " + funcionario.nome)}
        />
      ))}
      </section>

      <Footer />
    </main>
  );

}

export default ListarFuncionario;