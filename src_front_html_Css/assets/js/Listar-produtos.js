async function carregarProdutos() {
  try {
    const response = await fetch("http://localhost:3000/produtos");

    if (!response.ok) {
      throw new Error("Erro ao carregar produtos");
    }

    const produtos = await response.json();
    const container = document.getElementById("produtos-container");

    container.innerHTML = ""; 

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

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erro:", error);
    alert("Não foi possível carregar os produtos.");
  }
}

document.addEventListener("DOMContentLoaded", carregarProdutos);
