import { useEffect } from "react";
import ListaParceiros  from "../view/ListarInformacoesParceiro"
import { api } from "@/service/axios-config";
import { useState } from "react";
function ParceiroComercialController({idParceiro, onClose}){

  const [infoParceiro, setInfoParceiro] = useState({});

  const dadosParceiro = async () => {
    try {
      const response = await api.get(`/parceiro-comercial/${idParceiro}`);
      setInfoParceiro({
        nomeParceiro: response.data.nome,
        telefoneParceiro: response.data.telefone,
        tipoParceiro: response.data.tipoComercial,
        papelParceiro: response.data.papelComercial,
      })
      console.log('Resposta do back', response.data)

    } catch (error) {
      console.log('Erro ao obter dados do parceiro:', error);
    }
  }

  useEffect(() => {
    dadosParceiro();
  }, [])

  return <ListaParceiros 
    onClose={onClose}
    infoParceiro={infoParceiro}
  />
}

export default ParceiroComercialController;