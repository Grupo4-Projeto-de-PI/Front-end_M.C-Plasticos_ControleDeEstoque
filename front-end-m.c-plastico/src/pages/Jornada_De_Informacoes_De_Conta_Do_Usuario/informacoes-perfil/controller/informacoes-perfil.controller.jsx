import InformacoesPerfil from "../view/informacoes-perfil"
import { api } from "../../../../service/axios-config"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
function InformacoesPerfilController() {

    const navigate = useNavigate()
    const [usuario, setUsuario] = useState({})
    const handleBack = () => {
        navigate('/conta')
    }

    const handleEditProfile = () => {
        navigate('/editar-perfil')
    }

    const usuarioLogado = async () => {
        const idUsuario = sessionStorage.getItem('codigoFuncionario')
        const response = await api.get(`/usuario/${idUsuario}`)
        const dadosUsuario = {
            nome: response.data.nome,
            codigoFuncionario: response.data.codigoFuncionario,
            senha: response.data.senha,
            tipoUsuario: response.data.tipoUsuario,
        }
        setUsuario(dadosUsuario)
    }

    useEffect(() => {
        usuarioLogado()
    })

    return (
        <InformacoesPerfil
            handleBack={handleBack}
            handleEditProfile={handleEditProfile}
            dadosUsuario={usuario}
        ></InformacoesPerfil>
    )
}

export default InformacoesPerfilController