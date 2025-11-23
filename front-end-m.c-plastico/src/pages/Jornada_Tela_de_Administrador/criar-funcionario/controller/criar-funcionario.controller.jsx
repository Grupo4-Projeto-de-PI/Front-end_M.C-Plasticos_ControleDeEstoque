import React, { useState } from "react";
import CriarFuncionario from "../view/criar-funcionario";
import { api } from "@service/axios-config";
import Swal from "sweetalert2";

export default function CriarFuncionarioController({ onClose }) {
    const [form, setForm] = useState({
        nome: "",
        senha: "",
        confirmarSenha: "",
        tipoUsuario: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validação da senha
        if (form.senha !== form.confirmarSenha) {
            Swal.fire({
                icon: 'error',
                title: 'As senhas não coincidem!',
                text: 'Por favor, confirme a senha corretamente.',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336'
            });
            return;
        }

        if (!form.tipoUsuario) {
            Swal.fire({
                icon: 'error',
                title: 'Selecione a hierarquia do usuário.',
                text: 'É necessário escolher o tipo de usuário.',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336'
            });
            return;
        }

        const tipoMap = {
            "Vendedor": 1,
            "Admin": 2
        };

        const payload = {
            nome: form.nome,
            senha: form.senha,
            tipoUsuario: tipoMap[form.tipoUsuario]
        };

        try {
            await api.post("/usuario", payload);

            Swal.fire({
                icon: 'success',
                title: 'Funcionário criado com sucesso!',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#4caf50'
            });

            onClose(); // agora fecha o modal

        } catch (error) {
            console.error("Erro ao criar funcionário:", error);

            Swal.fire({
                icon: 'error',
                title: 'Erro ao criar funcionário',
                text: error.response?.data?.message || 'Ocorreu um erro inesperado.',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336'
            });
        }
    };

    return (
        <CriarFuncionario
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onClose={onClose}  // importante caso o componente da view precise
        />
    );
}
