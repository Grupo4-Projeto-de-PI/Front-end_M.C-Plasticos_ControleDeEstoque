import iconSeta from '../../../../../assets/icons/icon-seta-select.svg'

function FormCardSelectEditarHistorico({ title, label, options, fieldName, setFormulario, value }) {
    return (
        <>
            <div className="info-item select-wrapper">
                <p className="label">{title}</p>
                <select 
                    id={fieldName}
                    className="valor" 
                    onChange={(e) => setFormulario(fieldName, e.target.value)}
                    value={value || ""}
                >
                    <option value="" disabled>{label}</option>
                    {options.map((value) => (
                        <option key={value} value={value}>{value}</option>
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

export default FormCardSelectEditarHistorico;
