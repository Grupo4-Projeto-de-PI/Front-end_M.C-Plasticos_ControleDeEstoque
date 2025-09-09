import './content-card.css';

function ContentCard({ nomeProduto, peso, horaRegistrada, imagem, indicador }) {
    return (
        <div className="conteudo-card">
            <div className="card-img">
                <img src={imagem} alt={nomeProduto} />
            </div>
            <div className="card-conteudo">
                <h1>{nomeProduto}</h1>
                <h3>{peso}</h3>
                <h3 className="hora">Hora: {horaRegistrada}</h3>
            </div>
            <div className="icon-info-card">
                <img src={indicador} alt="" />
            </div>
        </div>
    )
}

export default ContentCard;