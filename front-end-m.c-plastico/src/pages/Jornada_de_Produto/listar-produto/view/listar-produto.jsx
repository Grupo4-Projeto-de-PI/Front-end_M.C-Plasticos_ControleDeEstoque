import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import ContentCard from "../components/content-card/content-card";
import FooterPopupSelected from "@/components/footer-popup-selected/footer-popup-selected";
import { converterBlobParaURL } from "@/utils/generic-utils";
import '../css/listar-produto.css';

function ListarProdutos({ 
    listaProdutos, 
    handleNavigate, 
    handleEdit, 
    popupVisible,
    handleCriarProduto,
    handleCriarTipoMaterial,
    handleClosePopup
}) {
    return (
        <>
            <Header
                text="Produtos"
                showAdd={true}
                onClickAdd={handleNavigate}
            />
            
            {popupVisible && (
                <FooterPopupSelected
                    title="O que você deseja fazer?"
                    onClickButton1={handleCriarProduto}
                    onClickButton2={handleCriarTipoMaterial}
                    button1Text="Produto"
                    button2Text="Tipo de Material"
                    onClose={handleClosePopup}
                />
            )}

            <div className="card-pai">
                {listaProdutos.length > 0 ? (
                    listaProdutos.map((produto) => (
                        <ContentCard
                            key={produto.id}
                            nomeProduto={produto.nome}
                            tipoProduto={produto.tipo?.tipo || ""}
                            precoMedio={produto.precoMedio || "0,00"}
                            imagem={converterBlobParaURL(produto.fotoProduto) }
                            onEdit={() => handleEdit(produto.id)}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>Nenhum produto cadastrado</p>
                )}
            </div>

            <Footer />
        </>
    );
}

export default ListarProdutos;