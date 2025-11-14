import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@service/axios-config.js";
import Swal from "sweetalert2";
import "../../../../../src/assets/css/sweet-alert-custom.css";
import EditarPerfil from "../view/editar-perfil";

export default function EditarPerfilController() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        senha: "",
        confirmarSenha: ""
    });
    const [codigoFuncionario, setCodigoFuncionario] = useState(null);

    useEffect(() => {
        const nomeSession = sessionStorage.getItem("nome");
        const codigo = sessionStorage.getItem("codigoFuncionario");

        if (!codigo) {
            Swal.fire({
                icon: "warning",
                title: "Sessão expirada",
                text: "Faça login novamente.",
                timer: 2000,
                showConfirmButton: false
            });
            navigate("/");
            return;
        }

        setCodigoFuncionario(codigo);
        setFormData((prev) => ({ ...prev, nome: nomeSession || "" }));
    }, [navigate]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nome, senha, confirmarSenha } = formData;

        // Nenhum campo preenchido
        if (!nome.trim() && !senha.trim()) {
            Swal.fire("Atenção", "Preencha ao menos um campo para editar.", "info");
            return;
        }

        try {
            // Atualiza nome se estiver preenchido e for diferente do atual
            const nomeAtual = sessionStorage.getItem("nome");
            if (nome.trim() && nome.trim() !== nomeAtual) {
                await api.patch(`/usuario/nome?codigoFuncionario=${codigoFuncionario}`, { nome });
                sessionStorage.setItem("nome", nome);
            }

            // Atualiza senha se ambos os campos forem preenchidos
            if (senha.trim() || confirmarSenha.trim()) {
                if (!senha.trim() || !confirmarSenha.trim()) {
                    Swal.fire("Erro", "Preencha ambos os campos de senha.", "error");
                    return;
                }
                if (senha !== confirmarSenha) {
                    Swal.fire("Erro", "As senhas não coincidem.", "error");
                    return;
                }
                await api.patch(`/usuario/senha?codigoFuncionario=${codigoFuncionario}`, { senha });
            }

            Swal.fire({
                icon: "success",
                title: "Perfil atualizado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });

            setTimeout(() => navigate("/conta"), 1500);
        } catch (error) {
            console.error("Erro ao atualizar perfil:", error);
            Swal.fire("Erro", "Não foi possível atualizar o perfil.", "error");
        }
    };

    return (
        <EditarPerfil
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            arrowBack={() => navigate("/conta")}
        />
    );
}
