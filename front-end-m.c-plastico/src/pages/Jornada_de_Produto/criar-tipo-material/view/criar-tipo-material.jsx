import "../css/criar-tipo-material.css";
import Footer from "@/components/footer/footer";
import Header2 from "@/components/header-2/header-2";
import CardTipoMaterial from "../components/card-criar-tipo-material";
import Button from "@/components/button/button";

export default function CriarTipoMaterial({ onChangeTipoMaterial, onSubmit, status }) {
    return (
        <div className="conteudo">
            <Header2 text="Criar Tipo Material" />
            <CardTipoMaterial onChangeTipoMaterial={onChangeTipoMaterial} />

            <div className="botao-container">
                <Button
                    text={status === "loading" ? "Salvando..." : "Criar Novo Tipo de Material"}
                    onClick={onSubmit}
                    disabled={status === "loading"}
                />
            </div>

            <Footer />
        </div>
    );
}
