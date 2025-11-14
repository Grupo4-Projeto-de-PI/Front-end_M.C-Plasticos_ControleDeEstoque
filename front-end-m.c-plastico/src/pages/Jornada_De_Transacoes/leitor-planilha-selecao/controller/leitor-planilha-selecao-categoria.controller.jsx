import OpcaoDeSelecaoDeCategoria from "../view/opcao-de-selecao-categoria"
import { useNavigate } from "react-router-dom";
function LeitorPlanilhaSelecaoCategoria() {
    const navigate = useNavigate();

    const telaLoading = () => {
        navigate('/loading');
    }

    return (
        <OpcaoDeSelecaoDeCategoria
            handleTelaLoading={telaLoading}
        />
    )
}

export default LeitorPlanilhaSelecaoCategoria;