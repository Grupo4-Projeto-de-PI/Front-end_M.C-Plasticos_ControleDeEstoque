import Header2 from "@/components/header-2/header-2"
import Options from "../components/options/options"
import Footer from "@/components/footer/footer"
import "../css/opcao-de-selecao.css"
function OpcaoDeSelecaoDeCategoria({ handleTelaLoading, onVoltar }) {
    return (
        <div className="page-with-header2">
            <Header2 pencil={false} logo={true} onClickBack={onVoltar}/>
            <div className="page-content-principal scrollable-content">
                <h1>Qual Categoria Gostaria de Selecionar?</h1>
                <div className="option-page">
                    <h3 className="title-options">Selecione uma Opção: </h3>
                    <Options
                        text1={'Granel'}
                        text2={'Material Separado'}
                        value1={'granel'}
                        value2={'materialSeparado'}
                        onClickEntrada={handleTelaLoading}
                        onClickSaida={handleTelaLoading}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OpcaoDeSelecaoDeCategoria;