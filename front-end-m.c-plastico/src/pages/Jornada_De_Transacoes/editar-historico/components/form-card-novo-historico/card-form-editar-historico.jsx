function FormCardEditarHistorico({ title, placeholder, fieldName, setFormulario, type, value }) {
    return (
        <>
            <div className="info-item">
                <p className="label">{title}</p>
                <input 
                    type={type} 
                    className="valor" 
                    placeholder={placeholder} 
                    onChange={(e) => setFormulario(fieldName, e.target.value)}
                    value={value || ""}
                />
            </div>
            <hr />
        </>
    )
}
export default FormCardEditarHistorico;
