import InformacoesPerfil from "../view/informacoes-perfil"
import { useNavigate } from "react-router-dom"
function InformacoesPerfilController() {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/conta')
    }

    const handleEditProfile = () => {
        navigate('/editar-perfil')
    }

    return (
        <InformacoesPerfil
            handleBack={handleBack}
            handleEditProfile={handleEditProfile}
        ></InformacoesPerfil>
    )
}

export default InformacoesPerfilController