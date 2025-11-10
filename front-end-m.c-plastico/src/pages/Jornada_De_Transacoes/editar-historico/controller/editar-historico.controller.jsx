import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../service/axios-config";
import EditarHistorico from "../view/editar-historico";

export default function EditarHistoricoController() {
  const [transacao, setTransacao] = useState({
    fkProduto: "",
    peso: "",
    valorTotal: "",
    tipoOperacao: "",
    categoria: "",
    fkParceiroComercial: ""
  });

  const { id: idTransacao } = useParams();
  const navigate = useNavigate();
  const baseUrl = '/transacoes';

  const setFormulario = (campo, valor) => {
    setTransacao(prev => ({ ...prev, [campo]: valor }));
  };

  const carregarTransacao = async () => {
    try {
      const response = await api.get(`${baseUrl}/${idTransacao}`);
      const data = response.data;

      setTransacao({
        fkProduto: data.fkProduto?.nome || "",
        peso: data.peso || "",
        valorTotal: data.valorTotal || "",
        tipoOperacao: data.tipoOperacao || "",
        categoria: data.categoria || "",
        fkParceiroComercial: data.fkParceiroComercial?.nome || ""
      });
    } catch (error) {
      console.log("Erro ao carregar histórico:", error);
    }
  };

  const postarNovoHistorico = async () => {
    try {
      // Monta o corpo da requisição com os nomes corretos esperados pelo back
      const transacaoFormatada = {
        fkProduto: parseInt(transacao.fkProduto),
        peso: parseFloat(transacao.peso),
        preco: parseFloat(transacao.valorTotal), // ✅ mudar de valorTotal -> preco
        tipoOperacao: transacao.tipoOperacao,
        categoria: transacao.categoria,
        fkParceiroComercial: parseInt(transacao.fkParceiroComercial)
      };
  
      await api.put(`${baseUrl}/${idTransacao}`, transacaoFormatada);
  
      alert("Histórico atualizado com sucesso!");
      navigate(`/historico-transacao`);
    } catch (error) {
      console.error("Erro ao atualizar histórico:", error);
    }
  };
  

  const arrowBack = () => navigate(-1);

  useEffect(() => {
    carregarTransacao();
  }, []);

  return (
    <EditarHistorico
      setTransacao={setFormulario}
      postarNovoHistorico={postarNovoHistorico}
      arrowBack={arrowBack}
      listaProdutos={[]} // se precisar depois
      listaParceirosComerciais={[]}
      tipoOperacao={["Entrada", "Saída"]}
      categoria={["GR", "PL", "MT"]}
      transacao={transacao}
    />
  );
}
