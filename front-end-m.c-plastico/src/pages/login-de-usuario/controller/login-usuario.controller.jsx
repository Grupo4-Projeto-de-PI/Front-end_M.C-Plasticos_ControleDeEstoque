import api from "../../../service/axios-config";
import LoginDeUsuario from "../view/login-de-usuario";

export function LoginUsuarioController(){

    const baseUrl = '/usuario';

    const handleLogin = async (codigoFuncionario, senha) => {
        try {
            const response = await api.post(`${baseUrl}/login`, {codigoFuncionario, senha});
            console.log("Resposta voltada da API", response.data)
        } catch (error) {
            console.log('Erro ao fazer login:', error);
            throw error;
        }
    };

    return (
        <LoginDeUsuario handleLogin={handleLogin} />
    )
}

