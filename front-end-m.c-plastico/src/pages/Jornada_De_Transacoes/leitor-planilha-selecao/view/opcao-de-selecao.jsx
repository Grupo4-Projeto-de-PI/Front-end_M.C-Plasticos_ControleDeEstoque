import Header2 from "@/components/header-2/header-2"
import Options from "../components/options/options"
import Footer from "@/components/footer/footer"
import "../css/opcao-de-selecao.css"
function OpcaoDeSelecao({ handleSelecaoOperacao, onVoltar }) {
    return (
        <>
            <Header2 pencil={false} logo={true} onClickBack={onVoltar} />
            <div className="page-content-principal">
                <h1>Qual Parte da Planilha Deseja Ler?</h1>
                <div className="option-page">
                    <h3 className="title-options">Selecione uma Opção: </h3>
                    <Options
                        text1={'Entradas'}
                        text2={'Saidas'}
                        value1={'entrada'}
                        value2={'saida'}
                        onClickEntrada={handleSelecaoOperacao}
                        onClickSaida={handleSelecaoOperacao}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OpcaoDeSelecao;