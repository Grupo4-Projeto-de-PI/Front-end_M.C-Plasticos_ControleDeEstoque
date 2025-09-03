const historicoId = 1;

const btnEditar = document.querySelector('.btn-primario button');
btnEditar.addEventListener('click', () => {

    const inputs = document.querySelectorAll('input.valor');


    const historicoAtualizado = {
        produto: inputs[0].value,
        peso: inputs[1].value,
        preco: inputs[2].value,
        tipo_operacao: inputs[3].value,
        categoria: inputs[4].value,
        parceiro: inputs[5].value
    };


    fetch(`http://localhost:3000/historicos/${historicoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(historicoAtualizado)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao editar histórico');
            }
            return response.json();
        })
        .then(data => {
            alert('Histórico atualizado com sucesso!');
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Falha ao atualizar o histórico.');
        });
});
