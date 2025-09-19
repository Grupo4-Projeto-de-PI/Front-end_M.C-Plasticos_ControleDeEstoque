import api from "../../../../service/axios-config";
import LoginDeUsuario from "../view/login-de-usuario";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../../../../assets/css/sweet-alert-custom.css';

function LoginUsuarioController() {
    const baseUrl = '/usuario';
    const navigate = useNavigate();

    const handleLogin = async (codigoFuncionario, senhaLog) => {
        try {
            const response = await api.post(
                `${baseUrl}/login`,
                { codigoFuncionario, senhaLog }
            );

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login realizado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500,
                    iconColor: '#4caf50', // Cor verde personalizada
                    customClass: {
                        icon: 'custom-success-icon'
                    }
                });

                setTimeout(() => {
                    navigate('/historico-transacao');
                }, 1500);

                return response.data;
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro no login',
                text: error.response?.data?.message || 'Ocorreu um erro ao fazer login',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336', // Cor vermelha personalizada
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
        }
    };

    return (
        <>   
            <LoginDeUsuario 
                handleLogin={handleLogin} 
            />
        </>
    );
}

export default LoginUsuarioController;