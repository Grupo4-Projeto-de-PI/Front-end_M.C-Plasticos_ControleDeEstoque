import './content-card.css';
import noContentImg from '../../../../../assets/img/no-content-image.png'
function ContentCard({ nomeProduto, peso, horaRegistrada, imagem, indicador, onClickInformation }) {
    return (
        <div className="conteudo-card" onClick={onClickInformation}>
            <div className="card-img">
                <img src={imagem || noContentImg} alt={nomeProduto} />
            </div>
            <div className="card-conteudo">
                <h1>{nomeProduto}</h1>
                <h3>{peso} Kg</h3>
                <h3 className="hora">Hora: {horaRegistrada}</h3>
            </div>
            <div className="icon-info-card">
                <img src={indicador} alt="" />
            </div>
        </div>
    )
}

export default ContentCard;