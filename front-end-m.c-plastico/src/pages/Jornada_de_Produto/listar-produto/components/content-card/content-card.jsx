import './content-card.css';
import noContentImg from '../../../../../assets/img/no-content-image.png'
import icon_pencil from '../../../../../assets/icons/icon_pencil.svg'

function ContentCard({ nomeProduto, tipoProduto, precoMedio, imagem, onEdit }) {
    return (
        <div className="conteudo-card">
            <div className="card-img">
                <img src={imagem || noContentImg} alt={nomeProduto} />
            </div>
            <div className="card-conteudo">
                <h1>{nomeProduto}</h1>
                <h3>{tipoProduto}</h3>
                <h3>Preço médio: R${precoMedio}/Kg</h3>
            </div>
            <div className="icon-info-card">
                <img src={icon_pencil} alt="" onClick={onEdit}/>
            </div>
        </div>
    )
}

export default ContentCard;