const API_URL = "http://localhost:3000/parceiros";

// Pega o ID do parceiro a partir da URL
function getParceiroId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || 1; 
}
const parceiroId = getParceiroId(); // Armazena o ID 

// Seleção dos elementos do formulário no HTML
const nomeInput = document.getElementById("nomeParceiro");
const telefoneInput = document.getElementById("telefoneParceiro");
const tipoSelect = document.getElementById("tipoParceiro");
const papelSelect = document.getElementById("papelParceiro");
const btnEditar = document.getElementById("btnEditar");

// Função que carrega os dados de um parceiro da API (GET)
// Busca pelo ID e preenche os campos do formulário
async function carregarDados() {
  try {
    const response = await fetch(`${API_URL}/${parceiroId}`);
    if (!response.ok) throw new Error("Erro ao carregar parceiro");

    const parceiro = await response.json();

    // Preenche os campos do formulário com os dados recebidos
    nomeInput.value = parceiro.nome || "";
    telefoneInput.value = parceiro.telefone || "";
    tipoSelect.value = parceiro.tipo || "Pessoa Física";
    papelSelect.value = parceiro.papel || "Fornecedor";
  } catch (error) {
    console.error("Erro:", error);
    alert("Não foi possível carregar os dados do parceiro.");
  }
}

// Função que envia os dados atualizados do parceiro para a API (PUT)
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

// 1. Carrega os dados do parceiro automaticamente
document.addEventListener("DOMContentLoaded", () => {
  carregarDados();

  const btnEditar = document.getElementById("btnEditar");
  if (btnEditar) {
    btnEditar.addEventListener("click", editarDados);
  }
});