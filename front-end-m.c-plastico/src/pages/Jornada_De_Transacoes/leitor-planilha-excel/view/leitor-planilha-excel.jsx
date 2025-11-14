import Header2 from "@/components/header-2/header-2";
import SelecaoArquivo from "../components/selecao-arquivo/selecao-arquivo";
import '../css/leitor-planilha-excel.css'
import Button from "@/components/button/button";
import Footer from "@/components/footer/footer";

function LeitorPlanilhaExcel({ onAvancar, onCardClick, onFileChange, inputFileRef, nomeArquivo }) {
    return (
        <>
            <Header2 pencil={false} logo={true} />
            <div className="pai-arquivoExcel">
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
        </>
    )
}

export default LeitorPlanilhaExcel;