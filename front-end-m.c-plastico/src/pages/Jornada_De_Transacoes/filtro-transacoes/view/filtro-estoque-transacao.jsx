import Button from "@/components/button/button";
import FiltroSelecao from "@/components/filters-cards/filtro-selecao/filtro-selecao";
import IntervalosFiltro from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtros";
import IntervaloFiltroData from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtro-data";
import Header2 from "@/components/header-2/header-2"
import "../css/filtro-historico-transacao.css"
import { useNavigate } from "react-router-dom";
function FiltroHistoricoTransacao({ postarFiltros, dataInicio, dataFim, setDataInicio, setDataFim, pesoInicio, pesoFim, setPesoInicio, setPesoFim }) {
    const navigate = useNavigate();
    return (
        <div className="page-with-header2">
            <Header2 onClickBack={() => navigate('/historico-transacao')} pencil={false}/>
            <div className="filtro-estoque-pai scrollable-content">
                <div className="card-filtro">
                    <h1>Intervalo de Data</h1>
                    <div className="intervalos">
                        <IntervaloFiltroData 
                        valorInicial={dataInicio}
                        valorFinal={dataFim}
                        setFiltroValorInicial={setDataInicio} 
                        setFiltroValorFinal={setDataFim}
                        />
                    </div>
                </div>
                <div className="card-filtro">
                    <h1>Intervalo de Peso</h1>
                    <div className="intervalos">
                        <IntervalosFiltro 
                        placeholderPrimario={"Peso Inicial (Kg)"} 
                        placeholderSecundario={"Peso Final (Kg)"}
                        valorInicial={pesoInicio}
                        valorFinal={pesoFim}
                        setFiltroValorInicial={setPesoInicio}
                        setFiltroValorFinal={setPesoFim}
                        type={"number"}
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
                <Button text={"Aplicar Filtros"} onClick={postarFiltros}/>
            </div>    
        </div>
    )
}

export default FiltroHistoricoTransacao;