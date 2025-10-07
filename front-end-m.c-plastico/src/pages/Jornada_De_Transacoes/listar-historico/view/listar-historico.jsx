import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import PrincipalCard from "../components/principal-card/principal-card";
import '../css/listar-historico.css';
import { useNavigate } from "react-router-dom";
function ListarHistorico({listaTransacoes, onCreateNewHistorico}) {
    const navigate = useNavigate();
    return (
        <>
            <Header
                text="Transações"
                showAdd={true}
                showFilter={true}
                onClickAdd={onCreateNewHistorico}
                onClickFilter={() => navigate('/filtro-historico-transacao')}
            ></Header>
            <div className="card-pai">
                {listaTransacoes.map((transacao) => (
                    <PrincipalCard 
                        key={transacao.id}
                        date={transacao.data[0]}
                        transacoes={transacao}
                    />
                ))}
            </div>
            <Footer></Footer>
        </>
    )
}

export default ListarHistorico;