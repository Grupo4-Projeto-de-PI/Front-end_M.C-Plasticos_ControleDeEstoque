import "./filtro-selecao-checkbox.css"

function FiltroSelecaoCheckbox({title, setSelecao, id, valorInicial}) {
    const isChecked = Array.isArray(valorInicial) && valorInicial.includes(id);
    
    const handleChange = (e) => {
        const checked = e.target.checked;
        const currentValues = Array.isArray(valorInicial) ? valorInicial : [];
        
        if (checked) {
            // Add the id to the array if it's not already there
            setSelecao([...currentValues, id]);
        } else {
            // Remove the id from the array
            setSelecao(currentValues.filter(item => item !== id));
        }
    };
    
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
                    onChange={handleChange} 
                />
            </div>
        </div>
    )
}

export default FiltroSelecaoCheckbox