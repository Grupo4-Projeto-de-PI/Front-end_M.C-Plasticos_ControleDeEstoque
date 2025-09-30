import "./intervalo-de-peso.css"

function IntervaloDePesoCard(){
    return (
        <div className="card-intervalo-de-peso-card">
            <div className="titulo-card">
                <h1>Intervalo de Peso</h1>
            </div>
            <div className="card-inputs">
                <input type="text" placeholder="Peso Inicial (Kg)"/>
                <p>-</p>
                <input type="text" placeholder="Peso Final (Kg)"/>
            </div>
        </div>
    )
}

export default IntervaloDePesoCard