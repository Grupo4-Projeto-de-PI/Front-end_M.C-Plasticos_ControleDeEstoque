import iconSeta from '../../../../../assets/icons/icon-seta-select.svg'

function FormCardSelectNovoHistorico({ title, textOption, idOption }) {
    return (
        <>
            <div className="info-item select-wrapper">
                <p className="label">{title}</p>
                <select id="produto" className="valor">
                    <option value={idOption}>{textOption}</option>
                </select>
                <div className="seta">
                    <img src={iconSeta} alt="Seta" />
                </div>
            </div>
            <hr />
        </>
    )
}

export default FormCardSelectNovoHistorico;