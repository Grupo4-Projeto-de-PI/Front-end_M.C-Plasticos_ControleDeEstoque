import Footer from '../../../../components/footer/footer';
import Header2 from '../../../../components/header-2/header-2';
import CardLog from '../components/card-log/card-log';
import CardInfoHistoricoTransacao from '../components/card-info/card-info';
import '../css/informacoes-historico.css';

function InformacoesHistorico({ handleBackClick, historicoData, handleEditClick }) {
  return (
    <div className="page-with-header2">
      <Header2
        text="Log do Histórico"
        onClickBack={() => handleBackClick()}
        onClickPencil={handleEditClick}
        pencil={true}
        logo={false}
      />
      <main className="conteudo-informacao-historico scrollable-content">
        <CardLog logData={historicoData} />
        <h2>Informações do Histórico</h2>
        <CardInfoHistoricoTransacao historicoData={historicoData} />
      </main>
      <Footer />
    </div>
  );
}

export default InformacoesHistorico;
