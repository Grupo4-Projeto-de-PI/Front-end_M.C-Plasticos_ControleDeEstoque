import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import Card from "../components/card-info-produto/card-info-produto";
import CardItem from "../components/card-info-produto-item/card-info-produto-item";

export default function ProductInfoCard() {
  return (
    <div className="page-with-header">
      <Header
        text="Informações do estoque de"
      ></Header>
      <div className="scrollable-content">
        <Card title="Informações do Papelão">
          <CardItem label="Nome do Produto" value="Papelão" />
          <hr />
          <CardItem label="Tipo do Produto" value="Nenhum" />
          <hr />
          <CardItem label="Quantidade no estoque" value="500 Kg" />
          <hr />
          <CardItem label="Nível de Prioridade" value="Baixa" valueClass="text-green-500" />
          <hr />
          <CardItem label="Nível de Saúde Dentro do Estoque" value="Alto" valueClass="text-green-600" />
          <hr />
          <CardItem label="Preço Total no Estoque" value="R$ 130,00" />
          <hr />
          <CardItem label="Última atualização do Produto" value="11/04/2025 - 10:00" />
          <hr />
          <CardItem label="Fornecedor do Produto" value="Roberto" />
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
}