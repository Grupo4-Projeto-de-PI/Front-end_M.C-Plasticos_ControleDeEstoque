import IconSeta from '../../../assets/icons/seta-filtro-card.svg'
import "./filtro-selecao.css"
import { useNavigate } from 'react-router-dom'
function FiltroSelecao({ title, onClick }) {

    const navigate = useNavigate();
    return (
        <div className="filtro-selecao" onClick={navigate(onClick)}>
            <div className='title-filtro'>
                <h1>{title}</h1>
            </div>
            <div className="selecao-icon">
                <p>Ver todas</p>
                <img src={IconSeta} alt="" />
            </div>
        </div>
    )
}

export default FiltroSelecao