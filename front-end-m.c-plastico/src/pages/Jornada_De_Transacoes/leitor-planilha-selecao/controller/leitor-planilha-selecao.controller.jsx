import OpcaoDeSelecao from "../view/opcao-de-selecao"
import useArquivoExcel from "@/hook/useArquivoExcel";
import useLoadingState from "@/hook/useLoadingState";
import { apiPython } from "@/service/axios-config";
import { useNavigate } from "react-router-dom";
function SelecaoLeitorPlanilhaController() {
    const { arquivoExcel, nomeArquivo, limparArquivo } = useArquivoExcel();
    const { setCarregando, setSucesso, setErro } = useLoadingState();
    const navigate = useNavigate();

    const handleSelecaoOperacao = async (categoria) => {

        if (categoria === 'saida' && arquivoExcel) {
            navigate('/loading');
            setCarregando();

            try {
                const formData = new FormData();
                formData.append('arquivo', arquivoExcel);

                const response = await apiPython.post('/saida/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const quantidade = response.data.qtdDadosExtraidos || response.data.quantidade || response.data.length || 0;
                setSucesso(quantidade);
            }
            catch (error) {
                const mensagemErro = error.response?.data?.detail || 
                                    error.response?.data?.message || 
                                    'Erro ao processar arquivo';
                
                setErro(mensagemErro);
            }
        }
        else {
            navigate('/opcao-de-selecao-categoria');
        }
    }

    const handleBackPage = () => {
        navigate('/leitor-planilha-excel');
    }

    return (
        <>
            <OpcaoDeSelecao
                handleSelecaoOperacao={handleSelecaoOperacao}
                onVoltar={handleBackPage}
            />
        </>
    )
}

export default SelecaoLeitorPlanilhaController;