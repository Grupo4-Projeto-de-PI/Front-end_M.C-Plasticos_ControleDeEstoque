import "./intervalo-filtros.css"

function IntervalosFiltro({placeholderPrimario, placeholderSecundario, setFiltroValorInicial, setFiltroValorFinal, valorInicial, valorFinal, type}){
    return (
        <div className="card-intervalo-filtro">
            <div className="card-inputs">
                <input type={type} placeholder={placeholderPrimario} value={valorInicial || ''} onChange={(e) => setFiltroValorInicial(e.target.value)}/>
                <p>-</p>
                <input type={type} placeholder={placeholderSecundario} value={valorFinal || ''} onChange={(e) => setFiltroValorFinal(e.target.value)}/>
            </div>
        </div>
    )
}

export default IntervalosFiltro