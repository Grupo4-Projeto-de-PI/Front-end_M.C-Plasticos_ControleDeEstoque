import { Routes, Route } from "react-router-dom";
import { ListarHistoricoController } from "@pages/Jornada_De_Transacoes/listar-historico/index.js";
import { ListarEstoqueAtualController } from "@pages/Jornada_de_Estoque_Atual/listar-estoque-atual/index.js";
import { CriarProdutoController } from "@pages/Jornada_de_Produto/criar-produto/index.js";
import { CriarNovoHistoricoController } from "@pages/Jornada_De_Transacoes/criar-novo-historico/index.js";
// import { ListarInformacoesParceiro } from "@pages/jornada_de_Parceiro_Comercial/listar-informacao-parceiro/index.js";
import { LoginUsuarioController } from "@pages/Jornada_Tela_Inicial/login-de-usuario/index.js";
// import { ListarParceirosController} from "@pages/jornada_de_Parceiro_Comercial/listar-parceiros/index.js";
import { ListarFuncionarioController } from "@pages/Jornada_Tela_de_Administrador/listar-funcionario/index.js";     
import {CriarTipoMaterialController} from "@pages/Jornada_de_Produto/criar-tipo-material/index";

function AppRoutes() {

    return (
        <Routes>
            {/* <Route path="/" element={<LoginUsuarioController />} />  */}
            <Route path="/" element={<CriarTipoMaterialController/>}></Route>
            <Route path="/historico-transacao" element={<ListarHistoricoController />} />
            <Route path="/listar-estoque-atual" element={<ListarEstoqueAtualController />} />
            <Route path="/criar-produto" element={<CriarProdutoController />} />
            <Route path="/criar-novo-historico" element={<CriarNovoHistoricoController />} />
            {/* <Route path="/listar-informacoes-parceiro" element={<ListarInformacoesParceiro />} /> */}
            {/* <Route path="/listar-parceiros" element={<ListarParceirosController />} /> */}
            <Route path="/listar-funcionarios" element={<ListarFuncionarioController />} />
        </Routes>
    );
}

export default AppRoutes;
