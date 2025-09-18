import { Routes, Route } from "react-router-dom";
import { LoginUsuarioController } from "./pages/Jornada_Tela_Inicial/login-de-usuario/index.js";
import { ListarHistoricoController } from "./pages/Jornada_De_Transacoes/listar-historico/index.js";
import { ListarEstoqueAtualController } from "./pages/Jornada_de_Estoque_Atual/listar-estoque-atual/index.js";
import { CriarProdutoController } from "./pages/Jornada_de_Produto/criar-produto/index.js";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginUsuarioController />} />
            <Route path="/historico-transacao" element={<ListarHistoricoController />} />
            <Route path="/listar-estoque-atual" element={<ListarEstoqueAtualController />} />
            <Route path="/criar-produto" element={<CriarProdutoController />} />
        </Routes>
    );
}

export default AppRoutes;
