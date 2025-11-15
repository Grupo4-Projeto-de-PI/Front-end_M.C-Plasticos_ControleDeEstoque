import CardInfoProfile from "../components/card-info-profile/card-info-profile"
import "../css/informacoes-perfil.css"
import Button from "@/components/button/button"
import Header2 from "@components/header-2/header-2"
import Footer from "@/components/footer/footer"

function InformacoesPerfil({handleBack, handleEditProfile, dadosUsuario}) {
    return (
        <div className="page-with-header2">
            <Header2 text={"Informações do Perfil"} pencil={false} onClickBack={handleBack} logo={false}></Header2>
            <div className="informacoes-perfil-container scrollable-content">
                <CardInfoProfile  
                    nome={dadosUsuario.nome}
                    codigoFuncionario={dadosUsuario.codigoFuncionario}
                    senha={dadosUsuario.senha}
                    tipoUsuario={dadosUsuario.tipoUsuario}
                />
                <Button text={"Editar Perfil"} onClick={handleEditProfile}></Button>
            </div>
            <Footer />
        </div>
    )
}

export default InformacoesPerfil