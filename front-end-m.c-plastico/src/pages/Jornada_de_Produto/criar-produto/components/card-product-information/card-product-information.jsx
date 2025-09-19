import './card-product-information.css';
import IconSetaSelect from '../../../../../assets/icons/icon-seta-select.svg'

function CardProductInformation() {
  return (
    <>
        <div className="card">
            <h2>Insira as Informações do Produto</h2>
            <hr />

            <div className="info-item">
                <p className="label">Nome do Produto</p>
                <input type="text" className="valor" placeholder="Insira o nome do produto" />
            </div>
            <hr />

            <div className="info-item select-wrapper">
                <p className="label">Tipo do Produto</p>
                <select className="valor" defaultValue="">
                    <option disabled value="" className="placeholder">Insira o tipo do produto</option>
                    <option>Papelão</option>
                    <option>Plástico</option>
                    <option>Vidro</option>
                </select>
                <div className="seta">
                    <img src={IconSetaSelect} alt="Seta" />
                </div>
            </div>
            <hr/>

            <div className="info-item select-wrapper">
                <p className="label">Prioridade do Produto</p>
                <select className="valor prioridade" defaultValue="">
                    <option style={{ color: "rgba(186, 186, 186, 1)" }} disabled value="">Insira a prioridade do produto</option>
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
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