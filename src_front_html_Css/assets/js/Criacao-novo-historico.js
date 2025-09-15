document.getElementById("btnCadastrar").addEventListener("click", async () => {
    const produto = document.getElementById("produto").value;
    const peso = document.getElementById("peso").value;
    const preco = document.getElementById("preco").value;
    const tipo_operacao = document.getElementById("tipo_operacao").value;
    const categoria = document.getElementById("categoria").value;
    const parceiro = document.getElementById("parceiro").value;

    // Criando objeto histórico
    const novoHistorico = {
        produto,
        peso,
        preco,
        tipo_operacao,
        categoria,
        parceiro
    };

    try {
        const response = await fetch("http://localhost:3000/historicos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoHistorico)
        });

        if (response.ok) {
            const data = await response.json();
            alert("Histórico cadastrado com sucesso! ✅");
            console.log("Novo histórico:", data);
        } else {
            alert("Erro ao cadastrar histórico ❌");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro de conexão com o servidor ❌");
    }
});

