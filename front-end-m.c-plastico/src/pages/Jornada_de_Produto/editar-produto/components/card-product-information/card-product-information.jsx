import './card-product-information.css';
import IconSetaSelect from '../../../../../assets/icons/icon-seta-select.svg'

function CardProductInformation({
    tipoProduto,
    setNomeProduto,
    setTipoProdutoSelecionado,
    setPrioridade,
    formData
}) {
    return (
        <div className="card">
            <h2>Insira as Informações do Produto</h2>
            <hr />

            <div className="info-item">
                <p className="label">Nome do Produto</p>
                <input
                    type="text"
                    className="valor"
                    placeholder="Insira o nome do produto"
                    id="nomeProduto"
                    value={formData.nome || ""}
                    onChange={(e) => setNomeProduto(e.target.value)}
                />
            </div>
            <hr />

            <div className="info-item select-wrapper">
                <p className="label">Tipo do Produto</p>
                <select
                    className="valor"
                    id="tipoProduto"
                    value={formData.tipoMaterial || ""}
                    onChange={(e) => setTipoProdutoSelecionado(e.target.value)}
                >
                    <option value="">Selecione o tipo do produto</option>
                    {tipoProduto.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>
                            {tipo.tipo}
                        </option>
                    ))}
                </select>
                <div className="seta">
                    <img src={IconSetaSelect} alt="Seta" />
                </div>
            </div>
            <hr />

            <div className="info-item select-wrapper">
                <p className="label">Prioridade do Produto</p>
                <select
                    className="valor prioridade"
                    id="prioridade"
                    value={formData.prioridade || ""}
                    onChange={(e) => setPrioridade(e.target.value)}
                >
                    <option value="">Selecione a prioridade</option>
                    <option value={1}>Baixa</option>
                    <option value={0}>Alta</option>
                </select>
                <div className="seta">
                    <img src={IconSetaSelect} alt="Seta" />
                </div>
            </div>
        </div>
    );
}

export default CardProductInformation;
