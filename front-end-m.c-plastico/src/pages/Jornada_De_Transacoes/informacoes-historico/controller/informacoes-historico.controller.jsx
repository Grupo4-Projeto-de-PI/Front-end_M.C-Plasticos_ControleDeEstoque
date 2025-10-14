import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

class InformacoesHistoricoController {
  constructor() {
    this.api = axios.create({
      baseURL: `${API_BASE_URL}/log-transacao`,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  // Buscar informações de um log específico por ID
  async buscarLogPorId(id) {
    try {
      const response = await this.api.get(`/${id}`);
      return {
        success: true,
        data: this.formatarDadosLog(response.data)
      };
    } catch (error) {
      console.error('Erro ao buscar log por ID:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Erro ao buscar informações do histórico'
      };
    }
  }



  // Formatar dados vindos da API para o formato usado no frontend
  formatarDadosLog(logData) {
    return {
      // Dados do Log
      logInfo: {
        autor: logData.fkTransacao?.fkUsuario?.nome || 'N/A',
        cf: logData.fkTransacao?.fkUsuario?.cf || 'N/A',
        criacao: this.formatarData(logData.dataLog),
        ultimaAlteracao: this.formatarData(logData.dataLog),
        responsavelAlteracao: logData.fkTransacao?.fkUsuario?.nome || 'N/A',
        tipoEdicao: this.formatarTipoEdicao(logData.tipoEdicao)
      },
      
      // Dados do Histórico/Transação
      historicoInfo: {
        produto: logData.fkTransacaoProduto?.nome || 'N/A',
        peso: logData.peso ? `${logData.peso} Kg` : 'N/A',
        preco: logData.valorTotal ? `R$ ${logData.valorTotal.toFixed(2)}` : 'N/A',
        tipoOperacao: this.formatarTipoOperacao(logData.tipoOperacao),
        categoria: logData.fkTransacaoProduto?.categoria?.nome || 'N/A',
        fornecedor: logData.fkTransacao?.fkParceiro?.nome || 'N/A'
      },

      // Dados originais para possíveis atualizações
      dadosOriginais: logData
    };
  }



  // Formatar data para exibição
  formatarData(dataString) {
    if (!dataString) return 'N/A';
    
    try {
      const data = new Date(dataString);
      const dia = data.getDate().toString().padStart(2, '0');
      const mes = (data.getMonth() + 1).toString().padStart(2, '0');
      const ano = data.getFullYear();
      const horas = data.getHours().toString().padStart(2, '0');
      const minutos = data.getMinutes().toString().padStart(2, '0');
      
      return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return 'Data inválida';
    }
  }

  // Formatar tipo de edição
  formatarTipoEdicao(tipo) {
    const tipos = {
      'CREATE': 'Criação',
      'INSERT': 'Inserção',
      'UPDATE': 'Atualização',
      'DELETE': 'Exclusão'
    };
    return tipos[tipo] || tipo || 'N/A';
  }

  // Formatar tipo de operação
  formatarTipoOperacao(tipo) {
    const tipos = {
      'ENTRADA': 'Entrada',
      'SAIDA': 'Saída',
      'AJUSTE': 'Ajuste'
    };
    return tipos[tipo] || tipo || 'N/A';
  }



  // Carregar dados do histórico para exibição (somente leitura)
  async carregarDadosCompletos(id) {
    if (!id) {
      return {
        logData: null,
        historicoData: null,
        loading: false,
        error: 'ID do histórico não fornecido'
      };
    }

    try {
      const response = await this.buscarLogPorId(id);
      
      if (response.success) {
        return {
          logData: response.data.logInfo,
          historicoData: response.data.historicoInfo,
          loading: false,
          error: null
        };
      } else {
        return {
          logData: null,
          historicoData: null,
          loading: false,
          error: response.error
        };
      }
    } catch (err) {
      console.error('Erro ao carregar dados:', err);
      return {
        logData: null,
        historicoData: null,
        loading: false,
        error: 'Erro inesperado ao carregar dados'
      };
    }
  }
}

export default InformacoesHistoricoController;
