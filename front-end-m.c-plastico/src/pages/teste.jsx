import IntervalosFiltro from "@/components/filters-cards/intervalo-filtro-card/intervalo-filtros";
import FiltroSelecao from "@/components/filters-cards/filtro-selecao/filtro-selecao";

function TesteComponente() {
    return (
        <>
            <IntervalosFiltro placeholderPrimario={"Peso Inicial (Kg)"} placeholderSecundario={"Peso Final (Kg)"}/>
            <FiltroSelecao title={"Tipo Operação"}/>
        </>
    )
}

export default TesteComponente;