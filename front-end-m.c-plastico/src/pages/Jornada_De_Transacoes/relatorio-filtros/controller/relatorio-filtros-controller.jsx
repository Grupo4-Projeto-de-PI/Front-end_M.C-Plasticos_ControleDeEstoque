import html2pdf from 'html2pdf.js';

export const gerarRelatorio = (transacoes) => {
    console.log('Transacao Recebida', transacoes)
    const totalTransacoes = transacoes.length;
    const entradas = transacoes.filter(t => t.tipoOperacao === 'Entrada').length;
    const saidas = transacoes.filter(t => t.tipoOperacao === 'Saida').length;
    const pesoTotalEntradas = transacoes
        .filter(t => t.tipoOperacao === 'Entrada')
        .reduce((acc, t) => acc + parseFloat(t.peso), 0);
    const pesoTotalSaidas = transacoes
        .filter(t => t.tipoOperacao === 'Saida')
        .reduce((acc, t) => acc + parseFloat(t.peso), 0);

    return {
        totalTransacoes,
        entradas,
        saidas,
        pesoTotalEntradas: pesoTotalEntradas.toFixed(2),
        pesoTotalSaidas: pesoTotalSaidas.toFixed(2),
        saldoPeso: (pesoTotalEntradas - pesoTotalSaidas).toFixed(2),
        transacoes
    };
};

export const baixarRelatorio = (elementoHTML, nomeArquivo = 'relatorio-transacoes.pdf') => {
    const opcoes = {
        margin: 10,
        filename: nomeArquivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opcoes).from(elementoHTML).save();
};
