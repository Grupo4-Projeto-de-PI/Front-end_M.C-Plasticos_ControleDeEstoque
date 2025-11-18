import { useNavigate } from "react-router-dom";
import LoadingPage from "../loading";
import useLoadingState from "../../../hook/useLoadingState";

function LoadingController() {
    const navigate = useNavigate();
    const { estado, quantidadeDados, resetar } = useLoadingState();

    const handleTentarNovamente = () => {
        resetar();
        navigate('/leitor-planilha-selecao');
    };

    return (
        <LoadingPage
            estado={estado}
            quantidadeDados={quantidadeDados}
            onTentarNovamente={handleTentarNovamente}
        />
    );
}

export default LoadingController;
