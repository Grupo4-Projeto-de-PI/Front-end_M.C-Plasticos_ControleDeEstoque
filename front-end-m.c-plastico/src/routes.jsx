import { Routes, Route } from "react-router-dom";
import { ListarHistoricoController } from "@pages/Jornada_De_Transacoes/listar-historico/index.js";
import { ListarEstoqueAtualController } from "@pages/Jornada_de_Estoque_Atual/listar-estoque-atual/index.js";
import { CriarProdutoController } from "@pages/Jornada_de_Produto/criar-produto/index.js";
import { CriarNovoHistoricoController } from "@pages/Jornada_De_Transacoes/criar-novo-historico/index.js";
import { ListarInformacoesParceiro } from "@pages/Jornada_De_Parceiro_Comercial/listar-informacao-parceiro/index";
import { LoginUsuarioController } from "@pages/Jornada_Tela_Inicial/login-de-usuario/index.js";
import { FiltroHistoricoTransacaoController } from "@pages/Jornada_De_Transacoes/filtro-transacoes/index.js";
import { FiltroOperacaoController, FiltroTipoMaterialController, FiltroTipoCategoria } from "@pages/Jornada_De_Transacoes/selecao-filtros/index.js";
function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<FiltroOperacaoController />} />
            <Route path="/historico-transacao" element={<ListarHistoricoController />} />
            <Route path="/listar-estoque-atual" element={<ListarEstoqueAtualController />} />
            <Route path="/criar-produto" element={<CriarProdutoController />} />
            <Route path="/criar-novo-historico" element={<CriarNovoHistoricoController />} />
            <Route path="/listar-informacoes-parceiro" element={<ListarInformacoesParceiro />} />
            <Route path="/filtro-historico-transacao" element={<FiltroHistoricoTransacaoController />} />
            <Route path="/filtro-operacao" element={<FiltroOperacaoController />} />
            <Route path="/filtro-tipo-material" element={<FiltroTipoMaterialController />} />
            <Route path="/filtro-tipo-categoria" element={<FiltroTipoCategoria />} />
        </Routes>
    );
}

export default AppRoutes;
