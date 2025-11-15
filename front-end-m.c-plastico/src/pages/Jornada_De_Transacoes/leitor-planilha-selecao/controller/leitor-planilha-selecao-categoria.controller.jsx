import OpcaoDeSelecaoDeCategoria from "../view/opcao-de-selecao-categoria"
import { useNavigate } from "react-router-dom";
import useArquivoExcel from "@/hook/useArquivoExcel";
import useLoadingState from "@/hook/useLoadingState";
import { apiPython } from "@service/axios-config";

function LeitorPlanilhaSelecaoCategoria() {
    const navigate = useNavigate();
    const { arquivoExcel, limparArquivo } = useArquivoExcel();
    const { setCarregando, setSucesso, setErro } = useLoadingState();

    const handleSelecaoCategoria = async (categoria) => {
        navigate('/loading');
        setCarregando();

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
    
                const quantidade = response.data.qtdDadosExtraidos || response.data.length || 0;
                setSucesso(quantidade);
                limparArquivo();
            }
            catch (error) {
                console.log('Erro ao enviar arquivo para o backend Python:', error);
                
                const mensagemErro = error.response?.data?.detail || 
                                    error.response?.data?.message || 
                                    'Erro ao processar arquivo';
                
                setErro(mensagemErro);
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

                console.log('Resposta do backend Python para Material Separado:', response.data);
                
                const quantidade = response.data.quantidade || response.data.length || 0;
                setSucesso(quantidade);
                limparArquivo();
            }
            catch (error) {
                console.log('Erro ao enviar arquivo para o backend Python:', error);
                
                const mensagemErro = error.response?.data?.detail || 
                                    error.response?.data?.message || 
                                    'Erro ao processar arquivo';
                
                setErro(mensagemErro);
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