import { Routes, Route } from "react-router-dom";
import { LoginUsuarioController } from "./pages/Jornada_Tela_Inicial/login-de-usuario/index.js";
import { ListarHistoricoController } from "./pages/Jornada_De_Transacoes/listar-historico/index.js";
import ListarInformacoesParceiro from "./pages/jornada_de_Parceiro_Comercial/listar-informacao-parceiro/view/ListarInformacoesParceiro.jsx";
function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<ListarInformacoesParceiro />} />
            <Route path="/historico-transacao" element={<ListarHistoricoController />} />
            <Route path="/listar-estoque-atual" element={<ListarEstoqueAtualController />} />
            <Route path="/criar-produto" element={<CriarProdutoController />} />
        </Routes>
    );
}

export default AppRoutes;
