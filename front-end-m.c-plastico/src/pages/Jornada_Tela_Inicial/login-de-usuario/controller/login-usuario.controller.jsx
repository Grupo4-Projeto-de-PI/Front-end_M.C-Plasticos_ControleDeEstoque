import api from "../../../../service/axios-config";
import LoginDeUsuario from "../view/login-de-usuario";

function LoginUsuarioController() {
    const baseUrl = '/usuario';

    const handleLogin = async (codigoFuncionario, senhaLog) => {
    try {
        const response = await api.post(
            `${baseUrl}/login`,
            { codigoFuncionario, senhaLog }
        );

        if (response.status === 200) {
            const { token } = response.data;
            localStorage.setItem('token', token);
            console.log(
                "Login realizado com sucesso! \n Token armazenado no localStorage.", response.data
            )
        }

    } catch (error) {
        const { status, data } = error.response;
        console.log("Erro ao fazer login: \n Status: ", status, "\n Mensagem: ", data);
    }
};

    return (
        <LoginDeUsuario handleLogin={handleLogin} />
    )
}

export default LoginUsuarioController;
