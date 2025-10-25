import './card-info.css'

function CardInfoHistoricoTransacao({ historicoData }) {
    return (
        <div className="card-info-historico-transacao">
            <div className="info-item-historico-transacao">
                <p className="label">Produto</p>
            <p className="valor">Teste</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Peso</p>
            <p className="valor">Teste</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Preço</p>
            <p className="valor">Teste</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Tipo da Operação</p>
            <p className="valor">Teste</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Categoria</p>
            <p className="valor-red">Teste</p>
        </div>
        <hr />
        <div className="info-item-historico-transacao">
            <p className="label">Fornecedor do Produto</p>
            <p className="valor">Teste</p>
        </div>
    </div>
    )
}

export default CardInfoHistoricoTransacao;    