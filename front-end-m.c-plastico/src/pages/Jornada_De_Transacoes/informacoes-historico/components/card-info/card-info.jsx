import './card-info.css'

function CardInfoHistoricoTransacao({ historicoData }) {
    return (
        <div className="card-info-historico-transacao">
            <div className="info-item-historico-transacao">
                <p className="label">Produto</p>
            <p className="valor">{historicoData.nomeProduto}</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Peso</p>
            <p className="valor">{historicoData.pesoProduto} Kg</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Preço</p>
            <p className="valor">R$ {historicoData.precoProduto}</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Tipo da Operação</p>
            <p className="valor">{historicoData.tipoOperacao}</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Categoria</p>
            <p className='valor'>{historicoData.categoria}</p>
        </div>
    </div>
    )
}

export default CardInfoHistoricoTransacao;    