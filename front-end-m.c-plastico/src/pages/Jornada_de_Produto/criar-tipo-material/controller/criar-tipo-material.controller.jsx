import { useState } from "react";
import api from "../../../../../service/axios-config";
import CriarTipoMaterial from "../view/criar-tipo-material";
import PopupCheck from "@/components/popup-check/popup-check";

export default function CriarTipoMaterialController() {
    const [tipoMaterial, setTipoMaterial] = useState("");
    const [status, setStatus] = useState("idle");
    const [popup, setPopup] = useState({ visible: false, text: "", type: "" });

    const fecharPopup = () => {
        setPopup({ visible: false, text: "", type: "" });
    };

    const criarNovoTipoMaterial = async () => {
        if (!tipoMaterial.trim()) {
            setPopup({
                visible: true,
                text: "Digite o nome do tipo de material!",
                type: "error",
            });
            setTimeout(fecharPopup, 2000);
            return;
        }

        try {
            setStatus("loading");
            await api.post("/tipo-produto", { tipo: tipoMaterial });
            setStatus("success");
            setTipoMaterial("");

            setPopup({
                visible: true,
                text: "Tipo de material criado com sucesso!",
                type: "success",
            });
        } catch (error) {
            console.error("Erro ao criar tipo de material:", error);
            setStatus("error");
            setPopup({
                visible: true,
                text: "Erro ao criar tipo de material.",
                type: "error",
            });
        } finally {
            // Garante que o popup feche depois de 2 s em qualquer caso
            setTimeout(() => {
                fecharPopup();
                setStatus("idle");
            }, 2000);
        }
    };

    return (
        <>
            <CriarTipoMaterial
                onChangeTipoMaterial={setTipoMaterial}
                onSubmit={criarNovoTipoMaterial}
                status={status}
            />

            {popup.visible && (
                <PopupCheck
                    text={popup.text}
                    type={popup.type}
                />
            )}
        </>
    );
}
