import OpcaoDeSelecao from "../view/opcao-de-selecao"
import { useNavigate } from "react-router-dom";
function SelecaoLeitorPlanilhaController(){

    const navigate = useNavigate();

    const handleSelecaoEntrada = () => {
        navigate('/opcao-de-selecao-categoria');
    }

    const handleBackPage = () => {
        navigate('/leitor-planilha-excel');
    }
    
    return (
        <OpcaoDeSelecao 
            onSelecaoEntrada={handleSelecaoEntrada}
            onVoltar={handleBackPage}
        />
    )
}

export default SelecaoLeitorPlanilhaController;