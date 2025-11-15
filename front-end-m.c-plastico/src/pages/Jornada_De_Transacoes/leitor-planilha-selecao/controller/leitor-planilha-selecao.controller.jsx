import OpcaoDeSelecao from "../view/opcao-de-selecao"
import useArquivoExcel from "@/hook/useArquivoExcel";
import { apiPython } from "@/service/axios-config";
import { useNavigate } from "react-router-dom";
function SelecaoLeitorPlanilhaController() {
    const { arquivoExcel, nomeArquivo, limparArquivo } = useArquivoExcel();
    const navigate = useNavigate();

    const handleSelecaoOperacao = async (categoria) => {

        if (categoria === 'saida' && arquivoExcel) {
            try {
                const formData = new FormData();
                formData.append('arquivo', arquivoExcel);

                const response = await apiPython.post('/saida/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log('Resposta do backend Python para Granel:', response.data);
            }
            catch (error) {
                console.log('Erro ao enviar arquivo para o backend Python:', error);
                if (error.response) {
                    console.log('Detalhes do erro:', error.response.data);
                }
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