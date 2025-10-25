import { useEffect, useState } from "react"
import { useNavigate, useParams} from "react-router-dom"
import api from "../../../../service/axios-config"
import InformacoesHistorico from "../view/informacoes-historico.jsx"
function InformacoesHistoricoController(){

  const [infoHistorico, setInfoHistorico] = useState([])
  const baseUrl = '/transacoes'
  const navigate = useNavigate()
  const { idHistorico } = useParams()

  const handleBackClick = () => {
    navigate('/historico-transacao')
  }

  const listaInformacaoHistorico = async (idHistorico) => {
    try {
      const reponse = await api.get(`${baseUrl}/${idHistorico}`)
      console.log(reponse.data)
      setInfoHistorico(reponse.data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    listaInformacaoHistorico()
  }, [infoHistorico])


  return (
    <InformacoesHistorico 
    handleBackClick={handleBackClick}
    historicoData={infoHistorico}
    />
  )
}

export default InformacoesHistoricoController;