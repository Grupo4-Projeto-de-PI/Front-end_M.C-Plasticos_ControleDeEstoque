import "./intervalo-filtros.css"

function IntervaloFiltroData({ setFiltroValorInicial, setFiltroValorFinal, valorInicial, valorFinal }) {
    return (
        <div className="card-intervalo-filtro">
            <div className="card-inputs">
                <input 
                    type="date" 
                    value={valorInicial || ''} 
                    onChange={(e) => setFiltroValorInicial(e.target.value)}
                />
                <p>-</p>
                <input 
                    type="date" 
                    value={valorFinal || ''} 
                    onChange={(e) => setFiltroValorFinal(e.target.value)}
                />
            </div>
        </div>
    )
}

export default IntervaloFiltroData
