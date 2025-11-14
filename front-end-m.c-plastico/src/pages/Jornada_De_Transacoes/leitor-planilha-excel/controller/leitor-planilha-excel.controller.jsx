import LeitorPlanilhaExcel from "../view/leitor-planilha-excel";
import { useNavigate } from "react-router-dom";
function LeitorPlanilhaExcelController(){

    const navigate = useNavigate();

    const handleAvancar = () => {
        navigate('/leitor-planilha-selecao');
    }
    return (
        <LeitorPlanilhaExcel onAvancar={handleAvancar} />
    )
}

export default LeitorPlanilhaExcelController;