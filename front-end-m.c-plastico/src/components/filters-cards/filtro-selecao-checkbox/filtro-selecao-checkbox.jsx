import "./filtro-selecao-checkbox.css"
import { useNavigate } from "react-router-dom"

function FiltroSelecaoCheckbox({title, setSelecao, onClick}) {
    const navigate = useNavigate();
    return (
        <div className="filtro-selecao" onClick={navigate(onClick)}>
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