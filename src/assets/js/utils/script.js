let materiais = [];

function cadastrarMaterial() {
  const nome = document.getElementById("nome").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (nome && quantidade > 0) {
    materiais.push({ nome, quantidade });
    alert("Material cadastrado!");
    listarMateriais();
  } else {
    alert("Preencha todos os campos!");
  }
}

function listarMateriais() {
  const lista = document.getElementById("listaMateriais");
  lista.innerHTML = "";

  materiais.forEach((mat, index) => {
    lista.innerHTML += `<li>${index+1} - ${mat.nome} (${mat.quantidade})</li>`;
  });
}


function buscarMaterial(nome) {
  return materiais.find(m => m.nome.toLowerCase() === nome.toLowerCase());
}

function filtrarPorQuantidade(min) {
  return materiais.filter(m => m.quantidade >= min);
}

function ordenarPorNome() {
  return materiais.toSorted((a, b) => a.nome.localeCompare(b.nome));
}

function quantidadeTotal() {
  return materiais.reduce((soma, m) => soma + m.quantidade, 0);
}

// document.addEventListener("DOMContentLoaded", () => {
  
//     const btnCadastrar = document.getElementById("btnCadastrar");
//     btnCadastrar.addEventListener("click", cadastrarMaterial);

 
//     const inputFiltro = document.getElementById("quantidadeMinima");
//     if (inputFiltro) {
//         inputFiltro.addEventListener("input", () => {
//             const min = parseInt(inputFiltro.value) || 0;
//             listarMateriais(filtrarPorQuantidade(min));
//         });
//     }

    
//     const btnOrdenar = document.getElementById("btnOrdenar");
//     if (btnOrdenar) {
//         btnOrdenar.addEventListener("click", () => {
//             listarMateriais(ordenarPorNome());
//         });
//     }
// });