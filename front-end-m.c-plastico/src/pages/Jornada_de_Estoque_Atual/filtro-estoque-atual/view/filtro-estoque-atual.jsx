import Button from "@/components/button/button";
import FiltroSelecao from "@/components/filters-cards/filtro-selecao/filtro-selecao";
import IntervalosFiltro from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtros";
import Header2 from "@/components/header-2/header-2"
import "../css/filtro-estoque-atual.css"
function FiltroEstoqueAtual(){
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


            <div className="button-filtro">
                <Button text={"Aplicar Filtros"}></Button>  
            </div>    
        </>
    )
}

export default FiltroEstoqueAtual;