import "./filtro-selecao-checkbox.css"

function FiltroSelecaoCheckbox({title}) {
    return (
        <div className="filtro-selecao">
            <div className='title-filtro'>
                <h1>{title}</h1>
            </div>
            <div className="checkbox-filter">
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default FiltroSelecaoCheckbox