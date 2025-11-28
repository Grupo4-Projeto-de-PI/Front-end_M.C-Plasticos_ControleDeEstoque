# Relatório de Filtros - Documentação

## 📋 Descrição
Funcionalidade de geração e download de relatório em PDF baseado nos filtros aplicados na tela de transações.

## 🗂️ Estrutura de Pastas

```
relatorio-filtros/
├── components/
│   ├── metrica-card/
│   │   ├── metrica-card.jsx
│   │   └── metrica-card.css
│   ├── tabela-transacoes/
│   │   ├── tabela-transacoes.jsx
│   │   └── tabela-transacoes.css
│   └── popup-download-relatorio/
│       ├── popup-download-relatorio.jsx
│       └── popup-download-relatorio.css
├── controller/
│   └── relatorio-filtros-controller.jsx
└── view/
    ├── relatorio-view.jsx
    └── relatorio-view.css
```

## 🎯 Funcionalidades Implementadas

### Controller (`relatorio-filtros-controller.jsx`)
- **gerarRelatorio(transacoes)**: Calcula métricas e prepara dados para o relatório
  - Total de transações
  - Quantidade de entradas e saídas
  - Peso total de entradas e saídas
  - Saldo de peso
  
- **baixarRelatorio(elementoHTML, nomeArquivo)**: Gera e baixa o PDF usando html2pdf.js

### View (`relatorio-view.jsx`)
Componente que monta o corpo do relatório com:
- Logo MC Plásticos
- Data e hora de geração
- Métricas resumidas em cards
- Tabela detalhada de transações
- Rodapé com informações do sistema

### Componentes

#### MetricaCard
Exibe uma métrica individual com:
- Título
- Valor
- Ícone opcional
- Cor personalizável

#### TabelaTransacoes
Tabela formatada com:
- Data, Produto, Tipo e Peso
- Badges coloridos para Entrada/Saída
- Estilo responsivo

#### PopupDownloadRelatorio
Pop-up de confirmação para download com:
- Botão "Baixar Relatório" (verde)
- Botão "Cancelar" (cinza)
- Overlay de fundo

## 🔗 Integração

### Header (`header.jsx`)
Adicionada prop `onClickReportDownload` para acionar o download do relatório.

### ListarHistorico Controller
- Gerencia estado do pop-up de relatório
- Funções `handleClickReportDownload()`, `handleConfirmDownload()` e `handleCancelDownload()`

### ListarHistorico View
- Renderiza o componente RelatorioView de forma oculta
- Exibe o PopupDownloadRelatorio quando acionado
- Passa a prop `onClickReportDownload` para o Header

## 📦 Dependências
- **html2pdf.js**: Biblioteca para conversão de HTML em PDF

## 🚀 Fluxo de Uso

1. Usuário aplica filtros na tela de transações
2. Clica no ícone de relatório no header
3. Pop-up de confirmação aparece
4. Ao confirmar:
   - Relatório é gerado com base nos dados filtrados
   - PDF é baixado automaticamente
   - Nome do arquivo: `relatorio-transacoes-DD-MM-YYYY.pdf`
5. Ao cancelar:
   - Pop-up fecha
   - Filtros permanecem aplicados

## 🎨 Customização

### Modificar Métricas
Edite o arquivo `relatorio-filtros-controller.jsx` na função `gerarRelatorio()`.

### Alterar Layout
Edite `relatorio-view.jsx` e `relatorio-view.css` para modificar a aparência.

### Adicionar Componentes
Crie novos componentes na pasta `components/` seguindo a estrutura existente.

## 📝 Observações

- O relatório só aparece quando há filtros aplicados (`filtroAplicado = true`)
- O componente do relatório é renderizado de forma oculta para permitir a geração do PDF
- As cores das métricas mudam dinamicamente (verde para positivo, vermelho para negativo)
