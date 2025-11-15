import "../css/criar-tipo-material.css";
import Footer from "@/components/footer/footer";
import Header2 from "@/components/header-2/header-2";
import CardTipoMaterial from "../components/card-criar-tipo-material";
import Button from "@/components/button/button";

export default function CriarTipoMaterial({ onChangeTipoMaterial, onSubmit, status, arrowBack }) {
    return (
        <div className="page-with-header2">
            <Header2 text="Criar Tipo Material" onClickBack={arrowBack} pencil={false} />
            <div className="conteudo-criar-tipo-material scrollable-content">
                <CardTipoMaterial onChangeTipoMaterial={onChangeTipoMaterial} />
                <div className="botao-container">
                    <Button
                        text={status === "loading" ? "Salvando..." : "Criar Novo Tipo de Material"}
                        onClick={onSubmit}
                        disabled={status === "loading"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
