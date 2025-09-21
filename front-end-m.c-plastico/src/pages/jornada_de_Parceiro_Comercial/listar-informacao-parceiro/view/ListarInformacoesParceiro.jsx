import React, { useState, useEffect } from "react";
import "../css/ListarInformacoesParceiro.css";
import "../css/CardParceiro.css";
import { getAllParceiros, getParceiroById } from "../controller/parceiroController.jsx";

export default function ListaParceiros() {
  const [parceiros, setParceiros] = useState([]);
  const [parceiroSelecionado, setParceiroSelecionado] = useState(null);

  useEffect(() => {
    async function carregarParceiros() {
      try {
        const data = await getAllParceiros();
        setParceiros(data);
      } catch (error) {
        console.error("Erro ao carregar lista de parceiros:", error);
      }
    }
    carregarParceiros();
  }, []);

  async function abrirDetalhes(id) {
    try {
      const parceiro = await getParceiroById(id);
      setParceiroSelecionado(parceiro);
    } catch (error) {
      console.error("Erro ao abrir detalhes:", error);
    }
  }

  return (
    <div>
      <h1>Parceiros</h1>
      <ul>
        {parceiros.map((p) => (
          <li key={p.id} onClick={() => abrirDetalhes(p.id)}>
            {p.nome} - {p.tipoParceiro}
          </li>
        ))}
      </ul>

      {/* Modal */}
      {parceiroSelecionado && (
        <div className="modal">
          <h2>Informações do Parceiro</h2>
          <p><b>Nome:</b> {parceiroSelecionado.nome}</p>
          <p><b>Telefone:</b> {parceiroSelecionado.telefone}</p>
          <p><b>Tipo:</b> {parceiroSelecionado.tipoParceiro}</p>
          <p><b>Papel Comercial:</b> {parceiroSelecionado.papelComercial}</p>
          <button onClick={() => setParceiroSelecionado(null)}>Fechar</button>
        </div>
      )}
    </div>
  );
}