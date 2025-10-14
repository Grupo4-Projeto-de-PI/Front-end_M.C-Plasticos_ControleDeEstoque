import { Routes, Route } from "react-router-dom";
import { ListarHistoricoController } from "@pages/Jornada_De_Transacoes/listar-historico/index.js";
import { ListarEstoqueAtualController } from "@pages/Jornada_de_Estoque_Atual/listar-estoque-atual/index.js";
import { CriarProdutoController } from "@pages/Jornada_de_Produto/criar-produto/index.js";
import { EditarProdutoController } from "./pages/Jornada_de_Produto/editar-produto";
import { CriarNovoHistoricoController } from "@pages/Jornada_De_Transacoes/criar-novo-historico/index.js";
import { ListarInformacoesParceiro } from "@pages/Jornada_De_Parceiro_Comercial/listar-informacao-parceiro/index.js";
import { LoginUsuarioController } from "@pages/Jornada_Tela_Inicial/login-de-usuario/index.js";
import { ListarProdutosController } from "@pages/Jornada_de_Produto/listar-produto/index.js";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/listar-produtos" element={<ListarProdutosController />} />
            <Route path="/" element={<LoginUsuarioController />} />
            <Route path="/listar-estoque-atual" element={<ListarEstoqueAtualController />} />
            <Route path="/criar-produto" element={<CriarProdutoController />} />
            <Route path="/editar-produto/:id" element={<EditarProdutoController />} />
            <Route path="/criar-novo-historico" element={<CriarNovoHistoricoController />} />
            <Route path="/listar-informacoes-parceiro" element={<ListarInformacoesParceiro />} />
            <Route path="/listar-parceiros" element={<ListarParceirosController />} />
            <Route path="/listar-funcionarios" element={<ListarFuncionarioController />} />
        </Routes>
    );
}

export default AppRoutes;
