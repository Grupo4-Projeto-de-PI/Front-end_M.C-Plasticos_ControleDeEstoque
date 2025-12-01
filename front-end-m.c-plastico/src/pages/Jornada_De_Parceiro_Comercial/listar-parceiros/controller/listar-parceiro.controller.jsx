import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListarParceiro from "../view/listar-parceiro";
import { api } from "@service/axios-config";

function ListarParceiroController() {
    const [parceiros, setParceiros] = useState([]);
    const [parceirosCompleto, setParceirosCompleto] = useState([]);
    const [busca, setBusca] = useState("");
    const [idParceiro, setIdParceiro] = useState(null);
    const [mostrarModalInformacoesParceiro, setMostrarModalInformacoesParceiro] = useState(false);
    const navigate = useNavigate();

    const baseUrl = '/parceiro-comercial';

    const handleClickCardParceiro = (id) => {
        setIdParceiro(id);
        setMostrarModalInformacoesParceiro(true);
    }

    const handleFecharModalInformacoesParceiro = () => {
        setMostrarModalInformacoesParceiro(false);
        setIdParceiro(null);
    }

    const listaParceiros = async () => {
        try {
            const response = await api.get(`${baseUrl}`);
            console.log('Resposta do back', response)
            const dataCard = [];

            response.data.forEach(parceiros => {
                dataCard.push({
                    id: parceiros.id,
                    nome: parceiros.nome,
                    telefone: parceiros.telefone,
                    tipo: parceiros.tipoComercial,
                    papelComercial: parceiros.papelComercial,

                });
            });

            setParceiros(dataCard);
            setParceirosCompleto(dataCard);
        } catch (error) {
            console.log('Erro ao listar parceiros:', error);
            throw error;
        }
    }

    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);

    const handleCadastrarParceiro = () => {
        setMostrarModalCadastro(true);
    };

    
    const handleFecharModalCadastro = () => {
        setMostrarModalCadastro(false);
        listaParceiros();
    };

    useEffect(() => {
        listaParceiros();
    }, [setParceiros]);
    
    return (
        <ListarParceiro 
            listaParceiros={parceiros}
            busca={busca}
            handleBuscaChange={(e) => {
                const valor = e.target.value;
                setBusca(valor);
                if (valor.trim() === "") {
                    setParceiros(parceirosCompleto);
                } else {
                    const resultados = parceirosCompleto.filter(p => (p.nome || '').toLowerCase().includes(valor.toLowerCase()));
                    setParceiros(resultados);
                }
            }}
            handleBuscaSubmit={(e) => e.preventDefault()}
            onClickAdd={handleCadastrarParceiro}
            mostrarModalCadastro={mostrarModalCadastro}
            onFecharModalCadastro={handleFecharModalCadastro}
            onEdited={listaParceiros}
            onClickInfoParceiro={handleClickCardParceiro}
            onFecharModalInfoParceiro={handleFecharModalInformacoesParceiro}
            mostrarModalInformacoesParceiro={mostrarModalInformacoesParceiro}
            idParceiro={idParceiro}
        />
    )
}

export default ListarParceiroController;