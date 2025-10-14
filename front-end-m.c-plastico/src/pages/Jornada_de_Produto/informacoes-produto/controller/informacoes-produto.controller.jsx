import { useState, useEffect } from "react";
import axios from "axios";

export default function InformacoesProdutoController(idProduto) {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/produto/id?id=${idProduto}`)
            .then(response => setProduto(response.data))
            .catch(() => setProduto(null))
            .finally(() => setLoading(false));
    }, [idProduto]);

    return { produto, loading };
}