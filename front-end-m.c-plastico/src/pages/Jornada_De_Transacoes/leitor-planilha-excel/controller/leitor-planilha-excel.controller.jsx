import { useState, useRef } from "react";
import Swal from "sweetalert2";
import LeitorPlanilhaExcel from "../view/leitor-planilha-excel";
import { useNavigate } from "react-router-dom";

function LeitorPlanilhaExcelController(){
    const navigate = useNavigate();
    const [arquivoExcel, setArquivoExcel] = useState(null);
    const [nomeArquivo, setNomeArquivo] = useState('');
    const inputFileRef = useRef(null);

    const handleAvancar = () => {
        if(!arquivoExcel){
            Swal.fire({
                icon: 'warning',
                title: 'Nenhum arquivo selecionado',
                text: 'Por favor, selecione um arquivo Excel antes de avançar.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#f44336'
            });
            return;
        }
        navigate('/leitor-planilha-selecao');
    }

    const handleCardClick = () => {
        inputFileRef.current?.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        
        if (!file) return;

        const fileExtension = file.name.split('.').pop().toLowerCase();
        
        if (fileExtension !== 'xlsx') {
            Swal.fire({
                icon: 'error',
                title: 'Tipo de arquivo inválido',
                html: `
                    <p>Por favor, selecione um arquivo Excel válido.</p>
                    <p><strong>Formato aceito:</strong> .xlsx</p>
                    <p><strong>Arquivo selecionado:</strong> ${file.name}</p>
                `,
                confirmButtonText: 'Entendi',
                confirmButtonColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
       
            event.target.value = '';
            return;
        }

        setArquivoExcel(file);
        setNomeArquivo(file.name);
        console.log('Arquivo armazenado em memória:', file.name);
    };

    return (
        <LeitorPlanilhaExcel 
            onAvancar={handleAvancar}
            onCardClick={handleCardClick}
            onFileChange={handleFileChange}
            inputFileRef={inputFileRef}
            nomeArquivo={nomeArquivo}
        />
    )
}

export default LeitorPlanilhaExcelController;