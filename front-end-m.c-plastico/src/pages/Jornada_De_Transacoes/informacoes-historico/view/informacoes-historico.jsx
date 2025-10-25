import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../../../../components/footer/footer';
import Header2 from '../../../../components/header-2/header-2';
import CardLog from '../components/card-log/card-log';
import CardInfo from '../components/card-info/card-info';
import iconPencil from '../../../../assets/icons/icon-pencil.svg';
import InformacoesHistoricoController from '../controller/informacoes-historico.controller';
import '../css/informacoes-historico.css';

function InformacoesHistorico() {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  
  const [logData, setLogData] = useState(null);
  const [historicoData, setHistoricoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const controller = new InformacoesHistoricoController();

  useEffect(() => {
    carregarDados();
  }, [id]);

  const carregarDados = async () => {
    setLoading(true);
    
    const resultado = await controller.carregarDadosCompletos(id);
    
    setLogData(resultado.logData);
    setHistoricoData(resultado.historicoData);
    setError(resultado.error);
    setLoading(resultado.loading);
  };

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };

  if (loading) {
    return (
      <div className="historico-page">
        <Header2 text="Log do Histórico" onClickBack={handleBackClick} />
        <div className="loading-container">
          <p>Carregando informações do histórico...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="historico-page">
        <Header2 text="Log do Histórico" onClickBack={handleBackClick} />
        <div className="error-container">
          <p>Erro: {error}</p>
          <button onClick={carregarDados} className="retry-button">
            Tentar Novamente
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="historico-page">
      <div className="header-container">
        <Header2 text="Log do Histórico" onClickBack={handleBackClick} />
        <div className="edit-icon-container">
          <img 
            src={iconPencil} 
            alt="Editar" 
            className="edit-icon"
          />
        </div>
      </div>
      
      <main className="conteudo">
        {logData && <CardLog logData={logData} />}
        
        <h2>Informações do Histórico</h2>
        
        {historicoData && <CardInfo historicoData={historicoData} />}
      </main>
      
      <Footer />
    </div>
  );
}

export default InformacoesHistorico;
