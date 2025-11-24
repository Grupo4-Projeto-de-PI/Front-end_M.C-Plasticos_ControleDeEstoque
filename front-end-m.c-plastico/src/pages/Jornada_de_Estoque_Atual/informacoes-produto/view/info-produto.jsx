import Footer from "../../../../components/footer/footer";
import Card from "../components/card-info-produto/card-info-produto";
import CardItem from "../components/card-info-produto-item/card-info-produto-item";
import Header2 from "@/components/header-2/header-2";

export default function ProductInfoCard({informacoesProduto, onBack}) {

  return (
    <div className="page-with-header">
      <Header2 text={"Informações do " + informacoesProduto.nomeProduto} pencil={false} logo={false} onClickBack={onBack} />
      <div className="scrollable-content">
        <Card title={"Informações do " + informacoesProduto.nomeProduto}>
          <CardItem label="Nome do Produto" value={informacoesProduto.nomeProduto} />
          <hr />
          <CardItem label="Tipo do Produto" value={informacoesProduto.tipoProduto} />
          <hr />
          <CardItem label="Quantidade no estoque" value={informacoesProduto.quantidadeEstoque + " Kg"} />
          <hr />
          <CardItem label="Nível de Prioridade" value={informacoesProduto.nivelPrioridade} valueClass="text-green-500" />
          <hr />
          <CardItem label="Preço Total no Estoque" value={"R$ " + informacoesProduto.valorTotalEstoque} />
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
}