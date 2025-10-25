import Footer from '../../../../components/footer/footer';
import Header2 from '../../../../components/header-2/header-2';
import CardLog from '../components/card-log/card-log';
import CardInfoHistoricoTransacao from '../components/card-info/card-info';
import iconPencil from '../../../../assets/icons/icon-pencil.svg';
import '../css/informacoes-historico.css';

function InformacoesHistorico({ handleBackClick, historicoData }) {
  return (
    <>
      <Header2 text="Log do Histórico" onClickBack={() => handleBackClick()} pencil={true} />
        <main className="conteudo-informacao-historico">
          <CardLog logData={historicoData} />
          <h2>Informações do Histórico</h2>
          <CardInfoHistoricoTransacao historicoData={historicoData} />
        </main>
      <Footer />
    </>
  );
}

export default InformacoesHistorico;
