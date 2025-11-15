import Header2 from "@/components/header-2/header-2";
import SelecaoArquivo from "../components/selecao-arquivo/selecao-arquivo";
import '../css/leitor-planilha-excel.css'
import Button from "@/components/button/button";
import Footer from "@/components/footer/footer";

function LeitorPlanilhaExcel({ onAvancar, onCardClick, onFileChange, inputFileRef, nomeArquivo, onVoltar }) {
    return (
        <div className="page-with-header2">
            <Header2 pencil={false} logo={true} onClickBack={onVoltar}/>
            <div className="pai-arquivoExcel scrollable-content">
                <h1>Leitor de Planilha Excel</h1>
                <SelecaoArquivo 
                    onCardClick={onCardClick}
                    onFileChange={onFileChange}
                    inputFileRef={inputFileRef}
                    nomeArquivo={nomeArquivo}
                />
                <Button text="Avançar" tipo="text" onClick={onAvancar}/>
            </div>
            <Footer />
        </div>
    )
}

export default LeitorPlanilhaExcel;