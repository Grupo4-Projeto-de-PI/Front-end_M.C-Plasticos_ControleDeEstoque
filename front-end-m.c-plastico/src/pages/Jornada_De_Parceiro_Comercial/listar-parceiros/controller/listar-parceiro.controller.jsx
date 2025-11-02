import { useEffect, useState } from "react";
import ListarParceiro from "../view/listar-parceiro";
import api from "../../../../../service/axios-config";
import { data } from "react-router-dom";

function ListarParceiroController() {
    const [parceiros, setParceiros] = useState([]);

    const baseUrl = '/parceiro-comercial';

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
        } catch (error) {
            console.log('Erro ao listar parceiros:', error);
            throw error;
        }
    }


    useEffect(() => {
        listaParceiros();
    }, [setParceiros]);
    
    return (
        <ListarParceiro 
            listaParceiros={parceiros}
        />
    )
}

export default ListarParceiroController;