import CardInfoProfile from "../components/card-info-profile/card-info-profile"
import "../css/informacoes-perfil.css"
import Button from "@/components/button/button"
import Header2 from "@components/header-2/header-2"
import Footer from "@/components/footer/footer"

function InformacoesPerfil({handleBack, handleEditProfile}) {
    return (
        <>
            <Header2 text={"Informações do Perfil"} pencil={false} onClickBack={handleBack}></Header2>
            <div className="informacoes-perfil-container">
                <CardInfoProfile />
                <Button text={"Editar Perfil"} onClick={handleEditProfile}></Button>
            </div>
            <Footer />
        </>
    )
}

export default InformacoesPerfil