import OpcaoDeSelecao from "../view/opcao-de-selecao"
import { useNavigate } from "react-router-dom";
function SelecaoLeitorPlanilhaController(){
    const navigate = useNavigate();
    const handleSelecaoEntrada = () => {
        navigate('/opcao-de-selecao-categoria');
    }
    return (
        <OpcaoDeSelecao 
            onSelecaoEntrada={handleSelecaoEntrada}
        />
    )
}

export default SelecaoLeitorPlanilhaController;