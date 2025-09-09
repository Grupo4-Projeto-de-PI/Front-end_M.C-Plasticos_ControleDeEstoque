import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import PrincipalCard from "../components/principal-card/principal-card";
import '../css/listar-historico.css';
function ListarHistorico() {
    return (
        <>
            <Header
                text="Transações"
                showAdd={true}
                showFilter={true}
            ></Header>
            <div className="card-pai">
                <PrincipalCard date="20 de Junho de 2023" />
                <PrincipalCard date="20 de Junho de 2023" />
                <PrincipalCard date="20 de Junho de 2023" />
            </div>
            <Footer></Footer>
        </>
    )
}

export default ListarHistorico;