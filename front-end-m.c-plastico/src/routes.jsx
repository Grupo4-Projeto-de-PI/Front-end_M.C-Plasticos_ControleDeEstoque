import { Routes, Route } from "react-router-dom";
import { ListarHistoricoController } from "@pages/Jornada_De_Transacoes/listar-historico/index.js";
import { ListarEstoqueAtualController } from "@pages/Jornada_de_Estoque_Atual/listar-estoque-atual/index.js";
import { CriarProdutoController } from "@pages/Jornada_de_Produto/criar-produto/index.js";
import { EditarProdutoController } from "./pages/Jornada_de_Produto/editar-produto";
import { CriarNovoHistoricoController } from "@pages/Jornada_De_Transacoes/criar-novo-historico/index.js";
import { ListarInformacoesParceiro } from "@pages/Jornada_De_Parceiro_Comercial/listar-informacao-parceiro/index";
import { LoginUsuarioController } from "@pages/Jornada_Tela_Inicial/login-de-usuario/index.js";
import { FiltroHistoricoTransacaoController } from "@pages/Jornada_De_Transacoes/filtro-transacoes/index.js";
import { ListarProdutosController } from "@pages/Jornada_de_Produto/listar-produto/index";
import { ListarFuncionarioController } from "@pages/Jornada_Tela_de_Administrador/listar-funcionario";
import { CriarTipoMaterialController } from "@pages/Jornada_de_Produto/criar-tipo-material";
import { InformacoesProdutoController } from "@pages/Jornada_de_Produto/informacoes-produto/index";
import { ListarParceirosController } from "@pages/Jornada_De_Parceiro_Comercial/listar-parceiros/index.js";
import { EditarHierarquiaController } from "./pages/Jornada_Tela_de_Administrador/editar-hierarquia/index.js";
import { CadastroParceiroComercialController } from "@pages/Jornada_De_Parceiro_Comercial/cadastro-parceiro-comercial/index.js";
import { InformacoesHistoricoController } from "@pages/Jornada_De_Transacoes/informacoes-historico/index";
import { ContaDoUsuarioController } from "./pages/Jornada_Tela_Inicial/conta_do_usuario/index"
import { EditarHistoricoController } from "@pages/Jornada_De_Transacoes/editar-historico/index";
import {
    FiltroOperacaoController,
    FiltroTipoMaterialController,
    FiltroTipoCategoria,
    FiltroTipoParceiroComercial,
    FiltroCliente,
    FiltroFornecedor,
} from "@pages/Jornada_De_Transacoes/selecao-filtros/index.js";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginUsuarioController />} />
            <Route path="/conta" element={<ContaDoUsuarioController />} />
            <Route path="/listar-produtos" element={<ListarProdutosController />} />
            <Route path="/listar-estoque-atual" element={<ListarEstoqueAtualController />} />
            <Route path="/criar-produto" element={<CriarProdutoController />} />
            <Route path="/criar-novo-historico" element={<CriarNovoHistoricoController />} />
            <Route path="/historico-transacao" element={<ListarHistoricoController />} />
            <Route path="/listar-informacoes-parceiro" element={<ListarInformacoesParceiro />} />
            <Route path="/listar-parceiro" element={<ListarParceirosController />} />
            <Route path="/cadastro-parceiro-comercial" element={<CadastroParceiroComercialController />} />
            <Route path="/filtro-historico-transacao" element={<FiltroHistoricoTransacaoController />} />
            <Route path="/filtro-tipo-parceiro" element={<FiltroTipoParceiroComercial />} />
            <Route path="/filtro-operacao" element={<FiltroOperacaoController />} />
            <Route path="/filtro-tipo-material" element={<FiltroTipoMaterialController />} />
            <Route path="/filtro-tipo-categoria" element={<FiltroTipoCategoria />} />
            <Route path="/filtro-cliente" element={<FiltroCliente />} />
            <Route path="/filtro-fornecedor" element={<FiltroFornecedor />} />
            <Route path="/editar-produto/:id" element={<EditarProdutoController />} />
            <Route path="/criar-novo-historico" element={<CriarNovoHistoricoController />} />
            <Route path="/listar-funcionarios" element={<ListarFuncionarioController />} />
            <Route path="/conta" element={<ContaDoUsuarioController />} />
            <Route path="/editar-historico" element={<EditarHistoricoController />} />
            <Route path="/criar-tipo-material" element={<CriarTipoMaterialController />} />
            <Route path="/informacoes-produto/:id" element={<InformacoesProdutoController />} />
            <Route path="/criar-parceiro" element={<CadastroParceiroComercialController />}/>
            <Route path="/editar-hierarquia" element={<EditarHierarquiaController/>}/>
            <Route path="/informacoes-historico/:id" element={<InformacoesHistoricoController />} />
        </Routes>
    );
}

export default AppRoutes;
