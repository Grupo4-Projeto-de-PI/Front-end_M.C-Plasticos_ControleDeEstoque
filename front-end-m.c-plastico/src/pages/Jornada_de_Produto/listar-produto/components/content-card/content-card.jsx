import './content-card.css';
import noContentImg from '../../../../../assets/img/no-content-image.png'
import icon_pencil from '../../../../../assets/icons/icon_pencil.svg'

function ContentCard({ nomeProduto, tipoProduto, precoMedio, imagem, onEdit, onProduto }) {
    const handleEditClick = (e) => {
        e.stopPropagation(); 
        onEdit();
    };

    return (
        <div className="conteudo-card" onClick={onProduto}>
            <div className="card-img">
                <img src={imagem || noContentImg} alt={nomeProduto} />
            </div>
            <div className="card-conteudo">
                <h1>{nomeProduto}</h1>
                <h3>{tipoProduto}</h3>
                <h3>Preço médio: R${precoMedio}/Kg</h3>
            </div>
            <div className="icon-info-card" onClick={handleEditClick}>
                <img src={icon_pencil} alt="Editar produto" />
            </div>
        </div>
    )
}

export default ContentCard;