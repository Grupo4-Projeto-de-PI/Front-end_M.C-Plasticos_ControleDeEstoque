const API_URL = "http://localhost:3000/parceiros";

function getParceiroId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || 1; 
}

const parceiroId = getParceiroId();

const nomeInput = document.getElementById("nomeParceiro");
const telefoneInput = document.getElementById("telefoneParceiro");
const tipoSelect = document.getElementById("tipoParceiro");
const papelSelect = document.getElementById("papelParceiro");
const btnEditar = document.getElementById("btnEditar");

async function carregarDados() {
  try {
    const response = await fetch(`${API_URL}/${parceiroId}`);
    if (!response.ok) throw new Error("Erro ao carregar parceiro");

    const parceiro = await response.json();

    nomeInput.value = parceiro.nome || "";
    telefoneInput.value = parceiro.telefone || "";
    tipoSelect.value = parceiro.tipo || "Pessoa Física";
    papelSelect.value = parceiro.papel || "Fornecedor";
  } catch (error) {
    console.error("Erro:", error);
    alert("Não foi possível carregar os dados do parceiro.");
  }
}

async function editarDados() {
  const parceiroAtualizado = {
    nome: nomeInput.value,
    telefone: telefoneInput.value,
    tipo: tipoSelect.value,
    papel: papelSelect.value
  };

  try {
    const response = await fetch(`${API_URL}/${parceiroId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parceiroAtualizado)
    });

    if (!response.ok) throw new Error("Erro ao atualizar parceiro");

    const data = await response.json();
    alert("Informações atualizadas com sucesso!");
    console.log("Dados salvos:", data);
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao salvar as alterações.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();

  const btnEditar = document.getElementById("btnEditar");
  if (btnEditar) {
    btnEditar.addEventListener("click", editarDados);
  }
});

