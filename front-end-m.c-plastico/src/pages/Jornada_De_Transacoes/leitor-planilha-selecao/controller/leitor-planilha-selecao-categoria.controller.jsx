import OpcaoDeSelecaoDeCategoria from "../view/opcao-de-selecao-categoria"
import { useNavigate } from "react-router-dom";
function LeitorPlanilhaSelecaoCategoria() {
    const navigate = useNavigate();

    const telaLoading = () => {
        navigate('/loading');
    }

    const handleBackPage = () => {
        navigate('/leitor-planilha-selecao');
    }

    return (
        <OpcaoDeSelecaoDeCategoria
            handleTelaLoading={telaLoading}
            onVoltar={handleBackPage}
        />
    )
}

export default LeitorPlanilhaSelecaoCategoria;