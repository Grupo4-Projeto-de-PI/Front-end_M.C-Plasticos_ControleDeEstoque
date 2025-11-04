import './card-info-profile.css';

function CardInfoProfile({nome, codigoFuncionario, senha, cargoConcedido}) {
    return (
        <>
            <div className="card">
                <h2>Informações do Perfill</h2>
                <hr />
                <div className="info-item">
                    <p className="label">Nome</p>
                    <p className="valor">Kiteria</p>
                </div>
                <hr />
                <div className="info-item">
                    <p className="label">Código do Funcionário</p>
                    <p className="valor">12345</p>
                </div>
                <hr />
                <div className="info-item">
                    <p className="label">Senha</p>
                    <p className="valor">********</p>
                </div>
                <hr />
                <div className="info-item">
                    <p className="label">Cargo Concedido</p>
                    <p className="valor">Admnistrador</p>
                </div>
            </div>
        </>
    )
}

export default CardInfoProfile;