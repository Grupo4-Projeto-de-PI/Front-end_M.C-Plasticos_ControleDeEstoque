import '../css/listar-informacao-parceiro.css';
import CardParceiro from "../components/cardParceiro/CardParceiro"

export default function ListaParceiros({ onClose, infoParceiro }) {
  return (
    <>
      <div className="filtro-preto">
        <CardParceiro nome={infoParceiro.nomeParceiro} telefone={infoParceiro.telefoneParceiro} tipo={infoParceiro.tipoParceiro} papel={infoParceiro.papelParceiro} onClose={() => onClose()}/>
      </div>
    </>

  );
}