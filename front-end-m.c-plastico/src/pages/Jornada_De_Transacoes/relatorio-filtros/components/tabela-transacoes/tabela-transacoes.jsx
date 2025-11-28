import './tabela-transacoes.css';

function TabelaTransacoes({ transacoes }) {
    return (
        <div className="tabela-transacoes">
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Produto</th>
                        <th>Tipo</th>
                        <th>Peso (kg)</th>
                    </tr>
                </thead>
                <tbody>
                    {transacoes.map((transacao, index) => (
                        <tr key={index}>
                            <td>{transacao.data[0]}</td>
                            <td>{transacao.nomeProduto}</td>
                            <td>
                                <span className={`tipo-badge ${transacao.tipoOperacao === 'Entrada' ? 'entrada' : 'saida'}`}>
                                    {transacao.tipoOperacao}
                                </span>
                            </td>
                            <td>{transacao.peso} kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaTransacoes;
