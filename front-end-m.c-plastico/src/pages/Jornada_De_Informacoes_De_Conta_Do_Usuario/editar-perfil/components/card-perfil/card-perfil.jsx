import "./card-perfil.css";

function CardPerfil({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>Editar informações do perfil</h2>
            <hr />

            <div className="info-item">
                <p className="label">Nome de usuário</p>
                <input
                    type="text"
                    id="nome"
                    className="nome"
                    placeholder="Insira seu novo nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </div>

            <hr />

            <div className="info-item">
                <p className="label">Nova senha</p>
                <input
                    type="password"
                    id="senha"
                    className="senha"
                    placeholder="Insira sua nova senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
            </div>

            <div className="info-item">
                <p className="label">Confirme sua senha</p>
                <input
                    type="password"
                    id="confirmarSenha"
                    className="senha"
                    placeholder="Confirme sua senha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default CardPerfil;
