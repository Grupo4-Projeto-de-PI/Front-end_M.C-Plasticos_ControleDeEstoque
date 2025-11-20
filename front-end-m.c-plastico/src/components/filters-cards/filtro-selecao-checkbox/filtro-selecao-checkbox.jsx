import "./filtro-selecao-checkbox.css"

function FiltroSelecaoCheckbox({title, setSelecao, id, valorInicial}) {
    const isChecked = valorInicial === id;
    
    return (
        <div className="filtro-selecao" id={id}>
            <div className='title-filtro'>
                <h1>{title}</h1>
            </div>
            <div className="checkbox-filter">
                <input 
                    type="checkbox" 
                    value={id} 
                    checked={isChecked}
                    onChange={(e) => setSelecao(e.target.checked ? id : null)} 
                />
            </div>
        </div>
    )
}

export default FiltroSelecaoCheckbox