import './content-card.css';
import AparaColoridaImg from "../../../../../assets/icons/img-apara-colorida.svg"

function ContentCard({ nomeProduto, peso, horaRegistrada, imagem, indicador }) {
    return (
        <div className="conteudo-card">
            <div className="card-img">
                <img src={imagem || AparaColoridaImg} alt={nomeProduto} />
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