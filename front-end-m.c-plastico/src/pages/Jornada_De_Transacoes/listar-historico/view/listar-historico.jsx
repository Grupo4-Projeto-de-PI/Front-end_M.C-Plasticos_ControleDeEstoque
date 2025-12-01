import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import PrincipalCard from "../components/principal-card/principal-card";
import FooterPopupSelected from "@/components/footer-popup-selected/footer-popup-selected";
import PopupDownloadRelatorio from "../../relatorio-filtros/components/popup-download-relatorio/popup-download-relatorio";
import RelatorioView from "../../relatorio-filtros/view/relatorio-view";
import { gerarRelatorio } from "../../relatorio-filtros/controller/relatorio-filtros-controller";
import '../css/listar-historico.css';
import { useNavigate } from "react-router-dom";
import indicativoPositivo from '@/assets/icons/Indicativo_positivo_historico_transacao.svg';
import indicativoNegativo from '@/assets/icons/indicativo_negativo_historico_transacao.svg';

function ListarHistorico({
    listaTransacoes,
    onCreateNewHistorico,
    handleInformationClick,
    popUpOpen,
    popUpClose,
    popUpVisible,
    filtroAplicado,
    transacoes,
    onClickReportDownload,
    popUpRelatorioVisible,
    onConfirmDownload,
    onCancelDownload,
    onLimparFiltros,
}) {
    const navigate = useNavigate();
    
    const dadosRelatorio = filtroAplicado && transacoes.length > 0 ? gerarRelatorio(transacoes) : null;
    
    return (
        <div className="page-with-header">

            {filtroAplicado ? (
                <Header
                    text="Transações"
                    showAdd={true}
                    showFilter={true}
                    showReport={true}
                    onClickAdd={popUpOpen}
                    onClickFilter={() => navigate('/filtro-historico-transacao')}
                    onClickReportDownload={onClickReportDownload}
                ></Header>
            ) : (
                <Header
                    text="Transações"
                    showAdd={true}
                    showFilter={true}
                    onClickAdd={popUpOpen}
                    onClickFilter={() => navigate('/filtro-historico-transacao')}
                ></Header>
            )}

            {popUpVisible && (
                <FooterPopupSelected
                    button1Text={'Entrada'}
                    button2Text={'Saida'}
                    title={'O Que Deseja Registrar?'}
                    onClose={popUpClose}
                    onClickButton1={() => onCreateNewHistorico(0)}
                    onClickButton2={() => onCreateNewHistorico(1)}
                    button1Icon={indicativoPositivo}
                    button2Icon={indicativoNegativo}
                    button1ClassName={'button-footer-entrada'}
                    button2ClassName={'button-footer-saida'}
                />
            )}

            {popUpRelatorioVisible && (
                <PopupDownloadRelatorio
                    onConfirm={onConfirmDownload}
                    onCancel={onCancelDownload}
                />
            )}

            {/* Componente oculto do relatório para geração do PDF */}
            {dadosRelatorio && (
                <div style={{ position: 'absolute', left: '-9999px' }}>
                    <RelatorioView dadosRelatorio={dadosRelatorio} />
                </div>
            )}

            {listaTransacoes.length === 0 && (
                <div className="nenhum-registro">
                    <p>Nenhum registro encontrado</p>
                </div>
            )}
            <div className="card-pai">
                {listaTransacoes.map((grupo, index) => (
                    <PrincipalCard
                        key={`${grupo.data}-${index}`}
                        date={grupo.data}
                        transacoes={grupo.transacoes}
                        onClickInformation={handleInformationClick}
                    />
                ))}
            </div>
            
            {filtroAplicado && (
                <button className="btn-limpar-filtros" onClick={onLimparFiltros}>
                    Limpar Filtros
                </button>
            )}
            
            <Footer></Footer>
        </div>
    )
}

export default ListarHistorico;