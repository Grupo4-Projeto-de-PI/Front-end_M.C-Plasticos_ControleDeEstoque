import Header2 from "@/components/header-2/header-2"
import Options from "../components/options/options"
import Footer from "@/components/footer/footer"
import "../css/opcao-de-selecao.css"
function OpcaoDeSelecaoDeCategoria({ handleTelaLoading }) {
    return (
        <>
            <Header2 pencil={false} logo={true} />
            <div className="page-content-principal">
                <h1>Qual Categoria Gostaria de Selecionar?</h1>
                <div className="option-page">
                    <h3 className="title-options">Selecione uma Opção: </h3>
                    <Options
                        text1={'Granel'}
                        text2={'Material Separado'}
                        onClickEntrada={handleTelaLoading}
                        onClickSaida={handleTelaLoading}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OpcaoDeSelecaoDeCategoria;