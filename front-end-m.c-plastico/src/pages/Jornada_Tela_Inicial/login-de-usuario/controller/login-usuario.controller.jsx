import api from "../../../../service/axios-config";
import LoginDeUsuario from "../view/login-de-usuario";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PopupCheck from "../../../../components/popup-check/popup-check";

function LoginUsuarioController() {
    const baseUrl = '/usuario';
    const [getPopup, setPopup] = useState({
        text: '',
        type: '',
        show: false
    });
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId;
        if (getPopup.show) {
            timeoutId = setTimeout(() => {
                setPopup(prev => ({ ...prev, show: false }));
                
                if (getPopup.type === 'success') {
                    navigate("/historico-transacao");
                }
            }, 3000);
        }
        
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [getPopup.show, getPopup.type, navigate]);

    const handleLogin = async (codigoFuncionario, senhaLog) => {
        try {
            const response = await api.post(
                `${baseUrl}/login`,
                { codigoFuncionario, senhaLog }
            );

            if (response.status === 200) {
                setPopup({
                    text: "Login realizado com sucesso!",
                    type: "success",
                    show: true
                });
                return response.data;
            }

        } catch (error) {
            setPopup({
                text: error.response.data.message,
                type: "error",
                show: true
            });
        }
    };

    return (
        <>
            {getPopup.show && (
                <PopupCheck 
                    text={getPopup.text}
                    type={getPopup.type}
                    onClose={() => setPopup(prev => ({ ...prev, show: false }))}
                />
            )}
            <LoginDeUsuario 
                handleLogin={handleLogin} 
            />
        </>
    );
}

export default LoginUsuarioController;