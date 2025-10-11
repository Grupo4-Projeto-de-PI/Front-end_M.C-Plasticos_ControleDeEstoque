import Button from "@/components/button/button";
import FiltroSelecao from "@/components/filters-cards/filtro-selecao/filtro-selecao";
import IntervalosFiltro from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtros";
import Header2 from "@/components/header-2/header-2"
import "../css/filtro-historico-transacao.css"
import { useNavigate } from "react-router-dom";
function FiltroHistoricoTransacao({ postFiltros, setDataInicio, setDataFim, setHoraInicio, setHoraFim, setPesoInicio, setPesoFim }) {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ 
                backgroundColor: '#f0f0f0',
                height: '50px'
            }}>
                <Header2 onClickBack={() => navigate('/historico-transacao')} />
            </div>
            <div className="filtro-estoque-pai">
                <div className="card-filtro">
                    <h1>Intervalo de Tempo</h1>
                    <div className="intervalos">
                        <IntervalosFiltro 
                        placeholderPrimario={"dd/mm/aaaa"} 
                        placeholderSecundario={"dd/mm/aaaa"} 
                        setFiltroValorInicial={setDataInicio} 
                        setFiltroValorFinal={setDataFim}
                        />
                        <IntervalosFiltro 
                        placeholderPrimario={"hh:mm"} 
                        placeholderSecundario={"hh:mm"} 
                        setFiltroValorInicial={setHoraInicio} 
                        setFiltroValorFinal={setHoraFim}
                        />
                    </div>
                </div>
                <div className="card-filtro">
                    <h1>Intervalo de Peso</h1>
                    <div className="intervalos">
                        <IntervalosFiltro 
                        placeholderPrimario={"Peso Inicial (Kg)"} 
                        placeholderSecundario={"Peso Final (Kg)"} 
                        setFiltroValorInicial={setPesoInicio}
                        setFiltroValorFinal={setPesoFim}
                        />
                    </div>
                </div>
                <div className="card-filtro">
                    <h1>Buscar Por</h1>
                    <div className="intervalos">
                        <FiltroSelecao title={"Tipo Operação"} onClick={() => navigate('/filtro-operacao')}/>
                        <FiltroSelecao title={"Tipo Material"} onClick={() => navigate('/filtro-tipo-material')}/>
                        <FiltroSelecao title={"Categoria"} onClick={() => navigate('/filtro-tipo-categoria')}/>
                        <FiltroSelecao title={"Tipo Parceiro Comercial"} onClick={() => navigate('/filtro-tipo-parceiro')}/>
                        <FiltroSelecao title={"Cliente"} onClick={() => navigate('/filtro-cliente')}/>
                        <FiltroSelecao title={"Fornecedor"} onClick={() => navigate('/filtro-fornecedor')}/>
                    </div>
                </div>
            </div>
            <div className="button-filtro">
                <Button text={"Aplicar Filtros"} onClick={postFiltros}/>
            </div>    
        </>
    )
}

export default FiltroHistoricoTransacao;