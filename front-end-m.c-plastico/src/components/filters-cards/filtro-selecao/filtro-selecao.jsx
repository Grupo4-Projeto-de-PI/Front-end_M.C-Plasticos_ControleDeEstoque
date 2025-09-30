import IconSeta from '../../../assets/icons/seta-filtro-card.svg'
import "./filtro-selecao.css"
function FiltroSelecao({ title }) {
    return (
        <div className="filtro-selecao">
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