import './card-info-profile.css';

function CardInfoProfile({nome, codigoFuncionario, senha, tipoUsuario}) {
    return (
        <>
            <div className="card">
                <h2>Informações do Perfill</h2>
                <hr />
                <div className="info-item">
                    <p className="label">Nome</p>
                    <p className="valor">{nome}</p>
                </div>
                <hr />
                <div className="info-item">
                    <p className="label">Código do Funcionário</p>
                    <p className="valor">{codigoFuncionario}</p>
                </div>
                <hr />
                <div className="info-item">
                    <p className="label">Senha</p>
                    <p className="valor">{senha}</p>
                </div>
                <hr />
                <div className="info-item">
                    <p className="label">Cargo Concedido</p>
                    <p className="valor">{tipoUsuario}</p>
                </div>
            </div>
        </>
    )
}

export default CardInfoProfile;