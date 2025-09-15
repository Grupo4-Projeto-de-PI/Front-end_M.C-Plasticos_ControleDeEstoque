async function carregarProdutos() {
  try {
    const response = await fetch("http://localhost:3000/produtos");

    // Tratando erro
    if (!response.ok) {
      throw new Error("Erro ao carregar produtos");
    }

    // Converte resposta em json
    const produtos = await response.json();

    const container = document.getElementById("produtos-container");
    container.innerHTML = "";

    //Para cada produto recebido, cria um card dinamicamente
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="../../assets/icons/${produto.icone}" alt="${produto.nome}">
        <div class="info">
          <h2>${produto.nome}</h2>
          <p>${produto.categoria ? produto.categoria + "<br>" : ""} 
             Preço Médio: R$ ${produto.precoMedio.toFixed(2)}/${produto.unidade}</p>
        </div>
        <span class="edit">✎</span>
      `;

      // Adiciona o card no container da página
      container.appendChild(card);
    });
  } catch (error) {
    //Trata o erro se não carregar os produtos.
    console.error("Erro:", error);
    alert("Não foi possível carregar os produtos.");
  }
}

// Quando a página terminar de carregar, chama a função carregarProdutos()
// Assim, os produtos são exibidos automaticamente ao abrir a página
document.addEventListener("DOMContentLoaded", carregarProdutos);