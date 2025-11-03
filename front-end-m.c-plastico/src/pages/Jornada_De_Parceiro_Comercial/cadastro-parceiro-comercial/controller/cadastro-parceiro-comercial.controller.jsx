import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CadastroParceiroComercial from "../view/cadastro-parceiro-comercial";
import api from "../../../../../service/axios-config";

function CadastroParceiroComercialController({ onClose }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        tipo: "",
        papel: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        if (onClose) {
            onClose(); 
        } else {
            navigate('/listar-parceiro'); 
        }
    };

    const validarDados = () => {
        if (!formData.nome || !formData.telefone || !formData.tipo || !formData.papel) {
            Swal.fire({
                icon: 'error',
                title: 'Campos obrigatórios',
                text: 'Por favor, preencha todos os campos antes de continuar.',
                confirmButtonText: 'Entendi',
                confirmButtonColor: '#f44336',
                allowOutsideClick: false,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            return false;
        }

        if (formData.nome.trim().length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Nome muito curto',
                text: 'O nome deve ter pelo menos 2 caracteres.',
                confirmButtonText: 'Corrigir',
                confirmButtonColor: '#f44336',
                allowOutsideClick: false,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            return false;
        }

        const telefoneNumerico = formData.telefone.replace(/\D/g, '');
        if (telefoneNumerico.length < 10 || telefoneNumerico.length > 11) {
            Swal.fire({
                icon: 'error',
                title: 'Telefone inválido',
                text: 'O telefone deve conter entre 10 e 11 dígitos numéricos.',
                confirmButtonText: 'Corrigir',
                confirmButtonColor: '#f44336',
                allowOutsideClick: false,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            return false;
        }

        if (!["Pessoa Física", "Pessoa Jurídica"].includes(formData.tipo)) {
            Swal.fire({
                icon: 'error',
                title: 'Tipo inválido',
                text: 'Selecione um tipo de parceiro válido.',
                confirmButtonText: 'Corrigir',
                confirmButtonColor: '#f44336',
                allowOutsideClick: false,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            return false;
        }

        if (!["Fornecedor", "Cliente"].includes(formData.papel)) {
            Swal.fire({
                icon: 'error',
                title: 'Papel comercial inválido',
                text: 'Selecione um papel comercial válido.',
                confirmButtonText: 'Corrigir',
                confirmButtonColor: '#f44336',
                allowOutsideClick: false,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validarDados()) {
            console.log("Validação local falhou - cadastro não será executado");
            return;
        }

        console.log("Validação local passou - prosseguindo com o cadastro");

        try {
            console.log("Dados do formulário:", formData); 
            
            const nomeValido = formData.nome && formData.nome.trim().length >= 2;
            const telefoneValido = formData.telefone && formData.telefone.replace(/\D/g, '').length >= 10;
            const tipoValido = ["Pessoa Física", "Pessoa Jurídica"].includes(formData.tipo);
            const papelValido = ["Fornecedor", "Cliente"].includes(formData.papel);
            
            if (!nomeValido || !telefoneValido || !tipoValido || !papelValido) {
                console.error("SEGURANÇA: Dados inválidos detectados no momento do envio!");
                console.error("- Nome válido:", nomeValido, formData.nome);
                console.error("- Telefone válido:", telefoneValido, formData.telefone);
                console.error("- Tipo válido:", tipoValido, formData.tipo);
                console.error("- Papel válido:", papelValido, formData.papel);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Erro de segurança',
                    text: 'Os dados foram alterados de forma inválida. Verifique todos os campos.',
                    confirmButtonText: 'Revisar dados',
                    confirmButtonColor: '#f44336',
                    allowOutsideClick: false,
                    iconColor: '#f44336'
                });
                return;
            }
            
            
            const payload = {
                nome: formData.nome.trim(),
                telefone: formData.telefone.replace(/\D/g, ''), 
                tipoComercial: formData.tipo === "Pessoa Física" ? "PF" : "PJ",
                papelComercial: formData.papel === "Fornecedor" ? "FN" : "CL"
            };
            
            if (!payload.nome || !payload.telefone || !payload.tipoComercial || !payload.papelComercial) {
                console.error("SEGURANÇA: Payload inválido detectado!");
                console.error("Payload:", payload);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Erro na preparação dos dados',
                    text: 'Houve um erro ao preparar os dados para envio. Tente novamente.',
                    confirmButtonText: 'Tentar novamente',
                    confirmButtonColor: '#f44336',
                    allowOutsideClick: false,
                    iconColor: '#f44336'
                });
                return; 
            }
            
            console.log("Todas as validações passaram - enviando payload:", payload);
            console.log("Validações finais:");
            console.log("- Nome:", payload.nome, "certo");
            console.log("- Telefone:", payload.telefone, "certo");
            console.log("- Tipo comercial:", payload.tipoComercial, "certo");
            console.log("- Papel comercial:", payload.papelComercial, "certo");

            const response = await api.post("/parceiro-comercial", payload);
            console.log("SUCESSO: Cadastro realizado com sucesso:", response.data);
            
            if (!response.data || response.status !== 201) {
                console.error("Resposta inválida da API:", response);
                throw new Error("Resposta inválida do servidor");
            }
            
            console.log("Resposta da API válida - prosseguindo com limpeza e feedback");
            
            setFormData({
                nome: "",
                telefone: "",
                tipo: "",
                papel: ""
            });
            
            Swal.fire({
                icon: 'success',
                title: 'Parceiro cadastrado com sucesso!',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#4caf50',
                customClass: {
                    icon: 'custom-success-icon'
                }
            });
            
            if (onClose) {
                onClose(); 
            } else {
                navigate('/listar-parceiro');
            }
            
        } catch (error) {
            console.error("Erro completo:", error);
            console.error("Resposta do servidor:", error.response?.data);
            
            let mensagemErro = "Erro ao cadastrar parceiro. Tente novamente!";
            let detalheErro = "";
            let manterModalAberto = false;
            
            if (error.response?.status === 400) {
                manterModalAberto = true; 
                
                if (error.response?.data?.message) {
                    mensagemErro = error.response.data.message;
                } else if (error.response?.data?.errors) {
                    const erros = error.response.data.errors;
                    if (Array.isArray(erros)) {
                        mensagemErro = "Erro de validação";
                        detalheErro = erros.join(", ");
                    } else if (typeof erros === 'object') {
                        mensagemErro = "Erro de validação";
                        detalheErro = Object.values(erros).join(", ");
                    }
                } else if (error.response?.data?.error) {
                    mensagemErro = error.response.data.error;
                } else {
                    mensagemErro = "Dados inválidos. Verifique os campos abaixo:";
                    detalheErro = "• Nome deve ter pelo menos 2 caracteres\n• Telefone deve ter 10-11 dígitos\n• Selecione o tipo do parceiro\n• Selecione o papel comercial";
                }
            } else if (error.response?.status === 409) {
                manterModalAberto = true; 
                mensagemErro = "Parceiro já cadastrado";
                detalheErro = error.response?.data?.message || "Já existe um parceiro com estes dados.";
            } else if (error.response?.status === 422) {
                manterModalAberto = true; 
                mensagemErro = "Dados não puderam ser processados";
                detalheErro = error.response?.data?.message || "Verifique se todos os campos estão preenchidos corretamente.";
            } else if (error.response?.status === 500) {
                mensagemErro = "Erro interno do servidor";
                detalheErro = "Contate o administrador do sistema.";
            } else if (!error.response) {
                mensagemErro = "Erro de conexão";
                detalheErro = "Verifique sua conexão com a internet.";
            }
            
            const alertConfig = {
                icon: 'error',
                title: mensagemErro,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            };
            
            if (manterModalAberto) {
                alertConfig.text = detalheErro;
                alertConfig.confirmButtonText = 'Corrigir dados';
                alertConfig.confirmButtonColor = '#f44336';
                alertConfig.allowOutsideClick = false;
                alertConfig.allowEscapeKey = false;
            } else {
                alertConfig.text = detalheErro;
                alertConfig.showConfirmButton = false;
                alertConfig.timer = 3000;
            }
            
            Swal.fire(alertConfig);
        }
    };

    return (
        <CadastroParceiroComercial
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onClose={handleClose}
        />
    );
}

export default CadastroParceiroComercialController;