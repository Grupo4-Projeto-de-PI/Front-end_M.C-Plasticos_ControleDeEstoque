import '../css/listar-informacao-parceiro.css';
import CardParceiro from "../components/cardParceiro/CardParceiro"

export default function ListaParceiros() {
  return (
    <>
      <div className="filtro-preto">
        <CardParceiro nome={"Roberto"} telefone={"(11) 91234-5678"} tipo={"Pessoa Física"} papel={"Fornecedor"} />
      </div>
    </>

  );
}