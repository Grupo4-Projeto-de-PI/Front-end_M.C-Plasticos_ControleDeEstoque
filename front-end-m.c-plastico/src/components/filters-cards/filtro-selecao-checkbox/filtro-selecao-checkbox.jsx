import "./filtro-selecao-checkbox.css"

function FiltroSelecaoCheckbox({title, setSelecao}) {
    return (
        <div className="filtro-selecao">
            <div className='title-filtro'>
                <h1>{title}</h1>
            </div>
            <div className="checkbox-filter">
                <input type="checkbox" value={title} onChange={(e) => setSelecao(e.target.checked ? title : null)} />
            </div>
        </div>
    )
}

export default FiltroSelecaoCheckbox