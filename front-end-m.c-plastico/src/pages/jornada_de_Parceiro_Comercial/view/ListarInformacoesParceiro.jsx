import React, { useState, useEffect } from "react";
import "../assets/css/pages/ListarInformacoesParceiro.css";
import CardParceiro from "../components/CardParceiro/CardParceiro";
import { getParceiroById } from "../controllers/parceiroController";

export default function ListarInformacoesParceiro() {
  const [mostrar, setMostrar] = useState(true);
  const [parceiro, setParceiro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchParceiro() {
      const dados = await getParceiroById(1); 
      setParceiro(dados);
      setLoading(false);
    }
    fetchParceiro();
  }, []);

  if (loading) return <p>Carregando informações...</p>;
  if (!parceiro) return <p>Não foi possível carregar os dados do parceiro.</p>;

  return (
    <div className="filtro-preto">
      {mostrar && (
        <CardParceiro
          nome={parceiro.nome}
          telefone={parceiro.telefone}
          tipo={parceiro.tipo}
          papel={parceiro.papel}
          onClose={() => setMostrar(false)}
        />
      )}
    </div>
  );
}