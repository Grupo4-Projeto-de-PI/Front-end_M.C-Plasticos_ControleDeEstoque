import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import PrincipalCard from "../components/principal-card/principal-card";
import FooterPopupSelected from "@/components/footer-popup-selected/footer-popup-selected";
import '../css/listar-historico.css';
import { useNavigate } from "react-router-dom";
function ListarHistorico({
    listaTransacoes, 
    onCreateNewHistorico, 
    handleInformationClick,
    popUpOpen,
    popUpClose,
    popUpVisible,
    handleLeitorPlanilhaExcel,
}) {
    const navigate = useNavigate();
    return (
        <>
            <Header
                text="Transações"
                showAdd={true}
                showFilter={true}
                onClickAdd={popUpOpen}
                onClickFilter={() => navigate('/filtro-historico-transacao')}
            ></Header>

            {popUpVisible && (
                <FooterPopupSelected 
                button1Text={'Criar Histórico'}
                button2Text={'Ler Planilha Excel'}
                title={'O Que Deseja Fazer?'}
                onClose={popUpClose}
                onClickButton1={onCreateNewHistorico}
                onClickButton2={handleLeitorPlanilhaExcel}
                />
            )}

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
                        onClickInformation={() => handleInformationClick(transacao.id)}
                    />
                ))}
            </div>
            <Footer></Footer>
        </>
    )
}

export default ListarHistorico;