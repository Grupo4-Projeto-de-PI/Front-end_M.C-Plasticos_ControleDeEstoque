import Button from "@/components/button/button";
import FiltroSelecao from "@/components/filters-cards/filtro-selecao/filtro-selecao";
import IntervalosFiltro from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtros";
import Header2 from "@/components/header-2/header-2"
import "../css/filtro-estoque-atual.css"
function FiltroEstoqueAtual(){
    return (
        <>
            <Header2 />
            <div className="filtro-estoque-pai">
                <div className="card-filtro">
                    <h1>Intervalo de Peso</h1>
                    <div className="intervalos">
                        <IntervalosFiltro placeholderPrimario={"Peso Inicial (Kg)"} placeholderSecundario={"Peso Final (Kg)"} />
                    </div>
                </div>
                <div className="card-filtro">
                    <h1>Buscar Por</h1>
                    <div className="intervalos">
                        <FiltroSelecao title={"Tipo Material"}></FiltroSelecao>
                    </div>
                </div>
            </div>

            <Button text={"Aplicar Filtros"}></Button>
        </>
    )
}

export default FiltroEstoqueAtual;