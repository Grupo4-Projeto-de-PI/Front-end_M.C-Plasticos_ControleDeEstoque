import { useState } from "react";
import { api } from "@service/axios-config";
import CriarTipoMaterial from "../view/criar-tipo-material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CriarTipoMaterialController() {
    const [tipoMaterial, setTipoMaterial] = useState("");
    const [status, setStatus] = useState("idle");
    const navigate = useNavigate();

    const arrowBack = () => {
        navigate('/listar-produtos');
    }

    const criarNovoTipoMaterial = async () => {
        if (!tipoMaterial.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção',
                text: 'Digite o nome do tipo de material!',
                timer: 1500,
                showConfirmButton: false,
            });
            return;
        }

        try {
            setStatus("loading");
            await api.post("/tipo-produto", { tipo: tipoMaterial });
            setStatus("success");
            setTipoMaterial("");

            Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Tipo de material criado com sucesso!',
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (error) {
            console.error("Erro ao criar tipo de material:", error);
            setStatus("error");
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Erro ao criar tipo de material.',
                timer: 1500,
                showConfirmButton: false,
            });
        }
    };

    return (
        <>
            <CriarTipoMaterial
                onChangeTipoMaterial={setTipoMaterial}
                onSubmit={criarNovoTipoMaterial}
                status={status}
                arrowBack={arrowBack}
            />
        </>
    );
}