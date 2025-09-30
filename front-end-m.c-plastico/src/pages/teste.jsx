import IntervaloDeTempoCard from "@/components/filters-cards/intervalo-de-tempo/intervalo-de-tempo";
import IntervaloDePesoCard from "@/components/filters-cards/intervalo-de-peso/intervalo-de-peso";

function TesteComponente() {
    return (
        <>
            <IntervaloDeTempoCard titulo={"Intervalo de Tempo"} placeholder={"dd/mm/aaaa"}/>
            <IntervaloDePesoCard titulo={"Intervalo de Peso"} placeholder={"Peso (Kg)"}/>
        </>
    )
}

export default TesteComponente;