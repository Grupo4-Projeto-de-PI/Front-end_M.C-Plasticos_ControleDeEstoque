import "./intervalo-de-tempo.css"

function IntervaloDeTempoCard(){
    return (
        <div className="card-intervalo-de-tempo-card">
            <div className="titulo-card">
                <h1>Intervalo de Tempo</h1>
            </div>
            <div className="card-inputs">
                <input type="text" placeholder="dd/mm/aaaa"/>
                <p>-</p>
                <input type="text" placeholder="dd/mm/aaaa"/>
            </div>
            <div className="card-inputs">
                <input type="text" placeholder="hh:mm"/>
                <p>-</p>
                <input type="text" placeholder="hh:mm"/>
            </div>
        </div>
    )
}

export default IntervaloDeTempoCard