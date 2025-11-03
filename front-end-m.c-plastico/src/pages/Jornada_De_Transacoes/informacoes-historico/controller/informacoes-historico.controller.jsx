import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../../../service/axios-config"
import InformacoesHistorico from "../view/informacoes-historico.jsx"
function InformacoesHistoricoController() {

  const [infoHistorico, setInfoHistorico] = useState({})
  const baseUrl = '/transacoes'
  const navigate = useNavigate()
  const { id: idHistorico } = useParams()

  const handleBackClick = () => {
    navigate('/historico-transacao')
  }

  const listaInformacaoHistorico = async () => {
    try {
      const response = await api.get(`${baseUrl}/${idHistorico}`)
      const data = response.data

      const historicoEncontrado = {
        Autor: data.fkUsuario.nome,
        codigoFuncionario: data.fkUsuario.codigoFuncionario,
        ultimaAlteracao: "", 
        nomeProduto: data.fkProduto.nome,
        pesoProduto: data.peso,
        precoProduto: data.valorTotal,
        tipoOperacao: data.tipoOperacao,
        categoria: data.categoria,
      }
      
      setInfoHistorico(historicoEncontrado)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    listaInformacaoHistorico()
  }, [])


  return (
    <InformacoesHistorico
      handleBackClick={handleBackClick}
      historicoData={infoHistorico}
    />
  )
}

export default InformacoesHistoricoController;