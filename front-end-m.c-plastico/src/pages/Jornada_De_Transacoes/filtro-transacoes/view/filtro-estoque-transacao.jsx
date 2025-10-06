import Button from "@/components/button/button";
import FiltroSelecao from "@/components/filters-cards/filtro-selecao/filtro-selecao";
import IntervalosFiltro from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtros";
import Header2 from "@/components/header-2/header-2"
import "../css/filtro-historico-transacao.css"
function FiltroHistoricoTransacao(){
    return (
        <>
            <div style={{ 
                backgroundColor: '#f0f0f0',
                height: '50px'
            }}>
                <Header2 />
            </div>
            <div className="filtro-estoque-pai">
                <div className="card-filtro">z
                    <h1>Intervalo de Tempo</h1>
                    <div className="intervalos">
                        <IntervalosFiltro placeholderPrimario={"dd/mm/aaaa"} placeholderSecundario={"dd/mm/aaaa"} />
                        <IntervalosFiltro placeholderPrimario={"hh:mm"} placeholderSecundario={"hh:mm"} />
                    </div>
                </div>
                <div className="card-filtro">
                    <h1>Intervalo de Peso</h1>
                    <div className="intervalos">
                        <IntervalosFiltro placeholderPrimario={"Peso Inicial (Kg)"} placeholderSecundario={"Peso Final (Kg)"} />
                    </div>
                </div>
                <div className="card-filtro">
                    <h1>Buscar Por</h1>
                    <div className="intervalos">
                        <FiltroSelecao title={"Tipo Operação"}></FiltroSelecao>
                        <FiltroSelecao title={"Tipo Material"}></FiltroSelecao>
                        <FiltroSelecao title={"Categoria"}></FiltroSelecao>
                        <FiltroSelecao title={"Tipo Parceiro Comercial"}></FiltroSelecao>
                        <FiltroSelecao title={"Parceiro Comercial"}></FiltroSelecao>
                        <FiltroSelecao title={"Papel Comercial"}></FiltroSelecao>
                        <FiltroSelecao title={"Cliente"}></FiltroSelecao>
                        <FiltroSelecao title={"Fornecedor"}></FiltroSelecao>
                    </div>
                </div>
            </div>
            <div className="button-filtro">
                <Button text={"Aplicar Filtros"}></Button>  
            </div>    
        </>
    )
}

export default FiltroHistoricoTransacao;