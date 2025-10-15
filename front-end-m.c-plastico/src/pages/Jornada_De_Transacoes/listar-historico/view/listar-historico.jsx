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

            {listaTransacoes.length === 0 && (
                <div className="nenhum-registro">
                    <p>Nenhum registro encontrado</p>
                </div>
            )}
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