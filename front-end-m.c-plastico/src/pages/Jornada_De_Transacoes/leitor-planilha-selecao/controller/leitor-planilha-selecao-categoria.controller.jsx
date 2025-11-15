import OpcaoDeSelecaoDeCategoria from "../view/opcao-de-selecao-categoria"
import { useNavigate } from "react-router-dom";
import useArquivoExcel from "@/hook/useArquivoExcel";
import { apiPython } from "@service/axios-config";

function LeitorPlanilhaSelecaoCategoria() {
    const navigate = useNavigate();
    const { arquivoExcel, nomeArquivo, limparArquivo } = useArquivoExcel();

    const handleSelecaoCategoria = async (categoria) => {
        if (categoria === 'granel' && arquivoExcel) {
            try {
                const formData = new FormData();
                formData.append('arquivo', arquivoExcel);

                const response = await apiPython.post('/granel/', formData, {
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

        if (categoria === 'materialSeparado' && arquivoExcel) {
            try {
                const formData = new FormData();
                formData.append('arquivo', arquivoExcel);

                const response = await apiPython.post('/material-separado/', formData, {
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
    }

    const handleBackPage = () => {
        navigate('/leitor-planilha-selecao');
    }

    return (
        <OpcaoDeSelecaoDeCategoria
            handleTelaLoading={handleSelecaoCategoria}
            onVoltar={handleBackPage}
        />
    )
}

export default LeitorPlanilhaSelecaoCategoria;