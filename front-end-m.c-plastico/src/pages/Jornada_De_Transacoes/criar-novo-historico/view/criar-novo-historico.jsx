import Header2 from "@components/header-2/header-2";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import FormNovoHistorico from "../components/form-novo-historico/form-novo-historico";
import "../css/criar-novo-historico.css";


function CriarNovoHistorico() {
    return (
        <>
            <Header2 text={'Criar Novo Histórico'}/>
            <main className="conteudo">
                <FormNovoHistorico title={'Criar Novo Histórico'}/>
                <Button text={'Cadastrar Novo Histórico'}/>
            </main>
            <Footer />
        </>
    );
}

export default CriarNovoHistorico;