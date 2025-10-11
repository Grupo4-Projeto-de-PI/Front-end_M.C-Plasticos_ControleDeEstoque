import "./intervalo-filtros.css"

function IntervalosFiltro({placeholderPrimario, placeholderSecundario, setFiltroValorInicial, setFiltroValorFinal}){
    return (
        <div className="card-intervalo-filtro">
            <div className="card-inputs">
                <input type="text" placeholder={placeholderPrimario} onChange={(e) => setFiltroValorInicial(e.target.value)}/>
                <p>-</p>
                <input type="text" placeholder={placeholderSecundario} onChange={(e) => setFiltroValorFinal(e.target.value)}/>
            </div>
        </div>
    )
}

export default IntervalosFiltro