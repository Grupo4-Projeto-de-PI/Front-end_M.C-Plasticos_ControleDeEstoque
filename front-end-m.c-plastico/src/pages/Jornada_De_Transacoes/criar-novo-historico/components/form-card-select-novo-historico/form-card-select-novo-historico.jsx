import iconSeta from '../../../../../assets/icons/icon-seta-select.svg'

function FormCardSelectNovoHistorico({ title, label, options }) {
    return (
        <>
            <div className="info-item select-wrapper">
                <p className="label">{title}</p>
                <select id="produto" className="valor">
                    <option value="" disabled selected>{label}</option>

                    {options.map((value) => (
                        <option key={value.id} value={value.id}>{value.nome}</option>
                    ))}

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