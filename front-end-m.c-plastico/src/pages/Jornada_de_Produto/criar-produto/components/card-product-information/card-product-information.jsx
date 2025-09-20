import './card-product-information.css';
import IconSetaSelect from '../../../../../assets/icons/icon-seta-select.svg'

function CardProductInformation({
    tipoProduto,
    setNomeProduto,
    setTipoProdutoSelecionado,
    setPrioridade
}) {

    return (
        <>
            <div className="card">
                <h2>Insira as Informações do Produto</h2>
                <hr />

                <div className="info-item">
                    <p className="label">Nome do Produto</p>
                    <input type="text" className="valor" placeholder="Insira o nome do produto" id='nomeProduto'
                        onChange={(e) => setNomeProduto(e.target.value)}
                    />
                </div>
                <hr />

                <div className="info-item select-wrapper">
                    <p className="label">Tipo do Produto</p>
                    <select className="valor" id='tipoProduto'
                        onChange={(e) => setTipoProdutoSelecionado(e.target.value)}
                    >
                        <option disabled value="" selected className="placeholder">Insira o tipo do produto</option>
                        {tipoProduto.map((tipo) => (
                            <option key={tipo.id} value={tipo.id}>{tipo.tipo}</option>
                        ))}
                    </select>
                    <div className="seta">
                        <img src={IconSetaSelect} alt="Seta" />
                    </div>
                </div>
                <hr />

                <div className="info-item select-wrapper">
                    <p className="label">Prioridade do Produto</p>
                    <select className="valor prioridade" id='prioridade'
                        onChange={(e) => setPrioridade(e.target.value)}
                    >
                        <option style={{ color: "rgba(186, 186, 186, 1)" }} disabled selected>Insira a prioridade do produto</option>
                        <option value={1}>Baixa</option>
                        <option value={0}>Alta</option>
                    </select>
                    <div className="seta">
                        <img src={IconSetaSelect} alt="Seta" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProductInformation;