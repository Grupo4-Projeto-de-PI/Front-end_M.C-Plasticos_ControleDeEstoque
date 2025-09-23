function FormCardNovoHistorico({title, placeholder}) {
    return (
        <>
            <div className="info-item">
                <p className="label">{title}</p>
                <input type="text" className="valor" placeholder={placeholder} />
            </div>
            <hr />
        </>
    )
}

export default FormCardNovoHistorico;