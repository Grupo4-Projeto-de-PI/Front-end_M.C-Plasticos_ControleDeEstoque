import "./intervalo-filtros.css"

function IntervalosFiltro({placeholderPrimario, placeholderSecundario}){
    return (
        <div className="card-intervalo-filtro">
            <div className="card-inputs">
                <input type="text" placeholder={placeholderPrimario}/>
                <p>-</p>
                <input type="text" placeholder={placeholderSecundario}/>
            </div>
        </div>
    )
}

export default IntervalosFiltro