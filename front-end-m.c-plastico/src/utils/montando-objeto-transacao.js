import { formatarDataHoraISO, converterBlobParaURL } from './generic-utils.js';

export const formatarTransacoesParaExibicao = (responseData) => {
    const dataCard = [];
    
    responseData.forEach(transacao => {
        dataCard.push({
            id: transacao.id,
            nomeProduto: transacao.fkProduto.nome,
            peso: transacao.peso,
            data: formatarDataHoraISO(transacao.data),
            tipoOperacao: transacao.tipoOperacao,
            fotoProduto: converterBlobParaURL(transacao.fkProduto.fotoProduto)
        });
    });

    return dataCard.reverse();
};